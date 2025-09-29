import { cn } from '@/utils/clsx';

export const Title = ({
  text,
  ...props
}: { text: string } & React.ComponentProps<'h1'>) => {
  const className = props.className;
  return (
    <h1
      {...props}
      className={cn(
        'text-[#000] text-[32px] font-bold',
        className && className
      )}
    >
      {text}
    </h1>
  );
};
