import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 70% 30%;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }

  .buttonNextPageContainer {
    padding-left: 5rem;

    @media (max-width: 980px) {
      padding-left: 3rem;
    }

    @media (max-width: 680px) {
      padding-left: 1%;
    }
  }
`;
