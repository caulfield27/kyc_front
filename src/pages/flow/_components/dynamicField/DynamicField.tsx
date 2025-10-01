import { useParams } from 'react-router';

import type { IFile } from '@/services/applications/applicationTypes';
import { useFileUpload } from '@/services/applications/useApplications';
import type { IElement } from '@/services/processes/processesTypes';
import { Input, Label } from '@/ui';
import { cn } from '@/utils/clsx';

import { useFlowStore } from '../../FlowStore';

export const DynamicField = ({ data }: { data: IElement }) => {
  // zusrtand store states
  const { inputData, setInputData, resetValidation } = useFlowStore();

  // locale states
  const { slug } = useParams();
  const { element_type, title, required } = data;
  const { name } = element_type;
  const type =
    name === 'file_upload'
      ? 'file'
      : name === 'info_number'
        ? 'number'
        : 'text';
  const inputValue =
    type === 'file'
      ? ((inputData[name] as IFile)?.filename ?? '')
      : inputData[name];
  // api
  const { mutate } = useFileUpload(slug ?? '', setInputData);

  //  event handlers

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (name === 'file_upload') {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          mutate({
            field_key: name,
            filename: file.name,
            content:
              typeof reader.result === 'string'
                ? reader.result.split(',')[1]
                : '',
            is_integration_result: false,
          });
        };
      }
    } else {
      setInputData(name, value);
    }
  }

  return (
    <div className="grid w-full items-center gap-3">
      <Label
        htmlFor={name}
        className={cn(required && 'after:content-["*"] after:text-[#ff0000]')}
      >
        {title}
      </Label>
      <Input
        value={(inputValue as string) ?? ''}
        name={name}
        onFocus={() => resetValidation(name)}
        className="w-full bg-[#fff]"
        type={type}
        id={name}
        placeholder={title}
        onChange={handleChange}
      />
    </div>
  );
};
