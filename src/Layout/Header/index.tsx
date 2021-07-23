import Link from 'next/link';

import Switch from 'react-switch';
import { shade } from 'polished'

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { HeaderContainer, Logo } from './styles';

export function Header({ toggleTheme, theme }) {

  const currentDate = format(new Date(), "EEEEEE, dd MMMM", {
    locale: ptBR,
  });

  return (
    <HeaderContainer>
      <Logo>
        <div>
          <img src="/logo.svg" alt="Games Room News" />
        </div>
        <Link href="/">
          <strong>Games Room News</strong>
        </Link>
      </Logo>
      <p>bem vindo(a) ao universo gamer</p>
      <span>{currentDate}</span>
      <Switch
        onChange={toggleTheme}
        checked={theme.title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, "#925fd9")}
        onColor="#6f48c9"
      />
    </HeaderContainer>
  )
}