import { Pencil, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { cn } from '@/utils/clsx';
import { useGlobalStore } from '@/store';
import {
  BadgeCopy,
  Button,
  DataLoader,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Title,
} from '@/ui';
import { useProcesses } from '@/services/processes';
import { sendRequest } from '@/api/apiConfig';

const HomePage = () => {
  // zustand store states
  const organization = useGlobalStore((state) => state.organization);

  // locale states
  const navigate = useNavigate();
  const [processName, setProcessName] = useState<string>('Идентификация');

  // api
  const { query: data, mutation } = useProcesses();
  const { isPending, data: processes } = data;

  useEffect(() => {
    sendRequest('processes/element-types/')
  },[])

  return (
    <div className="flex flex-col gap-[60px]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <Title text="Кабинет" />
          <div className="text-[20px] flex flex-row gap-1.5">
            <span className="text-neutral-500">Организация:</span>
            <span className="font-bold">{organization.name}</span>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex flex-row  gap-2 items-center justify-center">
              Создать
              <Plus color="#fff" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Создать процесс</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name" className="text-neutral-500 font-normal">
                  Название процесса
                </Label>
                <Input
                  autoFocus
                  id="name"
                  name="name"
                  value={processName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setProcessName(e.target.value)
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  onClick={() =>
                    mutation.mutate({
                      name: processName,
                      pages: [],
                    })
                  }
                >
                  Создать
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="overflow-hidden rounded-md border">
        {isPending ? (
          <DataLoader size="m" />
        ) : (
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
                      <div
                        className={cn(
                          'font-semibold w-fit rounded-[100px] py-1 px-2.5 text-[#16A34A]  bg-[#DCFCE7]',
                          !row.published && 'bg-[#fed7aa] text-[#eb2f00]'
                        )}
                      >
                        {row.published ? 'Опубликовано' : 'В обработке'}
                      </div>
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
        )}
      </div>
    </div>
  );
};

export default HomePage;
