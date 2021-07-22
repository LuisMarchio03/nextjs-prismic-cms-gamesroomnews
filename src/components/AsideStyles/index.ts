import styled from 'styled-components';

export const AsideContainer = styled.aside`
  width: 100%;
  margin: 3rem 0;

  @media (max-width: 1180px) {
    padding-left: 5rem;
  }

  @media (max-width: 980px) {
    width: 100%;
  }

  div {
    display: flex;
    flex-wrap: nowrap;
    margin: 2% 8%;

    @media (max-width: 1180px) {
      margin: 2% 0;
    }

    svg {
      margin-top: 1.3rem;
      margin-right: 0.8rem;
      font-size: 3rem;

      cursor: pointer;

      &.discord {
        color: ${props => props.theme.color.discord};

        transition: filter 0.5s;

        &:hover {
          filter: brightness(50%);
        }
      }

      &.instagram {
        color: ${props => props.theme.color.instagram};

        transition: filter 0.5s;

        &:hover {
          filter: brightness(50%);
        }
      }

      &.facebook {
        color: ${props => props.theme.color.facebook};

        transition: filter 0.5s;

        &:hover {
          filter: brightness(50%);
        }
      }

      &.tiktok {
        transition: filter 0.5s;

        &:hover {
          filter: brightness(50%);
        }
      }
    }
  }
`;
