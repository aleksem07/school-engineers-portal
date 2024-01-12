import styles from "@/app/UI/sass/visually-hidden.module.scss";
import { LogoIcon } from "@/app/UI/icons/logo-icon";

export const Welcome = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className={styles.visuallyHidden}>
        {" "}
        SEP - единый портал для инженеров образовательных учреждений
      </h1>
      <h2 className="text-3xl font-bold inline">
        Добро пожаловать в {<LogoIcon className="inline" />}
      </h2>
      <p className="text-sm text-zinc-700">единый портал для инженеров образовательных учреждений</p>
    </div>
  );
};
