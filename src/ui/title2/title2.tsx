import { cn } from '@/utils/clsx';

export const Title2 = ({
  text,
  ...props
}: { text: string } & React.ComponentProps<'h2'>) => {
  const className = props.className;
  return (
    <h2
      {...props}
      className={cn(
        'text-neutral-700 text-[18px] mb-4 scroll-m-20 text-2xl font-medium tracking-tight',
        !!className && className
      )}
    >
      {text}
    </h2>
  );
};
