import styled from 'styled-components';
import { shade } from 'polished';
import telalogin from '../../Assets/Login.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: url(${telalogin}) no-repeat center;
  background-size: cover;
  margin: -13px;
  margin-right: -5px;
  align-items: center;
  justify-content: center;

  form {
    margin-top: 310px;
    margin-left: 50px;
    width: 390px;
    height: 280px;
    display: flex;
    flex-direction: column;

    p {
      font-size: 15px;
      color: #b45252;
      margin-right: 10px;
      input {
        background: #ffdede;
        width: 260px;
        height: 30px;
        color: #b45252;
        border: none;
      }
      a {
        text-decoration: none;
        color: #ffb2b2;
        margin-left: 5px;

        &:hover {
          color: ${shade(0.1, '#f16262')};
        }
      }
    }

    button {
      margin-left: 45px;
      background: #f16262;
      width: 265px;
      height: 30px;
      color: #fff;
      border: 1px solid #b45252;

      &:hover {
        background: ${shade(0.1, '#f16262')};
      }
    }

    div {
      display: flex;
      width: 350px;
      height: 100px;
      align-items: center;
      justify-content: center;
      a {
        font-size: 17px;
        text-decoration: none;
        color: #b45252;
        &:hover {
          color: ${shade(0.2, '#b45252')};
        }
        svg {
          margin-top: 10px;
          margin-left: 5px;
          margin-right: 5px;
          width: 15px;
          height: 15px;
        }
      }
    }
  }
`;
