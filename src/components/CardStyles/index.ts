import styled from 'styled-components';

export const CardContainer = styled.section`
  width: 75%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding-left: 5rem;

  @media (max-width: 980px) {
    width: 90%;
    padding-left: 0;
    margin: 3rem auto;
  }

  @media (max-width: 680px) {
    width: 98%;
  }

  h2 {
    margin: 2.5% 0;
    padding: 0 1%;
    cursor: pointer;

    transition: 0.5s;

    &:hover {
      color: ${props => props.theme.color.purple400};
    }
  }

  img {
    max-width: 100%;
    height: auto;

    border-radius: 25px;
    cursor: pointer;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(80%);
    }
  }

  p {
    padding: 1%;

    font: 500 1rem Inter, sans-serif;
    text-align: justify;
    line-height: 34px;
    cursor: pointer;

    transition: 0.5s;

    &:hover {
      color: ${props => props.theme.color.gray300};
    }
  }
`;
