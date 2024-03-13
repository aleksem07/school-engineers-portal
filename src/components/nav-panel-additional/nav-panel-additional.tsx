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
import { RootState } from '@/redux/store';

interface ILinks {
  path: string;
  name: string;
}

enum PathType {
  LINUX = 'LINUX',
  SETTINGS = 'SETTINGS',
}

const NavPanelAdditional = ({
  links,
  section,
  pathSlice,
}: {
  links: ILinks[];
  section: string;
  pathSlice: PathType.LINUX | PathType.SETTINGS;
}) => {
  const dispatch = useAppDispatch();
  const [currentPath, setCurrentPath] = useState<string>('');

  const setPathHandler = useCallback(
    (path: string) => {
      dispatch(setPath(path));
      if (path.includes(section)) {
        pathSlice === PathType.SETTINGS
          ? dispatch(setPathSettings(path))
          : setPathLinux(path);
      }
      setCurrentPath(path);
    },
    [dispatch, section, pathSlice]
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
              className={`flex bg-color-light my-2 min-w-[max-content] transition-all ease-in-out duration-300 hover:bg-color-white ${
                currentPath === path
                  ? 'bg-color-white shadow-sm shadow-color-contrast rounded-l-xl '
                  : 'mr-10'
              }`}
            >
              <Link
                href={path}
                className="p-2 flex-1"
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
