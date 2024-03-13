import type { Metadata } from 'next';
import NavPanelAdditional from '@/components/nav-panel-additional/nav-panel-additional';
import { LINUX_ROUTES } from '@/common/links-linux';
import { APP_ROUTES } from '@/common/routes';

export const metadata: Metadata = {
  title: 'SEP - Linux',
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavPanelAdditional links={LINUX_ROUTES} section={'dfgfd'} />
      {children}
    </>
  );
};

export default Layout;
