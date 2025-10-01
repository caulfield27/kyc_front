import success from '@/assets/images/success.svg';
import { Button } from '@/ui';

import { useFlowStore } from '../../FlowStore';

export const Success = () => {
  const { redirect_url } = useFlowStore((state) => state.submissionState);

  return (
    <div className="absolute left-[50%] top-[50%]  transform-[translate(-50%,-50%)] p-6 bg-[#ffffff] rounded-2xl flex flex-col items-center justify-center gap-3">
      <img src={success} alt="success" />
      <div className="text-center flex flex-col">
        <span className="font-semibold text-[18px]">Все готово</span>
        <p className="text-neutral-600">
          Ваша заявка отправлена на рассмотрение
        </p>
      </div>
      <Button onClick={() => (window.location.href = redirect_url)}>
        Хорошо
      </Button>
    </div>
  );
};
