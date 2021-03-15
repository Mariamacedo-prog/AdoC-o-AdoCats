import React from 'react';
import { Link } from 'react-router-dom';
import { SiGnuicecat } from 'react-icons/si';
import { Container } from './style';

const SignIn: React.FC = () => {
  return (
    <Container>
      <form>
        <p>
          E-mail:
          <input key="emailSignIn" className="input" />
        </p>
        <p>
          Senha :
          <input type="password" className="input" />
          <a href="https://www.figma.com/file/PcNc1U3AxSj3PrezPyR6J9/Untitled?node-id=0%3A1">
            Esqueceu?
          </a>
        </p>
        <button type="button">Entrar</button>

        <div>
          <SiGnuicecat />
          <Link to="/signup">Crie sua conta</Link>
          <SiGnuicecat />
        </div>
      </form>
    </Container>
  );
};

export default SignIn;
