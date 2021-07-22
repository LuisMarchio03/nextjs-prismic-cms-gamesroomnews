import styled from 'styled-components';

export const Button = styled.button`
  padding: 1% 4%;
  margin: 0 0 2% 0;

  background: ${props => props.theme.color.green500};
  border: 0;
  color: ${props => props.theme.color.white};

  @media (max-width: 680px) {
    padding: 2% 4%;
  }
`;
