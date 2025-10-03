import type { UseMutateFunction } from '@tanstack/react-query';
import { create } from 'zustand';

import { ws_connection } from '@/api/apiConfig';
import type {
  IFile,
  IFileResponse,
} from '@/services/applications/applicationTypes';

import { useFlowStore } from '../../FlowStore';
import { ERROR_MESSAGES, PRIORITY_ERRORS } from './FaceScanConfig';
import type { CameraMode, IFrameStatus } from './FaceScanTypes';
import { interpolate, interpolateColor, rgbToCss } from './FaceScanUtils';

const fromColor = [217, 217, 217];
const toColor = [250, 83, 0];
const angles = [-Math.PI / 2, 0, Math.PI / 2, Math.PI];
const arcLength = Math.PI / 2.2;
const outerRadius = window.innerWidth < 450 ? 165 : 215;
const minWidth = 8;
const maxWidth = 12;

type IStates = {
  isSuccess: boolean;
  mode: CameraMode;
  faceRecognition: FaceRecognition | null;
  instruction: string;
  loadingText: string;
  prevErrorKey: string | null;
  canvasSemicircles: HTMLCanvasElement | null;
  isPulsing: boolean;
  pulseProgress: number | null;
  pulseDirection: number | null;
  pulseTarget: number | null;
  pulseRequestId: number | null;
  loading: boolean;
  fileMutationFn: UseMutateFunction<
    IFileResponse,
    Error,
    IFile,
    unknown
  > | null;
  slug: string;
};

type Actions = {
  setFileMutationFn: (
    fn: UseMutateFunction<IFileResponse, Error, IFile, unknown>
  ) => void;
  onMessage: (frameStatus: string) => void;
  init: (
    canvasSemicircles: HTMLCanvasElement,
    rootNode: HTMLDivElement
  ) => void;
  checkLiveness: () => Promise<void>;
  draw: () => void;
  drawPulsing: () => void;
  animatePulse: () => void;
  startPulse: (targetIndex: number | null) => void;
  stopPulse: () => void;
  reset: () => void;
  onError: (err: Error) => void;
  setLoading: (state: boolean) => void;
  onSuccess: () => void;
  setCameraMode: (mode: CameraMode) => void;
  setSlug: (slug: string) => void;
};

const initialStates: IStates = {
  isSuccess: false,
  mode: 'environment',
  loading: false,
  faceRecognition: null,
  instruction: '',
  loadingText: '',
  canvasSemicircles: null,
  isPulsing: false,
  pulseProgress: 0,
  pulseDirection: 1,
  pulseTarget: null,
  pulseRequestId: null,
  prevErrorKey: null,
  fileMutationFn: null,
  slug: '',
};

