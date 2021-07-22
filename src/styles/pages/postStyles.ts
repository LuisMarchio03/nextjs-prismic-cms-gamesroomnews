import styled from 'styled-components';

export const Article = styled.article`
  max-width: 45rem;
  padding: 3rem 2rem;
  margin: 0 auto;

  background-color: transparent;

  .returnHome {
    text-align: center;

    margin-bottom: 3rem;

    cursor: pointer;

    font-size: 1.2rem;
    color: ${props => props.theme.color.purple300};
  }

  .thumbnailContainer {
    position: relative;

    img {
      //720px X 350px
      border-radius: 1rem;

      width: 100%;
      height: auto;
    }
  }

  header {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme.color.gray100};

    h1 {
      font-size: 2rem;

      margin-top: 2.5rem;
      margin-bottom: 1.8rem;

      color: ${props => props.theme.color.gray800};
    }

    a {
      color: ${props => props.theme.color.purple300};
    }
  }

  div.borderDiv {
    width: 100%;
    height: 2px;
    background: ${props => props.theme.color.purple300};

    margin-bottom: 2rem;
  }

  .description {
    margin-top: 2rem;
    line-height: 1.9rem;
    color: ${props => props.theme.color.gray500};
    margin: 1rem 0;

    text-align: justify;

    h2 {
      font-size: 1.7rem;
    }
    h3 {
      font-size: 1.6rem;
    }
    h4 {
      font-size: 1.5rem;
    }
    h5 {
      font-size: 1.4rem;
    }
    h6 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1.08rem;
      line-height: 2.3rem;
      padding: 1rem 0;
    }

    img {
      //720px X 350px
      border-radius: 1rem;

      width: 100%;
      height: auto;
    }
  }

  footer {
    span {
      display: inline-block;
      font-size: 1rem;

      margin: 1.5rem 0;

      & + span {
        margin-left: 1rem;
        padding-left: 1rem;
        position: relative;

        &::before {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 2px;
          background: #ddd;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
`;
