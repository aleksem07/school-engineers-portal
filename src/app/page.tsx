import { Welcome } from "@/components/welcome/welcome";

export default function Home() {
  return (
    <>
    <div className='mb-4'>
      <Welcome />
    </div>
    <div className='rounded-lg p-4 bg-neutral-100 mb-4'>
      <p>Портал создан для инженеров образовательных учреждений.</p>
      <p>Здесь собраны справочные материалы по настройке и рекомендуемое ПО для работы школьного парка техники и сети.</p>
    </div>
    <div className='rounded-lg p-4 bg-neutral-100'>
      <p>Нашли ошибку, появились вопросы или предложения?</p>

    </div>
    </>
  );
}
