import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { MdPowerSettingsNew, MdChatBubble, MdArrowBack } from 'react-icons/md';
import Logo from '../../Assets/Logo.png';

import { Container, Content, Footer, Section, Header } from './style';

const Chat: React.FC = () => {
  const [users, setUsers] = useState([
    {
      name: 'Olivia',
      message: 'Tranquilo',
      timestamp: 'faz 40m',
      imgPerfil: '',
    },
    {
      name: 'Maria Macedo',
      message: 'tudo bem',
      timestamp: 'faz 40m',
      imgPerfil:
        'https://osegredo.com.br/wp-content/uploads/2019/12/A-mulher-que-se-aceita01-870x470.jpg',
    },
    {
      name: 'Luciana',
      message: 'vlw',
      timestamp: 'faz 40seg',
      imgPerfil:
        'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg',
    },
    {
      name: 'Julia',
      message: 'também',
      timestamp: 'faz 1 semana',
      imgPerfil:
        'https://miro.medium.com/max/900/1*zycFEuGuh48dSDoUaOwnuA.jpeg',
    },
  ]);

  return (
    <Container>
      <Header>
        <div className="back">
          <Link to="/dashboard">
            <MdArrowBack className="backButton" />
          </Link>
        </div>

        <Link to="/dashboard">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>

        <span>
          <Link to="/chat">
            <MdChatBubble className="menu" />
          </Link>
          <Link to="/">
            <MdPowerSettingsNew className="menu" />
          </Link>
        </span>
      </Header>
      <Content>
        {users.map(user => (
          <Section key={user.name}>
            <Link to={`/chat/${user.name}`}>
              <div className="chatContent">
                {!user.imgPerfil || user.imgPerfil === '' ? (
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMSJVFa7B0cIx1c1c9egYBfaxDJlSo3HqX48VosilokU6Au9APnBqZj53WoOi1eltGdg&usqp=CAU"
                    alt={user.name}
                    className="imageChat"
                  />
                ) : (
                  <img
                    src={user.imgPerfil}
                    alt={user.name}
                    className="imageChat"
                  />
                )}

                <div className="name__chatMessage">
                  <h1>{user.name}</h1>
                  <p>{user.message}</p>
                </div>
                <p className="chatTimestamp">{user.timestamp}</p>
              </div>
            </Link>
          </Section>
        ))}
      </Content>
      <Footer>aqui</Footer>
    </Container>
  );
};

export default Chat;
