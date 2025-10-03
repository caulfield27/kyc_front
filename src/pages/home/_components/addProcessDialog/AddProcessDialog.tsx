import { Plus } from 'lucide-react';
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
import { cn } from '@/utils/clsx';

interface Props {
  isMobile: boolean;
  handleCreateProcess: (name: string) => void;
}

export const AddProcessDialog = ({ isMobile, handleCreateProcess }: Props) => {
  const [processName, setProcessName] = useState<string>('Идентификация');
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            'flex flex-row  gap-2 items-center justify-center',
            isMobile && 'w-full'
          )}
        >
          Создать
          {!isMobile && <Plus color="#fff" />}
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
            <Button onClick={() => handleCreateProcess(processName)}>
              Создать
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
