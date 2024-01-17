import type { Metadata } from 'next';
import DataInternet from './data';
import DataDisableContentFilter from '@/data/disable-content-filter';

export const metadata: Metadata = {
  title: 'SEP - Internet',
};

export default function Internet() {
  return (
    <>
      <DataInternet />
      <DataDisableContentFilter />
    </>
  );
}
