import Link from "next/link";

import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import styles from "./header.module.scss";

const Header: React.FC = () => {
  const currentDate = format(new Date(), "EEEEEE, dd MMMM", {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="Logo" />
      </div>
      <Link href="/">
        <strong>Games Room News</strong>
      </Link>
      <p>Bem vindo(a) ao universo gamer</p>
      <span>{currentDate}</span>
    </header>
  );
};

export default Header;
