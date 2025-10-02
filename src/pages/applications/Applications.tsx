import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { toasterOptions } from '@/constants';
import { useApplications } from '@/services/applications';
import type { ApplyStatus } from '@/services/applications/applicationTypes';
import {
  Button,
  DataLoader,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Sheet,
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
import { formatDateString } from '@/utils/formatDate';

import { ApplySheet } from './_components';
import { statusColors, statusLabel } from './ApplicationsContants';

const Applications = () => {
  // locale states
  // const [statusFilter, setStatusFilter] = useState<ApplyStatus>('');
  const [currentApplyId, setCurrentApplyId] = useState<number | null>(null);

  // api
  const { query } = useApplications('');
  const { data: applications, isPending } = query;

  //effect handlers
  // useEffect(() => {
  //   if (statusFilter === 'all') {
  //     setFilteredData(data);
  //   } else {
  //     setFilteredData(data.filter((apply) => apply.status === statusFilter));
  //   }
  // }, [statusFilter]);

  return (
    <>
      <div className="flex  flex-col gap-12">
        <Title text="Заявки" />
        <div className="flex flex-col gap-6">
          {isPending ? (
            <DataLoader size="m" />
          ) : (
            <div className="overflow-hidden rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#f5f5f5]">
                    <TableHead>Название</TableHead>
                    <TableHead>Дата прохождения</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead className="text-end">Действие</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications?.length ? (
                    applications.map((apply) => (
                      <TableRow key={apply.id}>
                        <TableCell>{apply.process.name}</TableCell>
                        <TableCell>
                          {formatDateString(apply.created_at)}
                        </TableCell>
                        <TableCell>
                          <Status
                            className={cn(
                              statusColors[apply.status].bg,
                              statusColors[apply.status].color
                            )}
                          >
                            {statusLabel[apply.status] ?? apply.status}
                          </Status>
                        </TableCell>
                        <TableCell className="text-end">
                          <Button
                            variant={'outline'}
                            onClick={() => setCurrentApplyId(apply.id)}
                          >
                            Перейти
                          </Button>
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
          )}
          {/* <div className="flex flex-col items-start justify-start gap-2.5 text-neutral-500">
            <Label>Статус</Label>
            <Select
              onValueChange={(value: string) =>
                setStatusFilter(value as ApplyStatus)
              }
              value={statusFilter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Выберите статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="">Все</SelectItem>
                  <SelectItem value="new">Новый</SelectItem>
                  <SelectItem value="processing">В процессе</SelectItem>
                  <SelectItem value="in_review">В обработке</SelectItem>
                  <SelectItem value="approved">Подтверждено</SelectItem>
                  <SelectItem value="rejected">Отклонено</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div> */}
        </div>
      </div>

      {currentApplyId && (
        <Sheet
          open={!!currentApplyId}
          onOpenChange={() => setCurrentApplyId(null)}
        >
          <ApplySheet id={currentApplyId} />
        </Sheet>
      )}
    </>
  );
};

export default Applications;
