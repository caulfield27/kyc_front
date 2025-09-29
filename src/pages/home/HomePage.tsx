import { Pencil, Plus } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { cn } from '@/lib/utils';
import { useGlobalStore, useProcessStore } from '@/store';
import type { IProcess } from '@/store/process/processStoreTypes';
import {
  BadgeCopy,
  Button,
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

const HomePage = () => {
  const navigate = useNavigate();
  const [processName, setProcessName] = useState<string>('Идентификация');
  const { processes, addProcess } = useProcessStore();
  const organization = useGlobalStore((state) => state.organization);

  function handleAddProcess() {
    const defaultPage = {
      name: 'Шаг 1',
      actions: [],
      id: Date.now(),
    };
    const newProcess: IProcess = {
      name: processName,
      createdAt: new Date(),
      link: null,
      isPublished: false,
      id: Date.now(),
      pages: [defaultPage],
    };
    addProcess(newProcess);
  }

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
                <Button onClick={handleAddProcess}>Создать</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="overflow-hidden rounded-md border">
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
            {processes.length ? (
              processes.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    {row.link ? <BadgeCopy content={row.link} /> : ''}
                  </TableCell>
                  <TableCell>
                    {row.createdAt.toLocaleDateString() +
                      '/' +
                      row.createdAt.toLocaleTimeString()}
                  </TableCell>
                  <TableCell>
                    <div
                      className={cn(
                        'font-semibold w-fit rounded-[100px] py-1 px-2.5 text-[#16A34A]  bg-[#DCFCE7]',
                        !row.isPublished && 'bg-[#fed7aa] text-[#eb2f00]'
                      )}
                    >
                      {row.isPublished ? 'Опубликовано' : 'В обработке'}
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
      </div>
    </div>
  );
};

export default HomePage;
