import type { Metadata } from 'next';
import NavPanelAdditional from '@/components/nav-panel-additional/nav-panel-additional';
import { SETTINGS_ROUTES } from '@/common/links-settings';
import { APP_ROUTES } from '@/common/routes';

export const metadata: Metadata = {
  title: 'SEP - Settings',
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavPanelAdditional
        links={SETTINGS_ROUTES}
        section={APP_ROUTES.SETTINGS}
        pathSlice={'SETTINGS'}
      />
      {children}
    </>
  );
};

export default Layout;
