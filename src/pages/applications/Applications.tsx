import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { toasterOptions } from '@/constants';
import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Sheet,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Title,
} from '@/ui';
import { cn } from '@/utils/clsx';

import { ApplySheet } from './_components';
import {
  applications,
  statusColors,
  statusLabel,
} from './ApplicationsContants';
import type { IApplication, StatusType } from './ApplicationsTypes';

const Applications = () => {
  // locale states
  const [statusFilter, setStatusFilter] = useState<StatusType>('all');
  const [data, setData] = useState<IApplication[]>(applications);
  const [filteredData, setFilteredData] = useState(data);
  const [currentApply, setCurrentApply] = useState<IApplication | null>(null);

  //effect handlers
  useEffect(() => {
    if (statusFilter === 'all') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((apply) => apply.status === statusFilter));
    }
  }, [statusFilter]);

  return (
    <>
      <div className="flex  flex-col gap-12">
        <Title text="Отправленные заявки" />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start justify-start gap-2.5 text-neutral-500">
            <Label>Статус</Label>
            <Select
              onValueChange={(value: string) =>
                setStatusFilter(value as StatusType)
              }
              value={statusFilter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Выберите статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">Все</SelectItem>
                  <SelectItem value="processing">В процессе</SelectItem>
                  <SelectItem value="in_review">В обработке</SelectItem>
                  <SelectItem value="approved">Подтверждено</SelectItem>
                  <SelectItem value="rejected">Отклонено</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="overflow-hidden rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#f5f5f5]">
                  <TableHead>ID</TableHead>
                  <TableHead>Процесс</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Создана</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.length ? (
                  filteredData.map((apply) => (
                    <TableRow
                      role="button"
                      onClick={() => setCurrentApply(apply)}
                      key={apply.id}
                      className="cursor-pointer"
                    >
                      <TableCell>{apply.id}</TableCell>
                      <TableCell>{apply.name}</TableCell>
                      <TableCell>
                        <div
                          className={cn(
                            'font-semibold w-fit rounded-[100px] py-1 px-2.5',
                            statusColors[apply.status].bg,
                            statusColors[apply.status].color
                          )}
                        >
                          {statusLabel[apply.status] ?? apply.status}
                        </div>
                      </TableCell>
                      <TableCell>
                        {apply.createdAt.toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="h-24 text-center">
                      Нет заявок
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {currentApply && (
        <Sheet open={!!currentApply} onOpenChange={() => setCurrentApply(null)}>
          <ApplySheet
            onChange={(status, id) => {
              const updatedData = data.map((item) =>
                item.id === id ? { ...item, status } : item
              );
              setData(updatedData);
              setFilteredData(
                statusFilter === 'all'
                  ? updatedData
                  : updatedData.filter((data) => data.status === statusFilter)
              );
              toast.success(
                'Статус заявки успешно изменен.',
                toasterOptions['success']
              );
            }}
            apply={currentApply}
          />
        </Sheet>
      )}
    </>
  );
};

export default Applications;
