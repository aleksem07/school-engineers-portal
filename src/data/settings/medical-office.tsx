import AccordionUsage from '@/components/material/accordion/accordion';

const MedicalOffice = () => {
  return (
    <AccordionUsage
      title={'Медицинский кабинет (РС ЕГИСЗ)'}
      data={
        <ol className="ml-10">
          <li>
            Подключить ПК / ноутбук кабелем к порту №2 криптошлюза (`Континент`)
          </li>
          <li>
            <ul>
              <h3>Настроить сетевую карту (Свойства: TCP/IPv4)</h3>
              <p>
                IP адрес для каждого учреждения смотрите в приложении (по
                запросу в УО)
              </p>
              <li>
                <b>ip-адрес:</b>
                172.20.рекомендуемый адрес для АРМ (из приложения)
              </li>
              <li>
                <b>Маска подсети:</b> 255.255.255.240
              </li>
              <li>
                <b>Основной шлюз:</b> 172.20.шлюз (из приложения)
              </li>
              <li>
                <b>DNS-серверы:</b> оставить пустыми
              </li>
            </ul>
          </li>
          <li>Выполнить из консоли команду ping 10.230.0.4</li>
          <li>В браузере открыть http://10.230.0.2/webmis_3221000/</li>
        </ol>
      }
    />
  );
};

export default MedicalOffice;
