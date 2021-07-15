
import Link from "next/link";

import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import styles from "./header.module.scss";

import { AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

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
      <div className={styles.links}>
        <span>
          <a target="_blank" href="https://www.instagram.com/gamesroom_news/">
            <AiOutlineInstagram />
          </a>
        </span>
        <span>
          <a target="_blank" href="https://discord.gg/9WrEqqqchu">
            <FaDiscord />
          </a>
        </span>
      </div>
      <span>{currentDate}</span>
    </header>
  );
};

export default Header;
