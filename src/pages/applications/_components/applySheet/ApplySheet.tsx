import { Download } from 'lucide-react';
import { type ReactNode, useMemo, useState } from 'react';

import { useApplicationById } from '@/services/applications';
import {
  Button,
  Card,
  DataLoader,
  FileLoader,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  Text,
} from '@/ui';

export const ApplySheet = ({ id }: { id: number }) => {
  // locale states
  // const [status, setStatus] = useState<StatusType>(apply.status);
  // const { data, files } = useMemo(
  //   () => generateStatusData(apply.data),
  //   [apply]
  // );

  // event handlers
  // const handleDownload = (blob: string, key: string) => {
  //   const link = document.createElement('a');
  //   link.href = `data:image/png;base64,${blob}`;
  //   link.download = key || 'image.png';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  // locale states
  const [currentFileId, setCurrentFileId] = useState<number | null>(null);

  // api
  const { query, downloadMutation } = useApplicationById(id);
  const { data: apply, isPending } = query;
  const fields = apply ? apply.fields : [];
  const files = apply ? apply.files : [];

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>{'Данные клиента'}</SheetTitle>
      </SheetHeader>
      <div className="px-3.5 flex flex-col gap-3 w-full h-[90vh] overflow-y-auto">
        {isPending ? (
          <DataLoader size="m" />
        ) : (
          <>
            {fields.map((field) => (
              <div
                key={field.id}
                className="flex flex-row items-start justify-between"
              >
                <span className="text-[14px text-[#242424]">
                  {field.field_key}
                </span>
                {/* <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
                  <code className="text-white">
                    {field.field_value}
                  </code>
                </pre> */}
                <span className="text-[14px] font-semibold max-w-[200px]">
                  {field.field_value}
                </span>
              </div>
            ))}
            {files.map((file) => (
              <div
                key={file.id}
                className="flex flex-row items-start justify-between"
              >
                <span className="text-[14px text-[#242424]">
                  {file.filename}
                </span>
                {currentFileId === file.id && downloadMutation.isPending ? (
                  <FileLoader />
                ) : (
                  <button
                    onClick={() => {
                      setCurrentFileId(file.id);
                      downloadMutation.mutate({
                        filename: file.filename,
                        id: file.id,
                      });
                    }}
                    className="border-0 outline-0 bg-none cursor-pointer"
                  >
                    <Download size={'20px'} />
                  </button>
                )}
              </div>
            ))}
          </>
        )}
      </div>
      <SheetFooter className="flex-row">
        <SheetClose asChild>
          {/* <Button
            type="submit"
            onClick={() => onChange(status, apply.id)}
          >
            Применить
          </Button> */}
        </SheetClose>
        <SheetClose asChild>
          <Button variant="outline">Назад</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};
