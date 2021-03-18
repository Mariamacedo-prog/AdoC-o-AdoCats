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
        throw new Error(`Não foi possível realizar o cadastro ${err.message} `);
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
        <p>Email</p>
        <input name="email" type="email" />
        <p>Senha</p>
        <input type="password" name="password" />
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
