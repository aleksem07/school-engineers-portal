'use client';
import { Logo } from '@/components/logo/logo';
import { Footer } from '@/components/footer/footer';
import { NAV_LINKS } from '@/common/nav-links';
import Link from 'next/link';
import { setPath } from '@/redux/pathSlice/pathSlice';
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';
import styles from '@/UI/sass/nav-panel.module.scss';
// import { useLocation } from 'react-router-dom';

export const NavPanel = () => {
  const dispatch = useAppDispatch();
  const currentPath = useAppSelector((state: RootState) => state.path.value);

  useEffect(() => {
    const storedPath = window.location.pathname;
    dispatch(setPath(storedPath));
    console.log(window.location.pathname);
  }, [dispatch]);

  return (
    <nav className="grid sticky top-0 grid-rows-dashboard max-w-16 tablet:min-w-40 mobile:max-w-16 h-screen text-color-light bg-color-contrast">
      <Logo className={'border-b-2 border-color-grey p-4'} />
      <ul
        className={`flex gap-2 flex-col pl-4 py-4 mobile:pl-1 ${styles.navPanel}`}
      >
        {NAV_LINKS.map(({ name, path, Icon }, index) => (
          <li key={`${name} ${index}`}>
            <Link
              href={path}
              onClick={() => dispatch(setPath(path))}
              className={`flex justify-start gap-2 p-2 mobile:justify-center mobile:px-1  ${
                currentPath.split('/')[1] === path.split('/')[1]
                  ? `bg-color-grey hover:bg-color-grey cursor-default text-color-black hover:text-color-black rounded-l-full ${styles.active}`
                  : 'text-color-light hover:text-color-grey'
              }`}
              aria-current={currentPath === path && 'page'}
            >
              <p>{<Icon />}</p>
              <p className="leading-[1.75] mobile:hidden">{name}</p>
            </Link>
          </li>
        ))}
      </ul>

      <Footer className="border-t-2 border-color-grey" />
    </nav>
  );
};
