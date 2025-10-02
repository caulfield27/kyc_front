import type { UseMutateFunction } from '@tanstack/react-query';
import { useState } from 'react';

import {
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
} from '@/ui';

interface Props {
  addDomain: UseMutateFunction<
    any,
    Error,
    {
      domain: string;
    },
    unknown
  >;
  isPending: boolean;
}

export const AddDomen = ({ addDomain, isPending }: Props) => {
  const [domain, setDomain] = useState('');
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={isPending}
          className="border-primary"
          variant={'outline'}
        >
          Добавить домен
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Добавить домен</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name" className="text-neutral-500 font-normal">
              Название домена
            </Label>
            <Input
              autoFocus
              id="name"
              name="name"
              value={domain}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDomain(e.target.value)
              }
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button disabled={!domain} onClick={() => addDomain({ domain })}>
              Создать
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
