import { CheckCircleIcon, Plus, Trash2 } from 'lucide-react';
import { useEffect, useId, useState } from 'react';
import { Link, useParams } from 'react-router';
import { toast } from 'sonner';

import { toasterOptions } from '@/constants';
import { cn } from '@/utils/clsx';
import { useProcessStore } from '@/store';
import type { IPage, IProcess } from '@/store/process/processStoreTypes';
import {
  BadgeCopy,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Button,
  Label,
  Sheet,
  Title,
} from '@/ui';

import { AddPageSheet, ChangeNameDialog } from './_components';
import { ElementCard } from './_components/elementCard/ElementCard';
// import { actions } from './ProcessContants';
// import type { IAction } from './ProcessTypes';

const Process = () => {
  // zustand store states
  const {
    currentPage,
    setCurrentPage,
    setPages,
    removePage,
    setCurrentProcess,
    processes,
    currentProcess,
    updateCurrentProcess,
    updateProcesses,
  } = useProcessStore();

  // locale states
  const { id } = useParams();
  const linkId = useId();
  const [chosenPage, setchosenPage] = useState<IPage | null>(null);

  // effect handlers
  useEffect(() => {
    if (id) {
      const currentProccess = processes.find(
        (proccess) => proccess.id === Number(id)
      );
      if (currentProccess) {
        const processCopy = structuredClone(currentProccess);
        setCurrentProcess(processCopy);
        setCurrentPage(processCopy.pages[0]);
      }
    }

    const root = document.documentElement;
    root.style.setProperty('--background', '#f5f5f5');

    return () => {
      root.style.setProperty('--background', '#ffffff');
    };
  }, []);

  // event handlers
  function handleAddPage() {
    const page = {
      name: 'Новая страница',
      actions: [],
      id: Date.now(),
      isPublished: false,
    };
    setPages(page);
    setCurrentPage(page);
  }

  function handlePublish() {
    if (currentProcess?.isPublished) return;
    if (currentProcess) {
      const generatedLink = `${window.origin}/flow/${linkId}`;
      const updatedProcess: IProcess = {
        ...currentProcess,
        link: generatedLink,
        isPublished: true,
      };
      updateCurrentProcess(updatedProcess, () =>
        toast.success('Процесс успешно опубликован!', toasterOptions['success'])
      );
      updateProcesses(Number(id) || -1);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-2.5 mb-[60px]">
        <Title text={`Процесс:  ${currentProcess?.name}`} />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Кабинет</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="text-neutral-950  font-semibold">
              <BreadcrumbLink asChild>
                <Link className="pointer-events-none" to="process">
                  Создание процесса
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="bg-[#ffffff] p-5 rounded-[16px] flex flex-col gap-6">
        <div className="bg-background p-1 rounded-[8px]">
          <div className="bg-[#ffffff] py-2.5 px-3 rounded-[8px] flex flex-row items-center justify-between mb-[4px]">
            <Label>Страницы</Label>
            <Label>Действия</Label>
          </div>
          <div className="flex flex-col gap-2">
            {currentProcess?.pages.map((page) => {
              return (
                <div
                  onClick={() => {
                    setCurrentPage(page);
                  }}
                  role="button"
                  key={page.id}
                  className={cn(
                    'flex items-center justify-between cursor-pointer w-full p-2.5 bg-[#fff] rounded-[4px]',
                    currentPage?.id === page.id &&
                      'border-[1px] border-[#2563EB]'
                  )}
                >
                  <span>{page.name}</span>
                  <div className="flex flex-row items-center justify-center gap-3">
                    <Button
                      variant={'outline'}
                      onClick={(ev: React.MouseEvent) => {
                        ev.stopPropagation();
                        setCurrentPage(page);
                        setchosenPage(page);
                      }}
                    >
                      <Plus />
                      Добавить элементы
                    </Button>
                    <ChangeNameDialog page={page} />
                    <Button
                      onClick={(ev: React.MouseEvent) => {
                        ev.stopPropagation();
                        removePage(page.id);
                      }}
                      size={'icon'}
                      variant={'outline'}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </div>
              );
            })}
            <div className="w-full flex  justify-end items-center mt-3">
              <Button onClick={handleAddPage} variant={'ghost'}>
                <Plus />
                Добавить страницу
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[20px]  font-semibold">{`Элементы  страницы: ${currentPage?.name}`}</span>
          <div className="flex flex-col gap-6 bg-background rounded-[8px]">
            <div className="p-2 flex flex-col gap-2">
              {currentPage?.actions.length ? (
                currentPage?.actions.map((action, idx) => {
                  return (
                    <ElementCard
                      showDragIcon={false}
                      isDraggable={false}
                      key={action.id}
                      action={action}
                      position={idx + 1}
                    />
                  );
                })
              ) : (
                <div className="bg-white  p-2.5 rounded-[8px] flex justify-center items-center">
                  <span>У страницы пока нет элементов</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-center">
          <Button
            onClick={() => {
              updateProcesses(Number(id) || -1, () =>
                toast.success(
                  'Процесс успешно сохранён',
                  toasterOptions['success']
                )
              );
            }}
          >
            Сохранить
          </Button>
        </div>
      </div>
      <div className="w-full flex justify-end items-center mt-12">
        {currentProcess?.isPublished ? (
          <div className="w-fit p-2.5 flex flex-col items-start justify-start bg-[#fff] gap-1.5 rounded-[8px]">
            <div className="flex flex-row gap-1.5">
              <CheckCircleIcon size={'18px'} />
              <Label>Опубликовано!</Label>
            </div>
            <BadgeCopy content={currentProcess.link ?? ''} />
          </div>
        ) : (
          <Button onClick={handlePublish}>Опубликовать</Button>
        )}
      </div>
      {chosenPage && (
        <Sheet open={!!chosenPage} onOpenChange={() => setchosenPage(null)}>
          <AddPageSheet page={chosenPage} />
        </Sheet>
      )}
    </>
  );
};

export default Process;
