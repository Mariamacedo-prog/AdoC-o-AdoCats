import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #ffe5e5;
  margin: -8px;
`;
export const Header = styled.header`
  display: flex;
  height: 100px;
  background: #ffdede;
  justify-content: space-between;
  align-items: center;

  svg {
    padding: 20px;
    width: 30px;
    height: 30px;
    color: #f4afaf;
    margin: 10px;
  }
  h1 {
    color: #f16262;
    -webkit-text-stroke-width: 0.9px;
    -webkit-text-stroke-color: black;
  }
  a {
    .backButton {
      margin-right: auto;
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
      margin-right: 20px;

      &:hover {
        color: ${shade(0, '#900000')};
        border: 1px solid #f4afaf;
        background: #f4afaf;
      }
    }
  }
`;

export const ContentUser = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;

  form {
    display: flex;
    flex-direction: column;
    span {
      padding: 3px;
      input {
        background: #ffdede;
        width: 260px;
        height: 20px;
        color: #b45252;
        border: none;
        font-family: 'Roboto Slab', serif;
        font-size: 13px;
      }
    }

    .eye {
      border: none;
      cursor: pointer;
      width: 25px;
      color: black;
      background: #ffe5e5;

      &:hover {
        color: #f16262;
        background: #ffe5e5;
      }

      svg {
        width: 15px;
        height: 15px;
      }
    }

    button {
      margin-top: 5px;
      background: #f16262;
      width: 265px;
      height: 20px;
      color: #fff;
      border: 1px solid #b45252;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.1, '#f16262')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 20px;
  position: relative;
  align-self: center;
  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }
  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #f16262;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #313139;
    }
    &:hover {
      background: ${shade(0.2, '#f16262')};
    }
  }
`;

export const PetTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: #f16262;
    -webkit-text-stroke-width: 0.9px;
    -webkit-text-stroke-color: black;
  }
`;

export const PetList = styled.div`
  display: flex;

  margin-top: -20px;
  padding: 0;
`;

export const Section = styled.div`
  display: flex;
  width: 380px;
  padding: 5px;

  span {
    display: flex;
    background: #f4ecec;
    width: 280px;
    height: 120px;
    border-radius: 7px;
    align-items: flex-start;
    justify-content: space-between;
    border: 3px solid #f4afaf;

    button {
      border: none;
      background: #f4ecec;
      svg {
        width: 15px;
        height: 15px;
        color: #ff0000;
      }
    }

    h1 {
      font-family: 'Roboto Slab', serif;
      font-size: 24px;
      margin-top: 40px;
      color: black;

      -webkit-text-stroke-width: 0.3px;
      -webkit-text-stroke-color: #f16262;
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 10px;
      border: 1px solid #f4afaf;
    }
  }
`;

export const ContainerPet = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  .adcPets {
    display: flex;
    justify-content: flex-start;
    margin-right: 205px;
    width: 420px;
    button {
      border: none;
      background: #ffe5e5;
      height: 115px;

      svg {
        width: 50px;
        height: 50px;
        cursor: pointer;
      }
    }

    .hidden {
      display: none;
      background: #fff;
      width: 280px;
      height: 120px;
      border-radius: 7px;

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left: 5px;

        .icon {
          margin-bottom: -10px;
          width: 30px;
          height: 30px;
          color: #b45252;
        }

        span {
          padding-top: 5px;
          padding-bottom: 10px;
          input {
            background: #fff;
            width: 230px;
            height: 20px;
            color: #b45252;
            font-family: 'Roboto Slab', serif;
            font-size: 13px;
          }
        }
        button {
          margin-top: 5px;
          background: #f16262;
          width: 265px;
          height: 20px;
          color: #fff;
          border: 1px solid #b45252;
          transition: background-color 0.2s;

          &:hover {
            background: ${shade(0.1, '#f16262')};
          }
        }
      }
    }
  }
`;
