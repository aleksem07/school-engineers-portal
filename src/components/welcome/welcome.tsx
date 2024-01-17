import styles from '@/UI/sass/visually-hidden.module.scss';
import { LogoIcon } from '@/UI/icons/logo-icon';

export const Welcome = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className={styles.visuallyHidden}>
        SEP - единый портал для инженеров образовательных учреждений
      </h1>
      <h2 className="font-bold inline text-center text-3xl mobile:text-2xl">
        Добро пожаловать в {<LogoIcon className="inline" />}
      </h2>
      <p className="text-center text-zinc-700 text-sm mobile:text-xs">
        единый портал для инженеров образовательных учреждений
      </p>
    </div>
  );
};
