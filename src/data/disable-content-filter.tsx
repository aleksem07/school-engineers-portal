'use client';
import Link from 'next/link';
import AccordionUsage from '@/components/material/accordion/accordion';

const DataDisableContentFilter = () => {
  return (
    <AccordionUsage
      title={'Отключение контентной фильтраци'}
      data={
        <div>
          <p>
            Вам необходимо направить письмо от Вашего учреждения с вложенным
            заявлением (
            <Link
              href={
                'https://docs.google.com/document/d/1iAleFBPwfdQcxnBNlV0ykkgJ-N49t618/edit?usp=sharing&ouid=105324012395236214231&rtpof=true&sd=true'
              }
              target={'_blank'}
            >
              Шаблон заявления
            </Link>
            ) на почтовый ящик{' '}
            <Link href={'mailto:mcszo@digital.gov.ru'}>
              mcszo@digital.gov.ru
            </Link>
            :
          </p>

          <p>Текст заявления должен содержать:</p>
          <ol>
            <li>
              Просьбу о полном отключение контентной фильтрации с
              административных компьютеров;
            </li>
            <li>
              IP-адрес/са компьютеров на котором/ых требуется отключение
              контентной фильтрации;
            </li>
            <li>
              Фразу о том, что руководитель школы гарантирует отсутствие доступа
              учащихся к данным компьютерам;
            </li>
            <li>
              В документе указывается дата его формирования, ФИО директора, его
              подпись и печать учреждения.
            </li>
          </ol>
        </div>
      }
    />
  );
};

export default DataDisableContentFilter;
