import React from 'react';
import { FcImport } from 'react-icons/fc';
import { Container } from './style';

const SignUp: React.FC = () => {
  return (
    <Container>
      <form>
        <p className="telefone">
          Telefone:
          <input key="emailSignIn" className="tel" />
        </p>
        <p className="nome">
          Nome :
          <input key="emailSignIn" className="name" />
        </p>
        <p>
          E-mail:
          <input key="emailSignIn" className="email" />
        </p>

        <p className="password">
          Senha :
          <input type="password" className="pass" />
          <h1>&</h1>
          <input type="password" className="pass" />
        </p>

        <button type="button">Entrar</button>

        <div>
          <a href="https://www.figma.com">
            Voltar para o Login
            <FcImport />
          </a>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
