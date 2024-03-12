'use client';
import { setPath } from '@/redux/pathSlice/pathSlice';
import { SETTINGS_ROUTES } from '@/common/routes';
import ScrollWatcher from '@/components/scroll-watcher/scroll-watcher';
import Link from 'next/link';
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const NavPanelSettingsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentPath = useAppSelector((state: RootState) => state.path.value);

  return (
    <section className="w-full pl-4 pt-24 flex-[0]">
      <ul>
        {SETTINGS_ROUTES.map(({ path, name }) => (
          <li
            key={path}
            className={`flex bg-color-light my-2 min-w-[max-content] transition-all ease-in-out duration-300 hover:bg-color-white ${
              path === currentPath
                ? 'bg-color-white shadow-sm shadow-color-contrast rounded-l-xl '
                : 'mr-10'
            }`}
          >
            <Link
              href={path}
              className="p-2 flex-1"
              onClick={() => dispatch(setPath(path))}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <ScrollWatcher />
    </section>
  );
};

export default NavPanelSettingsPage;
