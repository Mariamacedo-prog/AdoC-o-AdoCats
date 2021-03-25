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
  a {
    .menu {
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

export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;

  .individualChatContent {
    height: 440px;
    overflow-y: scroll;
  }

  .individualChatContent_timestamp {
    text-align: center;
    padding: 20px;
    color: #da8181;
  }

  .individualChatContent_message {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 50px;
    width: 96vmax;
  }
  .individualChatContent_textMessagePerson {
    margin-left: 10px;
    padding: 15px;
    border-radius: 20px;
    background-color: #ffaaaa;
    color: #b65959;
    margin-right: auto;
  }

  .individualChatContent_textMessageUser {
    margin-left: 10px;
    padding: 15px;
    border-radius: 20px;
    background-color: #fff;
    color: #b65959;
    margin-left: auto;
  }
  .imageChat {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;

export const Footer = styled.footer`
  .inputText {
    padding: 20px;
    flex: 1;
    border: none;
  }
  .inputSend {
    margin-right: 20px;
    margin-left: 10px;
    border: none;
    background-color: #f16262;
    color: #fff;
    font-family: 'Roboto Slab', serif;
  }
  .individualChatContent_input {
    background: #ffdede;
    display: flex;
    padding: 5px;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #b65959;
  }
`;
