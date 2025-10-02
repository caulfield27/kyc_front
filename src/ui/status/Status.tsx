import { cn } from '@/utils/clsx';

const Status = ({ ...props }: React.ComponentProps<'div'>) => {
  const className = props?.className;
  return (
    <div
      className={cn(
        'font-semibold w-fit rounded-[100px] py-1 px-2.5',
        className && className
      )}
    >
      {props.children}
    </div>
  );
};

export default Status;
