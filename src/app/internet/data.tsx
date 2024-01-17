'use client';
import AccordionUsage from '@/components/material/accordion/accordion';
import BasicTabs from '@/components/material/tabs/tabs';
import Link from 'next/link';

const DataInternet = () => {
  return (
    <>
      <AccordionUsage
        title={'Сетевые настройки'}
        data={
          <>
            <BasicTabs /> <Link href={'/'}>Подробнее</Link>
          </>
        }
        isOpen
      />
    </>
  );
};

export default DataInternet;
