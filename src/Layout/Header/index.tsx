import Link from 'next/link';

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { HeaderContainer, Logo } from './styles';

export function Header() {
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
      <p>Bem vindo(a) ao universo gamer</p>
      <span>{currentDate}</span>
    </HeaderContainer>
  )
}