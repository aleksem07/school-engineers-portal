import type { Metadata } from 'next';
import NavPanelAdditional from '@/components/nav-panel-additional/nav-panel-additional';
import { SETTINGS_ROUTES } from '@/common/links-settings';

export const metadata: Metadata = {
  title: 'SEP - Linux',
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavPanelAdditional addRoutes={SETTINGS_ROUTES} />
      {children}
    </>
  );
};

export default Layout;
