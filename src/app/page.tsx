import { Welcome } from '@/components/welcome/welcome';
import { Contacts } from '@/components/contacts/contacts';

export default function Home() {
  return (
    <>
      <div className="mb-4">
        <Welcome />
      </div>
      <div className="rounded-lg p-4 bg-neutral-100 mb-4 drop-shadow-md">
        <p>Портал создан для инженеров образовательных учреждений.</p>
        <p className="overflow-wrap">
          Здесь собраны справочные материалы по настройке и рекомендуемое ПО для
          поддержания работы школьного парка техники и сети.
        </p>
      </div>
      <div className="rounded-lg p-4 bg-neutral-100 mb-4 drop-shadow-md flex gap-2">
        <p>Нашли ошибку, появились вопросы или предложения?</p>
        <Contacts className="justify-center" />
      </div>
    </>
  );
}
