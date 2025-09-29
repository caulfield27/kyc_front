import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/utils/clsx';
import type { IAction } from '@/pages/process/ProcessTypes';
import {
  Button,
  Calendar,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/ui';

import { useFlowStore } from '../../FlowStore';

export const DynamicField = ({ data }: { data: IAction }) => {
  // zusrtand store states
  const { data: inputData, setData, resetValidation } = useFlowStore();

  // locale states
  const { code, description, required } = data;
  const [calendarOpen, setCalendarOpen] = useState(false);
  const type =
    code === 'file_upload'
      ? 'file'
      : code === 'info_number'
        ? 'number'
        : 'text';

  //  event handlers

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (name === 'file_upload') {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          setData(name, reader.result);
        };
      }
    } else {
      setData(name, value);
    }
  }

  switch (code) {
    case 'info_date':
      return (
        <div className="w-full flex flex-col gap-3">
          <Label
            htmlFor="date"
            className={cn(
              'px-1',
              required && 'after:content-["*"] after:text-[#ff0000]'
            )}
          >
            Дата
          </Label>
          <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date"
                className="w-48 justify-between font-normal"
              >
                {inputData[code]
                  ? (inputData[code] as Date).toLocaleDateString()
                  : 'Выберите дату'}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={inputData[code] as Date | undefined}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setData(code, date);
                  setCalendarOpen(false);
                  resetValidation(code);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      );
    default:
      return (
        <div className="grid w-full items-center gap-3">
          <Label
            htmlFor={code}
            className={cn(
              required && 'after:content-["*"] after:text-[#ff0000]'
            )}
          >
            {description}
          </Label>
          <Input
            value={(inputData[code] as string) ?? ''}
            name={code}
            onFocus={() => resetValidation(code)}
            className="w-full bg-[#fff]"
            type={type}
            id={code}
            placeholder={description}
            onChange={handleChange}
          />
        </div>
      );
  }
};
