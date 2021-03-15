import React from 'react';
import { MdPowerSettingsNew, MdChatBubble } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../Assets/Logo.png';
import { PrincipalHeader } from './style';

const Header: React.FC = () => {
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

      <Link to="/dashboard">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>

      <span>
        <Link to="/chat">
          <MdChatBubble />
        </Link>
        <Link to="/">
          <MdPowerSettingsNew />
        </Link>
      </span>
    </PrincipalHeader>
  );
};
export default Header;
