import React from 'react';
import { MdPowerSettingsNew, MdChatBubble } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo.png';
import { useAuth } from '../../Auth/auth';
import { PrincipalHeader } from './style';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <PrincipalHeader>
      <span className="profile">
        <img
          className="perfil"
          src="https://avatars.githubusercontent.com/u/69858181?s=460&u=14a59ccf19348b6623abc13ed2c60ca268bf0cfb&v=4"
          alt="Maria"
        />
        <div>
          <p>Bem vindo(a),</p>
          <Link to="/profile">Maria Macedo</Link>
        </div>
      </span>

      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>

      <span>
        <Link to="/chat">
          <MdChatBubble />
        </Link>
        <button type="button" onClick={signOut}>
          <MdPowerSettingsNew />
        </button>
      </span>
    </PrincipalHeader>
  );
};
export default Header;
