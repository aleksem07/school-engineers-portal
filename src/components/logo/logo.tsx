import Link from 'next/link';
import { LogoIcon } from '@/UI/icons/logo-icon';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { APP_ROUTES } from '@/common/routes';
import { setPath } from '@/redux/pathSlice/pathSlice';

export const Logo = ({ className }: { className?: string }) => {
  const currentPath = useAppSelector((state: RootState) => state.path.value);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`grid grid-cols-logo gap-2 mobile:px-1 mobile:flex mobile:gap-0 mobile:justify-center ${
        className || ''
      }`}
    >
      <Link
        href="/"
        className={`text-2xl font-bold`}
        onClick={() => dispatch(setPath(APP_ROUTES.HOME))}
      >
        {currentPath === APP_ROUTES.HOME ? (
          <LogoIcon className="cursor-default" />
        ) : (
          <LogoIcon className="hover:bg-color-dark" />
        )}
      </Link>
      <p className="text-xs max-w-1 mobile:hidden">school engineers portal</p>
    </div>
  );
};
