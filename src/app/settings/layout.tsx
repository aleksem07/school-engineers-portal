import { SETTINGS_ROUTES } from '@/common/routes';
import ScrollWatcher from '@/components/scroll-watcher/scroll-watcher';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEP - Settings',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="w-full p-4 flex-[0]">
        <ul>
          {SETTINGS_ROUTES.map(({ path, name }) => (
            <li key={path}>
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>

        <ScrollWatcher />
      </section>
      {children}
    </>
  );
};

export default Layout;
