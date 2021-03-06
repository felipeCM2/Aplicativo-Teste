import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;

    width: 100%;
    max-width: 700px;


`;

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  form {
      margin: 80px 0;
      width: 340px;
      text-align: center;

      h1{
          margin-bottom: 24px;
      }

      a {
          color: #f3ede8;
          display: block;
          margin-top: 24px;
          text-decoration: none;
          transition: background-color 0.2s;

          &:hover {
              color: ${shade(0.2, '#f3ede8')}
          }
      }
    }
    > a {
            color: #ff9000;
            margin-top: 24px;
            text-decoration: none;
            transition: background-color 0.2s;

            &:hover {
                color: ${shade(0.2, '#ff9000')}
            }

            display: flex;

            svg {
                margin-right: 16px;
            }
        }
`;

export const Background = styled.div`
    flex: 1;

    background: url(${signUpBackgroundImg});
    background-size: cover;
`;

