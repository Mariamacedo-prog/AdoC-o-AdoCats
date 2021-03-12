import styled from 'styled-components';
import { shade } from 'polished';
import telacadastro from '../../Assets/cadastro.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: url(${telacadastro}) no-repeat center;
  background-size: cover;
  align-items: center;
  justify-content: center;
  margin: -10px;
  margin-right: -3px;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 200px;
    margin-right: 100px;

    p.password {
      display: flex;
      h1 {
        font-size: 15px;
      }

      .pass {
        background: #ffdede;
        width: 122px;
        height: 30px;
        border: none;
      }
    }

    p {
      font-size: 15px;
      color: #b45252;

      input {
        background: #ffdede;
        width: 260px;
        height: 30px;
        border: none;
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
      width: 265px;
      height: 100px;
      display: flex;
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
