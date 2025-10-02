import file from '@/assets/images/file.png';
import type { IFileResponse } from '@/services/applications/applicationTypes';

export const FileInfo = ({ data }: { data: IFileResponse }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <img src={file} alt="file" className="w-[30px]" />
      <div className="flex flex-col">
        <span className="text-[16px] font-semibold">{data.filename}</span>
        <span className="text-[14px] text-neutral-500">{`${data.size_bytes}kb`}</span>
      </div>
    </div>
  );
};
