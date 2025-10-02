import { type ReactNode, useRef, useState } from 'react';

import { useOrganization } from '@/services/organization';
import {
  Button,
  Input,
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/ui';

const Container = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[14px] text-[#212121]">{label}</span>
      {children}
    </div>
  );
};

export const UpdateSheet = () => {
  // api

  // locale states
  // const [inputValues, setInputValues] = useState({
  //   name: organization?.name ?? "",
  //   logo_path: organization?.logo_path ?? "",
  //   primaryColor: organization?.primary_color ?? '#f76835',
  //   secondaryColor: organization?.accent_color ?? '#ffffff',
  // });
  const primaryInputRef = useRef<HTMLInputElement | null>(null);
  const secondaryInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="border-primary" variant="outline">
          Изменить
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Изменить</SheetTitle>
        </SheetHeader>
        <div className="px-[20px] flex flex-col gap-3 h-[90vh] overflow-y-auto">
          <Container label="Название">
            <Input type="text" defaultValue={'humo'} />
          </Container>
          <Container label="Логотип">
            <Input type="file" />
          </Container>
          <Container label="Основной цвет">
            <div className="cursor-pointer w-full rounded-[4px] p-1.5 border border-[#EBEBEB] flex flex-row gap-2 justify-start items-center ">
              <div className="w-[30px] h-[30px] bg-primary rounded-[50%]"></div>
              <span className="font-semibold text-[#171717] text-[14px]">
                F76835
              </span>
            </div>
            <span className="text-[12px] text-neutral-500">
              Основной цвет: применяется к кнопкам и акцентам в админке и форме
              заявки организации
            </span>
            <input type="color" ref={primaryInputRef} hidden></input>
          </Container>
          <Container label="Дополнительный цвет">
            <div className="cursor-pointer w-full rounded-[4px] p-1.5 border border-[#EBEBEB] flex flex-row gap-2 justify-start items-center ">
              <div className="w-[30px] h-[30px] bg-primary rounded-[50%]"></div>
              <span className="font-semibold text-[#171717] text-[14px]">
                F76835
              </span>
            </div>
            <span className="text-[12px] text-neutral-500">
              Дополнительный: применяется для дополнительного цвета акцентных
              элементов и кнопок в админке, а также форме заявки организации
            </span>
            <input type="color" ref={secondaryInputRef} hidden></input>
          </Container>
        </div>
        <SheetFooter className="flex-row">
          <SheetClose asChild>
            <Button>Сохранить</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="outline">Отменить</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
