import { useGlobalStore } from '@/store';
import { Avatar, AvatarFallback, AvatarImage } from '@/ui';

export const MobileHeader = () => {
  const organization = useGlobalStore((state) => state.organization);
  const user = useGlobalStore((state) => state.user);
  return (
    <header className="w-full p-4 flex flex-row justify-between">
      <span className="font-[800] text-[24px] text-primary ">KYC</span>
      <Avatar>
        {organization.logo ? (
          <AvatarImage src={organization.logo} />
        ) : (
          <AvatarFallback>
            {user?.email?.slice(0, 1).toUpperCase() ?? ''}
          </AvatarFallback>
        )}
      </Avatar>
    </header>
  );
};
