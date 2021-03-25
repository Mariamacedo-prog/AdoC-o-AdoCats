import React from 'react';
import { MdPowerSettingsNew, MdChatBubble } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo.png';
import { useAuth } from '../../Auth/auth';
import { PrincipalHeader } from './style';

const Header: React.FC = () => {
  const { signOut, currentUser } = useAuth();

  console.log(currentUser);

  return (
    <PrincipalHeader>
      <span className="profile">
        {currentUser.photoURL != null ? (
          <img
            src={currentUser.photoURL}
            alt={currentUser.displayName}
            className="perfil"
          />
        ) : (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMSJVFa7B0cIx1c1c9egYBfaxDJlSo3HqX48VosilokU6Au9APnBqZj53WoOi1eltGdg&usqp=CAU"
            alt={currentUser.displayName}
            className="perfil"
          />
        )}

        <div>
          <p>
            Bem vindo(a),
            <h2>{currentUser.displayName}</h2>
          </p>

          <Link to="/profile">
            <p className="linkProfile"> ver perfil...</p>
          </Link>
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
