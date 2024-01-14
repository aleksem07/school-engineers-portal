'use client';
import { Logo } from '@/components/logo/logo';
import { Footer } from '@/components/footer/footer';
import { NAV_LINKS } from '@/common/nav-links';
import Link from 'next/link';
import { setPath } from '@/redux/pathSlice/pathSlice';
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export const Dashboard = () => {
  const dispatch = useAppDispatch();
  const currentPath = useAppSelector((state: RootState) => state.path.value);

  return (
    <nav className="grid grid-rows-dashboard w-3/12 tablet:min-w-40 shadow-2xl height-screen mobile:max-w-16">
      <Logo className={'border-b-2 border-color-grey p-4'} />
      <div className="flex flex-col px-2 py-4 mobile:px-1 ">
        {NAV_LINKS.map(({ name, path, Icon }) => (
          <Link
            href={path}
            onClick={() => dispatch(setPath(path))}
            className={`flex justify-start gap-2 p-2 my-1 transition-all duration-300 rounded-lg mobile:justify-center mobile:px-1 ${
              currentPath === path
                ? 'bg-color-dark--light hover:bg-color-dark--light cursor-default'
                : 'hover:bg-color-grey'
            }`}
            key={name}
          >
            <p>{<Icon />}</p>
            <p className="leading-[1.75] mobile:hidden">{name}</p>
          </Link>
        ))}
      </div>

      <Footer className="border-t-2 border-color-grey" />
    </nav>
  );
};
