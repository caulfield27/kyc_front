import { useParams } from 'react-router';

import { useFileUpload } from '@/services/applications';
import type {
  IFile,
  IFileResponse,
} from '@/services/applications/applicationTypes';
import type { IElement } from '@/services/processes/processesTypes';
import { Card, Input, Label } from '@/ui';
import { cn } from '@/utils/clsx';

import { useFlowStore } from '../../FlowStore';
import { FileInfo } from '../fileInfo/FileInfo';

export const DynamicField = ({ data }: { data: IElement }) => {
  // zusrtand store states
  const {
    inputData,
    setInputData,
    resetValidation,
    setCurrentSubmissionId,
    current_submission_id,
  } = useFlowStore();

  // locale states
  const { slug } = useParams();
  const { field_key, title, required } = data;
  const type =
    field_key === 'extra_doc'
      ? 'file'
      : field_key === 'income'
        ? 'number'
        : 'text';
  const inputValue = type === 'file' ? '' : (inputData[field_key] ?? '');
  // api
  const { mutate } = useFileUpload(setInputData, setCurrentSubmissionId);

  //  event handlers

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (name === 'extra_doc') {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          const payload: IFile = {
            field_key: name,
            filename: file.name,
            content:
              typeof reader.result === 'string'
                ? reader.result.split(',')[1]
                : '',
            is_integration_result: false,
            slug: slug ?? '',
          };
          if (current_submission_id)
            payload['submission_id'] = current_submission_id;
          mutate(payload);
        };
      }
    } else {
      setInputData(name, value);
    }
  }

  return (
    <div className="grid w-full items-center gap-3">
      <Label
        htmlFor={field_key}
        className={cn(required && 'after:content-["*"] after:text-[#ff0000]')}
      >
        {title}
      </Label>
      {type === 'file' && inputData[field_key] ? (
        <Card className="py-2.5 px-3.5">
          <div className="flex flex-row justify-between items-center">
            <FileInfo data={inputData[field_key] as IFileResponse} />
          </div>
        </Card>
      ) : (
        <Input
          value={inputValue as string}
          name={field_key}
          onFocus={() => resetValidation(field_key)}
          className="w-full bg-[#fff]"
          type={type}
          id={field_key}
          placeholder={title}
          onChange={handleChange}
        />
      )}
    </div>
  );
};
