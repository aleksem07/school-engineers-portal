import type { Metadata } from 'next';
import SettingInternet from './data';
import DataDisableContentFilter from '@/data/settings/disable-content-filter';
import MedicalOffice from '@/data/settings/medical-office';

import ScrollWatcher from '@/components/scroll-watcher/scroll-watcher';
export const metadata: Metadata = {
  title: 'SEP - Internet',
};

export default function Internet() {
  return (
    <section className="w-full p-4">
      <SettingInternet />
      <DataDisableContentFilter />
      <MedicalOffice />

      <ScrollWatcher />
    </section>
  );
}
