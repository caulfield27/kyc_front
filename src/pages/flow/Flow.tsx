import { useEffect } from 'react';
import { useParams } from 'react-router';

import { useApplicationMutation } from '@/services/applications/useApplications';
import { useProcessForm } from '@/services/processes/useProcesses';
import { Button, Label, Loader, Title } from '@/ui';

import { Error, FaceScan, Passport, ProcessStep, Success } from './_components';
import { useFlowStore } from './FlowStore';
import { generatePayload } from './FlowUtils';

const Flow = () => {
  // zustand satore states
  const {
    step,
    isDocReaderOpen,
    isLivenessOpen,
    setPage,
    inputData,
    setStep,
    submissionState,
    setSubmissionState,
    errorState,
  } = useFlowStore();

  // locale states
  const { slug } = useParams();

  // api
  const { isPending, data: process } = useProcessForm(slug ?? '', step);
  const { mutate, isPending: mutationPending } = useApplicationMutation(
    slug ?? '',
    setStep,
    setSubmissionState
  );

  // effect handlers
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background', '#f5f5f5');

    return () => {
      root.style.setProperty('--background', '#ffffff');
    };
  }, []);

  useEffect(() => {
    if (process?.current_page) {
      setPage(process.current_page);
    }
  }, [process]);

  // event handlers

  function handleSend() {
    const payload = {
      step,
      data: generatePayload(inputData),
      is_final: step === process?.total,
    };
    mutate(payload);
  }

  switch (true) {
    case submissionState.isSuccess:
      return <Success />;
    case errorState.isError:
      return <Error />;
    case isLivenessOpen:
      return <FaceScan />;
    case isDocReaderOpen:
      return <Passport />;
    default:
      return isPending ? (
        <Loader />
      ) : (
        <div className="max-w-[var(--container_mw)] m-auto py-8">
          <div className="w-full flex flex-row items-end justify-between border-b-[1px] py-1 border-neutral-300">
            <Title
              className="border-0 mb-0"
              text={process?.process.name ?? ''}
            />
            <Label className="text-neutral-500">{`Шаг ${process?.step ?? 0} из ${process?.total ?? 0}`}</Label>
          </div>
          <ProcessStep />
          <div className="w-full flex justify-end mt-5">
            {step === process?.total ? (
              <Button disabled={mutationPending} onClick={handleSend}>
                {mutationPending ? 'Отправляем' : 'Отправить'}
              </Button>
            ) : (
              <Button
                disabled={mutationPending}
                variant={'outline'}
                onClick={handleSend}
              >
                {mutationPending ? 'отправляем...' : 'Далее'}
              </Button>
            )}
          </div>
        </div>
      );
  }
};

export default Flow;
