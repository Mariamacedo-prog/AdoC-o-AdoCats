import styled from 'styled-components';
import { shade } from 'polished';

export const PrincipalHeader = styled.header`
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
        h2 {
          padding: 0;
          font-size: 15px;
          margin: 0;
          color: #f16262;
        }
      }

      .linkProfile {
        margin: 0;
        color: #f16262;
        transition: color 0.2s;
        &:hover {
          color: ${shade(0.1, '#900000')};
        }
      }

      a {
        text-decoration: none;
        font-size: 9px bold;
        color: #f16262;
        font-family: 'Roboto Slab', serif;
        transition: color 0.2s;

        &:hover {
          color: ${shade(0.1, '#f16262')};
        }
      }
    }

    .perfil {
      width: 65px;
      height: 65px;
      border-radius: 50%;
      border: 3px solid #f4afaf;
    }
  }

  .logo {
    width: 150px;
    height: 100px;
  }
  a {
    svg {
      padding: 20px;
      width: 30px;
      height: 30px;
      color: #f4afaf;
      border: 1px solid transparent;
      border-radius: 50%;
      transition: color 0.2s;
      transition: background-color 0.2s;
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
      transition: color 0.2s;
      border-radius: 50%;
      transition: background-color 0.2s;
      padding: 15px;

      &:hover {
        color: ${shade(0, '#900000')};
        border: 1px solid #f4afaf;

        background: #f4afaf;
      }
    }
  }
`;
