import error from '@/assets/images/error.svg';
import { Button } from '@/ui';

import { useFlowStore } from '../../FlowStore';

export const Error = () => {
  const { errorState, setErrorState } = useFlowStore();

  return (
    <div className="absolute min-w-[350px] left-[50%] top-[50%]  transform-[translate(-50%,-50%)] p-6 bg-[#ffffff] rounded-2xl flex flex-col items-center justify-center gap-3">
      <img src={error} alt="error" />
      <div className="w-full text-center flex flex-col gap-2">
        <span className="font-semibold text-[18px]">Ошибка</span>
        <div className="text-neutral-700 p-2 rounded-[8px] bg-neutral-100">
          {errorState.errorMsg}
        </div>
      </div>
      <Button
        onClick={() =>
          setErrorState({
            isError: false,
            errorMsg: '',
          })
        }
      >
        Повторить
      </Button>
    </div>
  );
};
