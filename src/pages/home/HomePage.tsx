import { Pencil } from 'lucide-react';
import { useNavigate } from 'react-router';

import { useProcesses } from '@/services/processes';
import { useGlobalStore } from '@/store';
import {
  BadgeCopy,
  Button,
  DataLoader,
  Status,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Title,
} from '@/ui';
import { cn } from '@/utils/clsx';

import { AddProcessDialog } from './_components';

const HomePage = () => {
  // zustand store states
  const organization = useGlobalStore((state) => state.organization);

  // locale states
  const isMobile = window.innerWidth <= 500;
  const navigate = useNavigate();

  // api
  const { query: data, mutation } = useProcesses();
  const { isPending, data: processes } = data;

  // event handlers

  function handleCreateProcess(name: string) {
    const defaultPage = {
      title: 'Шаг 1',
      order: 0,
      elements: [],
    };
    mutation.mutate({
      name: name,
      pages: [defaultPage],
    });
  }

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <Title text="Кабинет" />
          <div className="text-[20px] flex flex-row gap-1.5">
            <span className="text-[#8B8B8B] max-[500px]:text-[16px]">
              Организация:
            </span>
            <span className="font-bold max-[500px]:text-[16px] max-[500px]:font-semibold">
              {organization.name}
            </span>
          </div>
        </div>
        {!isMobile && (
          <AddProcessDialog
            isMobile={isMobile}
            handleCreateProcess={handleCreateProcess}
          />
        )}
      </div>
      <div className="overflow-hidden rounded-md border">
        {isPending ? (
          <DataLoader size="m" />
        ) : !isMobile ? (
          <Table>
            <TableHeader>
              <TableRow className="bg-transparent">
                <TableHead>Наименование</TableHead>
                <TableHead>Ссылка</TableHead>
                <TableHead>Дата создания</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Действие</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {processes?.length ? (
                processes.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>
                      {row.slug ? (
                        <BadgeCopy
                          content={window.origin + '/flow/' + row.slug}
                        />
                      ) : (
                        ''
                      )}
                    </TableCell>
                    <TableCell>{row.created_at}</TableCell>
                    <TableCell>
                      <Status
                        className={cn(
                          'text-[#16A34A]  bg-[#DCFCE7]',
                          !row.published && 'bg-[#fed7aa] text-[#eb2f00]'
                        )}
                      >
                        {row.published ? 'Опубликовано' : 'В обработке'}
                      </Status>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => navigate(`process/${row.id}`)}
                        size={'icon'}
                        variant={'outline'}
                      >
                        <Pencil />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    Нет данных
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        ) : processes?.length ? (
          processes.map(() => <h1>1</h1>)
        ) : (
          <div className="bg-[#F5F5F5] rounded-2xl p-[4px]">
            <div className="bg-primary rounded-2xl"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
