import type { Metadata } from 'next';
import AccordionUsage from '@/components/accordion/accordion';

export const metadata: Metadata = {
  title: 'SEP - Internet',
};

export default function Internet() {
  return (
    <>
      <AccordionUsage title={'Сетевые настройки'} data={<p>Описание</p>} />
      <AccordionUsage title={'Отключение контентной фильтраци'} data={<p>Описание</p>} />
    </>
  );
}
