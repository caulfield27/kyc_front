import { CheckCircleIcon, Plus, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

import type { IPage } from '@/services/processes/processesTypes';
import { useProcessById } from '@/services/processes/useProcesses';
import {
  BadgeCopy,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Button,
  DataLoader,
  Label,
  Sheet,
  Title,
  Title2,
} from '@/ui';
import { cn } from '@/utils/clsx';

import { AddPageSheet, ChangeNameDialog, ElementCard } from './_components';
import { useProcessStore } from './ProcessStore';

const Process = () => {
  // zustand store states
  const {
    currentPage,
    setCurrentPage,
    setPages,
    removePage,
    setCurrentProcess,
    currentProcess,
  } = useProcessStore();

  // locale states
  const { id } = useParams();
  const [chosenPage, setchosenPage] = useState<IPage | null>(null);

  // api
  const { query, addMutation, publishMutation } = useProcessById(Number(id));
  const { isPending, data } = query;

  // effect handlers
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background', '#f5f5f5');

    return () => {
      root.style.setProperty('--background', '#ffffff');
    };
  }, []);

  useEffect(() => {
    if (data) {
      setCurrentProcess(data);
      setCurrentPage(data.pages[0] ?? null);
    }
  }, [data]);

  // event handlers
  function handleAddPage() {
    const page: IPage = {
      title: 'Новая страница',
      elements: [],
      order: currentProcess?.pages.length!,
      id: Date.now(),
    };
    setPages(page);
    setCurrentPage(page);
  }

  return (
    <>
      <div className="flex flex-col gap-2.5 mb-[60px]">
        <div className="flex flex-row items-center gap-1">
          <Title text={`Редактирование процесса:`} />
          <Title2
            text={currentProcess?.name ?? ''}
            className="m-0 text-neutral-500 mt-1.5"
          />
        </div>
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
                  Редактирование процесса
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {isPending ? (
        <DataLoader size="l" />
      ) : (
        <>
          <div className="bg-[#ffffff] p-5 rounded-[16px] flex flex-col gap-6">
            <div className="bg-background p-1 rounded-[8px]">
              <div className="bg-[#ffffff] py-2.5 px-3 rounded-[8px] w-full flex flex-row  justify-center items-center mb-[4px]">
                <div className="w-[33.3%]">
                  <Label>Страницы</Label>
                </div>
                <div className="w-[33.3%]">
                  <Label>Редактировать название</Label>
                </div>
                <div className="w-[33.3%] flex justify-end">
                  <Label>Действия</Label>
                </div>
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
                        'flex flex-row justify-center items-center cursor-pointer w-full p-2.5 bg-[#fff] rounded-[4px]',
                        currentPage?.id === page.id &&
                          'border-[1px] border-[#2563EB]'
                      )}
                    >
                      <div className="w-[33.3%]">
                        <span>{page.title}</span>
                      </div>
                      <div className="w-[33.3%]">
                        <ChangeNameDialog page={page} />
                      </div>
                      <div className="flex flex-row items-center justify-end gap-3 w-[33.3%]">
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
                        <Button
                          onClick={(ev: React.MouseEvent) => {
                            ev.stopPropagation();
                            removePage(page.id!);
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
            {currentPage && (
              <div className="flex flex-col gap-3">
                <span className="text-[20px]  font-semibold">{`Элементы  страницы: ${currentPage?.title}`}</span>
                <div className="flex flex-col gap-6 bg-background rounded-[8px]">
                  <div className="p-2 flex flex-col gap-2">
                    {currentPage?.elements.length ? (
                      currentPage?.elements.map((element) => {
                        return (
                          <ElementCard
                            showDragIcon={false}
                            isDraggable={false}
                            key={element.order}
                            element={element}
                            position={element.order + 1}
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
            )}
            <div className="w-full flex justify-end items-center">
              <Button
                onClick={() => {
                  if (currentProcess?.name && currentProcess.pages) {
                    addMutation.mutate({
                      name: currentProcess.name,
                      pages: currentProcess.pages.map((page) => ({
                        title: page.title,
                        order: page.order,
                        elements: page.elements,
                      })),
                    });
                  }
                }}
              >
                Сохранить
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-end items-center mt-12">
            {currentProcess?.published ? (
              <div className="w-fit p-2.5 flex flex-col items-start justify-start bg-[#fff] gap-1.5 rounded-[8px]">
                <div className="flex flex-row gap-1.5">
                  <CheckCircleIcon size={'18px'} />
                  <Label>Опубликовано!</Label>
                </div>
                <BadgeCopy
                  content={`${window.origin}/flow/${currentProcess.slug}`}
                />
              </div>
            ) : (
              <Button onClick={() => publishMutation.mutate()}>
                Опубликовать
              </Button>
            )}
          </div>
        </>
      )}

      {chosenPage && (
        <Sheet open={!!chosenPage} onOpenChange={() => setchosenPage(null)}>
          <AddPageSheet page={chosenPage} />
        </Sheet>
      )}
    </>
  );
};

export default Process;
