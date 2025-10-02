import { useState } from 'react';
import { toast } from 'sonner';

import { toasterOptions } from '@/constants';
import { useOrganization } from '@/services/organization';
import { useGlobalStore } from '@/store/global/globalStore';
import {
  Avatar,
  AvatarImage,
  Button,
  Card,
  DataLoader,
  Input,
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

import { AddDomen, UpdateSheet } from './_components';

const Organization = () => {
  // zustand store states
  const {
    organizationQuery,
    domainsQuery,
    updateOrgMutation,
    uploadLogoMutation,
    addDomainMutation,
    verifyDomainMutation,
    deleteDomainMutation,
  } = useOrganization();

  const { isPending: isOrgPending, data: organization } = organizationQuery;
  const { isPending: isDomainsPending, data: domains } = domainsQuery;
  const { mutate: addDomain, isPending: addDomainPending } = addDomainMutation;
  const { mutate: verifyDomain, isPending: verifyDomainPending } =
    verifyDomainMutation;

  // event handlers

  // function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   const { name, value } = event.target;

  //   if (name === 'logo') {
  //     const file = event.target?.files?.[0];
  //     if (file) {
  //       const logoUrl = URL.createObjectURL(file);
  //       setInputValues((prev) => ({ ...prev, logo: logoUrl }));
  //     }
  //   } else {
  //     setInputValues((prev) => ({ ...prev, [name]: value }));
  //   }
  // }

  return (
    <div className="flex flex-col gap-12">
      <Title text="Организация и бренд" />
      <div className="flex flex-col gap-[60px]">
        {isOrgPending ? (
          <DataLoader size="m" />
        ) : (
          <div className="flex flex-col gap-[24px]">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#f5f5f5]">
                  <TableHead>Название</TableHead>
                  <TableHead>Логотип</TableHead>
                  <TableHead>Основной цвет</TableHead>
                  <TableHead>Дополнительный цвет</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Humo</TableCell>
                  <TableCell>Файл не выбран</TableCell>
                  <TableCell>
                    <div
                      className={cn(
                        'w-[24px] h-[24px] rounded-[50%] bg-primary'
                      )}
                    ></div>
                  </TableCell>
                  <TableCell>
                    <div
                      className={cn(
                        'w-[24px] h-[24px] rounded-[50%] bg-foreground'
                      )}
                    ></div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="w-ful flex justify-end">
              <UpdateSheet />
            </div>
          </div>
        )}

        {isDomainsPending ? (
          <DataLoader size="m" />
        ) : (
          <div className="flex flex-col gap-[24px]">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#f5f5f5]">
                  <TableHead>Название</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead className="text-end">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {domains?.map((domain) => (
                  <TableRow key={domain.id}>
                    <TableCell>{domain.domain}</TableCell>
                    <TableCell>
                      <Status
                        className={cn(
                          'text-[#E03E3E] bg-[#FDF3F3]',
                          domain.verified && 'text-[#16A34A] bg-[#DCFCE7]'
                        )}
                      >
                        {domain.verified ? 'Проверен' : 'Не проверен'}
                      </Status>
                    </TableCell>
                    <TableCell className="text-end">
                      {!domain.verified && (
                        <Button
                          onClick={() => verifyDomain(domain.id)}
                          variant={'outline'}
                          disabled={verifyDomainPending}
                        >
                          Проверить домен
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="w-ful flex justify-end">
              <AddDomen addDomain={addDomain} isPending={addDomainPending} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Organization;
