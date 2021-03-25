import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SiGnuicecat } from 'react-icons/si';
import { Container } from './style';
import { useAuth } from '../../Auth/auth';

const SignIn: React.FC = () => {
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async event => {
      event.preventDefault();

      const { email, password } = event.target.elements;
      try {
        await signIn({
          email: email.value,
          password: password.value,
        });

        history.push('/');
      } catch (err) {
        alert('Erro ao fazer login! verifique email, senha e tente novamente.');
      }
    },
    [history, signIn],
  );

  return (
    <Container>
      <form onSubmit={handleSignIn}>
        <p>
          E-mail:
          <input name="email" type="email" className="input" />
        </p>
        <p>
          Senha :
          <input type="password" name="password" className="input" />
          <a href="https://www.figma.com/file/PcNc1U3AxSj3PrezPyR6J9/Untitled?node-id=0%3A1">
            Esqueceu?
          </a>
        </p>
        <button type="submit">entrar</button>
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
