import React from 'react';
import { Link } from 'react-router-dom';
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
          <input type="password" className="pass" placeholder="Confirme" />
        </p>

        <button type="button">Entrar</button>

        <div>
          <Link to="/">
            Voltar para o Login
            <FcImport />
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
