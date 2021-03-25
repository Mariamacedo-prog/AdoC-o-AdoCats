import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 94vh;
  display: flex;
  flex-direction: column;
  background: #ffe5e5;
  margin-right: -10px;
  margin-left: -10px;
`;

export const Header = styled.header`
  display: flex;
  height: 100px;
  background: #ffdede;
  margin: -10px 0 0 -10px;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    padding: 20px;

    div {
      flex-direction: column;
      margin-left: 10px;
      justify-content: flex-end;
      align-items: flex-end;
      p {
        font-size: 14px;
        color: #900000;
        font-family: 'Roboto Slab', serif;
        margin-bottom: 0;
      }
      a {
        text-decoration: none;
        font-size: 9px bold;
        color: #f16262;
        font-family: 'Roboto Slab', serif;

        &:hover {
          color: ${shade(0.1, '#f16262')};
        }
      }
    }
  }
  .backButton {
    padding: 20px;
    width: 30px;
    height: 30px;
    color: #f4afaf;
    margin-left: 60px;
  }

  .logo {
    width: 150px;
    height: 100px;
    margin-left: 100px;
  }
  .menu {
    padding: 20px;
    width: 30px;
    height: 30px;
    color: #900000;
    border: 1px solid transparent;
    padding: 15px;
    border-radius: 50%;
    background: #f4afaf;
  }
  button {
    border: none;
    background: #ffdede;
    svg {
      padding: 20px;
      width: 30px;
      height: 30px;
      color: #f4afaf;
      border: 1px solid transparent;
      border-radius: 50%;
      transition: background-color 0.2s;
      transition: color 0.2s;
      padding: 15px;

      &:hover {
        color: ${shade(0, '#900000')};
        border: 1px solid #f4afaf;
        background: #f4afaf;
      }
    }
  }
`;

export const Section = styled.section`
  .chatContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height: 50px;
    border-bottom: 1px solid #fff;
  }
  .imageChat {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .name__chatMessage {
    flex: 1;
    h1 {
      margin-bottom: -10px;
    }
  }
  .name__chatMessage > p {
    color: #c18686;
  }
  a {
    color: black;
    text-decoration: none;
    font-family: 'Roboto Slab', serif;
  }
  .chatTimestamp {
    color: #d7b5b5;
  }
`;

export const Content = styled.div`
  height: 440px;
  overflow-y: scroll;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background: #ffdede;
  margin-bottom: -11px;
`;
