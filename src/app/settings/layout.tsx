import type { Metadata } from 'next';
import NavPanelSettingsPage from '@/components/nav-panel-settings-page/nav-panel-settings-page';

export const metadata: Metadata = {
  title: 'SEP - Settings',
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavPanelSettingsPage />
      {children}
    </>
  );
};

export default Layout;