export const useFaceScanStore = create<IStates & Actions>((set, get) => ({
  ...initialStates,
  setSlug: (slug) => set({ slug: slug }),
  setFileMutationFn: (fn) => set({ fileMutationFn: fn }),
  setCameraMode: (newMode) => set({ mode: newMode }),
  setLoading: (payload) => set({ loading: payload }),
  onError: () => {
    const { reset } = get();
    const { setErrorState, setLivenessOpen } = useFlowStore.getState();
    setErrorState({ isError: true, errorMsg: 'Не удалось распознать лицо' });
    setLivenessOpen(false);
    reset();
  },
  onSuccess: () => {},
  onMessage: async (frameStatus) => {
    const { stopPulse, startPulse, prevErrorKey } = get();
    // const { setLivenessOpen, visionType, current_submission_id } =
    //   useFlowStore.getState();
    const { setSubmissionState } = useFlowStore.getState();
    const parsedStatus: IFrameStatus = JSON.parse(frameStatus);

    if (parsedStatus.command === 'SUCCESS') {
      setSubmissionState({ isSuccess: true, redirect_url: '/' });

      // if (fileMutationFn && slug) {
      //   const payload: IFile = {
      //     field_key: visionType,
      //     filename: '',
      //     content: parsedStatus.data.token,
      //     is_integration_result: false,
      //     slug,
      //   };
      //   if (current_submission_id)
      //     payload['submission_id'] = current_submission_id;
      //   fileMutationFn(payload);
      // }
      // setLivenessOpen(false);
    }

    if (parsedStatus.command === 'STATS' || parsedStatus.command === 'ERROR') {
      const { errors } = parsedStatus.data;
      if (errors) {
        const priorityError = errors.find((error) =>
          PRIORITY_ERRORS.includes(error)
        );
        if (priorityError) {
          const text = ERROR_MESSAGES[priorityError];
          if (text !== prevErrorKey) {
            switch (priorityError) {
              case 64:
                stopPulse();
                startPulse(1);
                break;
              case 65:
                stopPulse();
                startPulse(3);
                break;
              case 67:
                stopPulse();
                startPulse(0);
                break;
              case 68:
                stopPulse();
                startPulse(2);
                break;
              default:
                stopPulse();
                startPulse(null);
            }
            set({
              instruction: text,
              prevErrorKey: text,
            });
          }
        } else {
          const text = ERROR_MESSAGES[errors[0]];
          if (text !== prevErrorKey) {
            set({
              instruction: text,
              prevErrorKey: text,
            });
          }
        }
      }
    }
  },
  init: async (canvasSemicircles, rootNode) => {
    const { checkLiveness, mode } = get();
    const faceR = new FaceRecognition(rootNode, {
      timeout: 30000,
      url: ws_connection,
      heartbeatInterval: 1000,
      mode,
    });

    set({
      canvasSemicircles: canvasSemicircles,
      loadingText: 'Камера не подключеана',
      faceRecognition: faceR,
    });
    await faceR.attachCamera();
    await checkLiveness();
  },
  checkLiveness: async () => {
    const { faceRecognition, startPulse, onMessage, onError, reset } = get();
    const { setErrorState, setLivenessOpen } = useFlowStore.getState();
    try {
      set({
        loadingText: 'Сканируем лицо...',
      });
      startPulse(null);
      if (faceRecognition) {
        await faceRecognition.connectWS();
        faceRecognition.checkLiveness(onMessage, onError);
      }
    } catch (e) {
      console.error(e);
      setErrorState({ isError: true, errorMsg: 'Не удалось распознать лицо' });
      setLivenessOpen(false);
      reset();
    }
  },
  draw: () => {
    const { canvasSemicircles } = get();
    if (canvasSemicircles) {
      const ctx = canvasSemicircles.getContext('2d');
      const { width, height } = canvasSemicircles;
      if (ctx) {
        const cx = width / 2;
        const cy = height / 2;
        ctx.clearRect(0, 0, width, height);

        angles.forEach((angle) => {
          const start = angle - arcLength / 2;
          const end = angle + arcLength / 2;
          ctx.beginPath();
          ctx.arc(cx, cy, outerRadius, start, end, false);

          ctx.strokeStyle = rgbToCss(fromColor);
          ctx.lineWidth = minWidth;

          ctx.stroke();
        });
      }
    }
  },
  drawPulsing: () => {
    const { canvasSemicircles, pulseTarget, pulseProgress } = get();
    if (canvasSemicircles) {
      const ctx = canvasSemicircles.getContext('2d');
      const { width, height } = canvasSemicircles;
      if (ctx) {
        ctx.clearRect(0, 0, width, height);
        const cx = width / 2;
        const cy = height / 2;

        angles.forEach((angle, index) => {
          const start = angle - arcLength / 2;
          const end = angle + arcLength / 2;

          ctx.beginPath();
          ctx.arc(cx, cy, outerRadius, start, end, false);

          const isActive = pulseTarget === null || index === pulseTarget;

          const color = isActive
            ? rgbToCss(interpolateColor(fromColor, toColor, pulseProgress ?? 0))
            : 'rgb(217, 217, 217)';

          const width = isActive
            ? interpolate(minWidth, maxWidth, pulseProgress ?? 0)
            : minWidth;

          ctx.strokeStyle = color;
          ctx.lineWidth = width;
          ctx.lineCap = 'round';
          ctx.stroke();
        });
      }
    }
  },
  animatePulse: () => {
    const {
      isPulsing,
      animatePulse,
      pulseProgress,
      drawPulsing,
      pulseDirection,
    } = get();
    if (!isPulsing) return;
    const temp = (pulseDirection ?? 0) * 0.02 + (pulseProgress ?? 0);
    set({ pulseProgress: temp });
    if (temp >= 1) {
      set({ pulseProgress: 1, pulseDirection: -1 });
    } else if (temp <= 0) {
      set({ pulseProgress: 0, pulseDirection: 1 });
    }

    drawPulsing();
    set({ pulseRequestId: requestAnimationFrame(animatePulse) });
  },
  startPulse: (targetInd) => {
    const { isPulsing, pulseTarget, stopPulse, animatePulse } = get();

    if (isPulsing && pulseTarget === targetInd) return;
    stopPulse();
    set({
      pulseTarget: targetInd,
      pulseProgress: 0,
      pulseDirection: 1,
      isPulsing: true,
    });
    animatePulse();
  },
  stopPulse: () => {
    const { pulseRequestId } = get();
    if (pulseRequestId) {
      cancelAnimationFrame(pulseRequestId);
      set({ pulseRequestId: null });
    }
    set({ isPulsing: false, pulseTarget: null });
  },
  reset: () => set(initialStates),
}));
