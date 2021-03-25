import React, { useCallback } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { FcImport } from 'react-icons/fc';
import { Container } from './style';
import { firebaseapp } from '../../Firebase';

const SignUp: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseapp
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);

        history.push('/');
      } catch (err) {
        alert(
          'Erro ao fazer o cadastro! verifique se o e-mail esta correto e se a senha possui mais de 6 digitos',
        );
      }
    },
    [history],
  );

  const user = firebaseapp.auth().currentUser;

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <p>
          Email :
          <input name="email" type="email" />
        </p>

        <p>
          Senha :
          <input type="password" name="password" />
        </p>

        <button type="submit">Cadastrar</button>

        <div>
          <Link to="/signin">
            Voltar para o Login
            <FcImport />
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
