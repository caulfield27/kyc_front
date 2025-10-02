import {
  defineComponents,
  type DocumentReaderDetailType,
  DocumentReaderService,
  type DocumentReaderWebComponent,
  EventActions,
  GraphicFieldType,
  InternalScenarios,
  type TransactionEvent,
} from '@regulaforensics/vp-frontend-document-components';
import { type CSSProperties, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';

import { useFileUpload } from '@/services/applications';
import type { IFile } from '@/services/applications/applicationTypes';
import { Loader } from '@/ui';

import { useFlowStore } from '../../FlowStore';

const containerStyle: CSSProperties = {
  display: 'flex',
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  justifyContent: 'center',
  alignItems: 'center',
};

export function Passport() {
  // zustand store states
  const {
    setInputData,
    setDocReaderOpen,
    passportType,
    setCurrentSubmissionId,
    current_submission_id,
  } = useFlowStore();

  // locale states
  const { slug } = useParams();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const docReaderRef = useRef<DocumentReaderWebComponent>(null);
  const [loading, setLoading] = useState(true);

  // api
  const { mutate } = useFileUpload(setInputData, setCurrentSubmissionId);

  // event handlers
  const listener = (
    data: CustomEvent<DocumentReaderDetailType | TransactionEvent>
  ) => {
    const shadowRoot = document.querySelector('document-reader')?.shadowRoot;
    const processingContainer = shadowRoot?.children?.[1]?.children?.[0]
      ?.children?.[1]?.children?.[1] as HTMLElement;

    if (processingContainer) {
      processingContainer.style.display = 'none';
    }

    if (data.detail.action === EventActions.SERVICE_INITIALIZED) {
      setLoading(true);
    } else if (
      data.detail.action === EventActions.PROCESS_FINISHED ||
      data.detail.action === EventActions.CAMERA_PROCESS_STARTED
    ) {
      setLoading(false);
    }

    if (data.detail.action === EventActions.PROCESS_FINISHED) {
      const status = data.detail.data?.status;
      const isFinishStatus = status === 1 || status === 2;

      if (!isFinishStatus || !data.detail.data?.response) return;
      if (isFinishStatus || data.detail.data.response) {
        const value = data?.detail?.data?.response?.images?.getField(
          GraphicFieldType.DOCUMENT_FRONT
        )?.valueList[1].value;
        if (value) {
          const payload: IFile = {
            field_key: `doc_${passportType}`,
            filename:
              passportType === 'front'
                ? 'passport_front.png'
                : 'passport_back.png',
            content: value,
            is_integration_result: false,
            slug: slug ?? '',
          };
          if (current_submission_id)
            payload['submission_id'] = current_submission_id;
          mutate(payload);
        }
        setDocReaderOpen(false);
        //todo
      }
    }

    if (data.detail?.action === EventActions.CLOSE) {
      setDocReaderOpen(false);
    }
  };

  // effect handlers
  useEffect(() => {
    const containerCurrent = containerRef.current;

    window.RegulaDocumentSDK = new DocumentReaderService();
    window.RegulaDocumentSDK.workerPath = window.location.origin;
    window.RegulaDocumentSDK.recognizerProcessParam = {
      processParam: {
        scenario: InternalScenarios.Locate,
        multipageProcessing: false,
      },
    };
    window.RegulaDocumentSDK.imageProcessParam = {
      processParam: {
        scenario: InternalScenarios.Locate,
      },
    };

    defineComponents().then(() =>
      window.RegulaDocumentSDK.initialize({
        license: import.meta.env.VITE_REGULA_LICENSE,
      })
    );

    if (!containerCurrent) return;
    containerCurrent.addEventListener('document-reader', listener);

    return () => {
      window.RegulaDocumentSDK.shutdown();
      containerCurrent.removeEventListener('document-reader', listener);
    };
  }, []);

  useEffect(() => {
    const documentReader = docReaderRef.current;

    if (!documentReader) return;
    documentReader.settings = {
      locale: 'ru',
      changeCameraButton: true,
      cameraFrameBorderWidth: 2,
      uploadFileButton: false,
      maxImageSize: 10000,
      closeButton: false,
      copyright: false,
    };
  }, []);

  return (
    <div style={containerStyle} ref={containerRef}>
      {loading && <Loader />}
      <document-reader
        start-screen={false}
        capture-button={true}
        ref={docReaderRef}
        copyright={false}
        close-button={false}
      ></document-reader>
    </div>
  );
}
