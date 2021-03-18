import React, { useState, useCallback } from 'react';
import { MdPowerSettingsNew, MdChatBubble, MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/Logo.png';
import { useAuth } from '../../../Auth/auth';
import { Container, Content, Footer, Header } from './style';

const IndividualChat: React.FC = () => {
  const { signOut } = useAuth();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Maria Macedo',
      imgPerfil:
        'https://miro.medium.com/max/900/1*zycFEuGuh48dSDoUaOwnuA.jpeg',
      message: 'hey',
    },
    {
      name: 'Maria Macedo',
      imgPerfil:
        'https://miro.medium.com/max/900/1*zycFEuGuh48dSDoUaOwnuA.jpeg',
      message: 'Tudo bem?',
    },
    {
      message: 'Bem e você?',
    },
  ]);

  const sendMensage = useCallback(
    e => {
      e.preventDefault();
      setMessages([...messages, { message: input }]);
      setInput('');
    },
    [input, messages],
  );

  return (
    <Container>
      <Header>
        <div className="back">
          <Link to="/chat">
            <MdArrowBack className="backButton" />
          </Link>
        </div>

        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>

        <span>
          <Link to="/chat">
            <MdChatBubble className="menu" />
          </Link>
          <button type="button" onClick={signOut}>
            <MdPowerSettingsNew />
          </button>
        </span>
      </Header>
      <Content>
        <div className="individualChatContent">
          <p className="individualChatContent_timestamp">
            COMEÇOU A CONVERSA DIA 16/03/2021
          </p>
          {messages.map(message => (
            <div key={message.message}>
              {message.name ? (
                <div className="individualChatContent_message">
                  {message.imgPerfil === '' ? (
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMSJVFa7B0cIx1c1c9egYBfaxDJlSo3HqX48VosilokU6Au9APnBqZj53WoOi1eltGdg&usqp=CAU"
                      alt={message.name}
                      className="imageChat"
                    />
                  ) : (
                    <img
                      src={message.imgPerfil}
                      alt={message.name}
                      className="imageChat"
                    />
                  )}
                  <p className="individualChatContent_textMessagePerson">
                    {message.message}
                  </p>
                </div>
              ) : (
                <div className="individualChatContent_message">
                  <p className="individualChatContent_textMessageUser">
                    {message.message}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Content>
      <Footer>
        <form className="individualChatContent_input">
          <input
            type="text"
            placeholder="Escreva sua mensagem..."
            className="inputText"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <input
            type="submit"
            value="enviar"
            className="inputSend"
            onClick={sendMensage}
          />
        </form>
      </Footer>
    </Container>
  );
};

export default IndividualChat;
