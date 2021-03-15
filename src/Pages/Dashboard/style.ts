import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  background: #ffe5e5;
  margin-right: -10px;
  margin-left: -10px;
`;
export const Perfil = styled.div`
  display: flex;
  justify-content: center;

  .rowPerson {
    position: relative;
    width: 400px;
    padding: 20px;
    max-width: 85vw;
    height: 57vh;
    border-radius: 20px;
    background-size: cover no-repeat;
    background-position: center;
    box-shadow: 0 20px 25px 0 rgba(0, 0, 0, 0.2);
    h1 {
      position: absolute;
      bottom: 10px;
      color: #fff;
      -webkit-text-stroke-width: 0.7px;
      -webkit-text-stroke-color: #000;
    }
  }
  .containerRowPerson {
    display: flex;
    margin-top: 3vh;
    width: 400px;
    height: 420px;
  }

  .rowing {
    position: absolute;
  }
`;
export const Content = styled.div``;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffdede;
  margin: -10px 0 0 -10px;
  .foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 420px;
    height: 80px;
    margin-left: 50px;

    button {
      cursor: pointer;
      border: 0;
      background: #ffdede;
    }

    svg {
      height: 30px;
      width: 30px;
      box-shadow: 0 10px 30px 0;
      border-radius: 50%;
    }
    .replay {
      padding: 15px;
      color: #f16262;
      transition: color 0.1s;
      &:hover {
        color: ${shade(0.3, 'yellow')};
      }
    }
    .notLike {
      padding: 15px;
      color: #f16262;
      transition: color 0.1s;
      &:hover {
        color: ${shade(0.1, 'red')};
      }
    }
    .superpet {
      padding: 15px;
      color: #f16262;
      transition: color 0.1s;
      &:hover {
        color: ${shade(0.2, '#A300B1')};
      }
    }
    .like {
      padding: 15px;
      color: #f16262;
      transition: color 0.1s;
      &:hover {
        color: ${shade(0.1, 'green')};
      }
    }
    .userPer {
      padding: 15px;
      color: #f16262;
      transition: color 0.1s;
      &:hover {
        color: ${shade(0.2, 'blue')};
      }
    }
  }
`;
