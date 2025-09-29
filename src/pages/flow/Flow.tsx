import { useNavigate } from 'react-router';
import { toast } from 'sonner';

import { toasterOptions } from '@/constants';
import { Button, Label, Title } from '@/ui';

import { FaceScan, Passport, ProcessStep } from './_components';
import { useFlowStore } from './FlowStore';
import { useEffect } from 'react';
import type { IAction } from '../process/ProcessTypes';

const Flow = () => {
  // zustand satore states
  const {
    step,
    process,
    data,
    isDocReaderOpen,
    isLivenessOpen,
    nextStep,
  } = useFlowStore();

  // locale states
  const navigate = useNavigate();

  // effect handlers
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background', '#f5f5f5');

    return () => {
      root.style.setProperty('--background', '#ffffff');
    };
  }, []);

  // event handlers
  function handleNextStep() {
    const actions: IAction[] = process.pages[step - 1]?.actions ?? [];
    nextStep(actions);
  }

  if (isLivenessOpen) return <FaceScan />;

  if (isDocReaderOpen) return <Passport />;

  return (
    <div className="max-w-[var(--container_mw)] m-auto py-8">
      <div className="w-full flex flex-row items-end justify-between border-b-[1px] py-1 border-neutral-300">
        <Title className="border-0 mb-0" text={process.name} />
        <Label className="text-neutral-500">{`Шаг ${step} из ${process.pages.length}`}</Label>
      </div>
      <ProcessStep />
      <div className="w-full flex justify-end mt-5">
        {step === process.pages.length ? (
          <Button
            onClick={() => {
              console.log(data);
              toast.success(
                'Данные успешно отправлены на рассмотрения',
                toasterOptions['success']
              );
              navigate('/');
            }}
          >
            Отправить
          </Button>
        ) : (
          <Button variant={'outline'} onClick={handleNextStep}>
            Далее
          </Button>
        )}
      </div>
    </div>
  );
};

export default Flow;
