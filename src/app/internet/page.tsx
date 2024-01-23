import type { Metadata } from 'next';
import DataInternet from './data';
import DataDisableContentFilter from '@/data/disable-content-filter';
import ScrollWatcher from '@/components/scroll-watcher/scroll-watcher';
export const metadata: Metadata = {
  title: 'SEP - Internet',
};

export default function Internet() {
  return (
    <section className="w-full p-4">
      <DataInternet />
      <DataDisableContentFilter />

      <ScrollWatcher />
    </section>
  );
}
