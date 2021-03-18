import React, { useEffect, useState } from 'react';
import {
  MdReplay,
  MdThumbDown,
  MdThumbUp,
  MdPets,
  MdAccountCircle,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import RowPerson from 'react-tinder-card';
import Header from '../../Components/Header';
import { database } from '../../Firebase';

import { Container, Content, Perfil, Footer } from './style';

const Dashboard: React.FC = () => {
  const [person, setPerson] = useState<any[]>([]);

  useEffect(() => {
    const personData = database
      .collection('users')
      .onSnapshot(snapshot => setPerson(snapshot.docs.map(doc => doc.data())));
    return () => {
      personData();
    };
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Perfil>
          <div className="containerRowPerson">
            {person.map(user => (
              <div key={user.id} className="rowing">
                <RowPerson preventSwipe={['up', 'down']}>
                  <div
                    className="rowPerson"
                    style={{ backgroundImage: `url(${user.url})` }}
                  >
                    <h1>{user.name}</h1>
                  </div>
                </RowPerson>
              </div>
            ))}
          </div>
        </Perfil>
      </Content>
      <Footer>
        <div className="foot">
          <button type="submit">
            <MdReplay className="replay" />
          </button>
          <button type="submit">
            <MdThumbDown className="notLike" />
          </button>
          <Link to="/perfilDoGato">
            <MdPets className="superpet" />
          </Link>
          <button type="submit">
            <MdThumbUp className="like" />
          </button>
          <Link to="/perfilDoDono">
            <MdAccountCircle className="userPer" />
          </Link>
        </div>
      </Footer>
    </Container>
  );
};

export default Dashboard;
