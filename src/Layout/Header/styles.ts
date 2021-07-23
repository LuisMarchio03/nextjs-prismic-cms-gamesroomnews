import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme.color.header};
  height: 6rem;

  display: flex;
  align-items: center;

  padding: 2rem 3rem;

  border-bottom: 1px solid ${props => props.theme.color.gray200};

  @media (max-width: 860px) {
    flex-direction: column;
    height: auto;
  }

  p {
    margin-left: 2rem;
    padding: 0.25rem 0.25rem 2rem;
    border-left: 1px solid ${props => props.theme.color.gray200};

    font-family: 'Zen Tokyo Zoo', cursive;
    font-weight: 400;
    font-size: 1.7rem;

    @media (max-width: 860px) {
      margin: 15px 0;
      margin-left: 0;
      padding: 0;
      border-left: 0;
    }
  }

  span {
    margin-left: auto;
    margin-right: 2rem;

    @media (max-width: 860px) {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 1.5rem;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 80px;
    height: auto;
  }

  strong {
    font-size: 1.5rem;
    padding: 0 1rem;

    cursor: pointer;
  }
`;