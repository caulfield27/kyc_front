import { Pencil } from 'lucide-react';
import { useState } from 'react';

import { useProcessStore } from '@/store';
import type { IPage } from '@/store/process/processStoreTypes';
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

export const ChangeNameDialog = ({ page }: { page: IPage }) => {
  const { updatePageName, setCurrentPage } = useProcessStore();
  const [pageName, setPageName] = useState(page.name ?? '');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={(ev: React.MouseEvent) => {
            ev.stopPropagation();
            setCurrentPage(page);
          }}
          variant={'outline'}
          size={'icon'}
        >
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Редактировать название страниц</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name" className="text-neutral-500 font-normal">
              Название страницы
            </Label>
            <Input
              autoFocus
              id="name"
              name="name"
              value={pageName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPageName(e.target.value)
              }
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              disabled={pageName === (page?.name ?? '')}
              onClick={() => updatePageName(pageName)}
            >
              Сохранить
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
