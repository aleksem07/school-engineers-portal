'use client';
import {
  setPath,
  setPathSettings,
  setPathLinux,
} from '@/redux/pathSlice/pathSlice';
import ScrollWatcher from '@/components/scroll-watcher/scroll-watcher';
import Link from 'next/link';
import { useAppDispatch } from '@/redux/hooks';
import { useCallback, useEffect, useState } from 'react';
import { APP_ROUTES } from '@/common/routes';

interface ILinks {
  path: string;
  name: string;
}

const NavPanelAdditional = ({
  links,
  section,
}: {
  links: ILinks[];
  section: string;
}) => {
  const dispatch = useAppDispatch();
  const [currentPath, setCurrentPath] = useState<string>('');

  const setPathHandler = useCallback(
    (path: string) => {
      dispatch(setPath(path));
      if (path.includes(section)) {
        section === APP_ROUTES.SETTINGS
          ? dispatch(setPathSettings(path))
          : dispatch(setPathLinux(path));
      }
      setCurrentPath(path);
    },
    [dispatch, section]
  );

  useEffect(() => {
    const storedPath = window.location.pathname;
    setPathHandler(storedPath);
  }, [setPathHandler]);

  return (
    <section className="w-full pl-4 pt-24 flex-[0]">
      <ul>
        {links.map(({ path, name }) => {
          return (
            <li
              key={path}
              className={`flex bg-color-light my-2 min-w-[max-content] rounded-l-xl transition-all ease-in-out duration-300 hover:bg-color-white ${
                currentPath === path
                  ? 'bg-color-white shadow-sm shadow-color-contrast text-color-black'
                  : 'mr-10'
              }`}
            >
              <Link
                href={path}
                className={`py-2 px-3 flex-1 ${
                  currentPath === path && 'font-semibold'
                }`}
                onClick={() => {
                  setPathHandler(path);
                }}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>

      <ScrollWatcher />
    </section>
  );
};

export default NavPanelAdditional;
