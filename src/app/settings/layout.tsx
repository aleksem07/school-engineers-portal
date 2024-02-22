import DataDisableContentFilter from '@/data/settings/disable-content-filter';
// import MedicalOffice from '@/app/settings/medical-office/medical-office';
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
        <DataDisableContentFilter />
        {/* <MedicalOffice /> */}
        <ul>
          <li>
            <Link href={SETTINGS_ROUTES.NETWORK}>SETTINGS_ROUTES.NETWORK</Link>
          </li>
          <li>
            <Link href={SETTINGS_ROUTES.MEDICAL_OFFICE}>
              SETTINGS_ROUTES.MEDICAL_OFFICE
            </Link>
          </li>
        </ul>

        <ScrollWatcher />
      </section>
      {children}
    </>
  );
};

export default Layout;
