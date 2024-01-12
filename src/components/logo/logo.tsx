import Link from "next/link";
import { LogoIcon } from "@/app/UI/icons/logo-icon";
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { RootState } from "@/redux/store";
import { AppRoutes } from '@/common/routes';
import { setPath } from "@/redux/pathSlice/pathSlice";

export const Logo = ({ className }: { className?: string }) => {
  const currentPath = useAppSelector((state: RootState) => state.path.value);
  const dispatch = useAppDispatch();

  return (
    <div className={`grid grid-cols-logo gap-2 ${className}`}>
      <Link href="/" className={`text-2xl font-bold`} onClick={() => dispatch(setPath(AppRoutes.HOME))}>
        {currentPath === AppRoutes.HOME ? (
          <LogoIcon className='cursor-default' />
        ) : (
          <LogoIcon />
        )}
      </Link>
      <p className="text-xs max-w-1">school engineers portal</p>
    </div>
  );
};
