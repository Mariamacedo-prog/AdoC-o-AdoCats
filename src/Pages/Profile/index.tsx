import React, { useCallback, useEffect, useState } from 'react';
import { MdArrowBack, MdPhotoCamera, MdPowerSettingsNew } from 'react-icons/md';
import { AiFillCloseSquare } from 'react-icons/ai';
import { FcPlus } from 'react-icons/fc';
import { GiHollowCat, GiEyeTarget } from 'react-icons/gi';
import { Link, useHistory } from 'react-router-dom';
import { uuid } from 'uuidv4';

import { useAuth } from '../../Auth/auth';

import { firebaseapp, database } from '../../Firebase';
import {
  Container,
  Header,
  AvatarInput,
  ContentUser,
  PetTitle,
  ContainerPet,
  PetList,
  Section,
} from './style';

const Profile: React.FC = () => {
  const [fileURL, setFileURL] = useState();
  const [showType, setShowType] = useState({ type: 'password' });
  const [listUsersPet, setListUsersPet] = useState<any[]>([]);
  const { currentUser, signOut } = useAuth();
  const history = useHistory();

  const upProfile = useCallback(
    async event => {
      event.preventDefault();
      const { name, email } = event.target.elements;

      try {
        await currentUser.updateProfile({
          displayName: name.value,
        });

        await currentUser.updateEmail(email.value).then({
          email: email.value,
        });

        history.push('/');
      } catch (err) {
        alert('Erro ao fazer a atualização, verifique e tente novamente.');
      }
    },
    [currentUser, history],
  );

  const changePassword = useCallback(
    async event => {
      event.preventDefault();
      const { password } = event.target.elements;
      const newPassword = password.value;
      try {
        await currentUser
          .updatePassword(newPassword)
          .then({ password: newPassword });
        history.push('/');
      } catch (err) {
        alert(
          'Erro ao fazer a alterção da senha, verifique e tente novamente.',
        );
      }
    },
    [currentUser, history],
  );

  const changeAvatar = useCallback(
    async e => {
      const userId = currentUser.uid;
      const id = uuid();

      const uploadPhoto = e.target.files[0];
      const storage = firebaseapp.storage();

      if (currentUser && uploadPhoto) {
        storage
          .ref()
          .child(`Avatar/${userId}/${id}.png`)
          .put(uploadPhoto)
          .then(async res => {
            const urlResponse = await res.ref.getDownloadURL().then(url => url);
            const data = {
              user_id: userId,
              name: `${id}.png`,
              url: urlResponse,
            };

            try {
              await currentUser.updateProfile({
                photoURL: data.url,
              });

              history.push('/');
            } catch (err) {
              console.log(err);
            }
          });
      }
    },
    [currentUser, history],
  );

  const adcPhoto = useCallback(
    async e => {
      e.preventDefault();
      const userId = currentUser.uid;
      const id = uuid();
      const uploadPhoto = e.target.files[0];
      const storage = firebaseapp.storage();

      if (currentUser && uploadPhoto) {
        storage
          .ref()
          .child(`Images/${userId}/${id}.png`)
          .put(uploadPhoto)
          .then(async res => {
            setFileURL(await res.ref.getDownloadURL().then(url => url));
            const data = {
              user_id: userId,
              name: `${id}.png`,
              url: fileURL,
            };
          });
      }
    },
    [currentUser, fileURL],
  );

  const adcPet = useCallback(
    async e => {
      e.preventDefault();
      const userId = currentUser.uid;
      const { petName } = e.target.elements;

      try {
        await database.collection('users').add({
          humanID: userId,
          name: petName.value,
          url: fileURL,
        });

        history.push('/');
      } catch (err) {
        console.log(err);
      }
    },
    [currentUser.uid, fileURL, history],
  );

  useEffect(() => {
    const petList = async () => {
      const petCollection = await database.collection('users').get();
      setListUsersPet(
        petCollection.docs.map(doc => {
          return doc.data();
        }),
      );
    };
    petList();
  }, []);

  const showDiv = () => {
    const divHidden = document.getElementById('hidden');
    if (divHidden != null) {
      if (divHidden.style.display === 'none') {
        divHidden.style.display = 'flex';
      } else {
        divHidden.style.display = 'none';
      }
    }
  };

  const changePasswordType = () => {
    if (showType.type === 'password') {
      setShowType({ type: 'text' });
    } else {
      setShowType({ type: 'password' });
    }
  };

  return (
    <Container>
      <Header>
        <Link to="/">
          <MdArrowBack className="backButton" />
        </Link>
        <h1>Meu perfil</h1>
        <button type="button" onClick={signOut}>
          <MdPowerSettingsNew />
        </button>
      </Header>

      <AvatarInput>
        {currentUser.photoURL != null ? (
          <img src={currentUser.photoURL} alt={currentUser.displayName} />
        ) : (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMSJVFa7B0cIx1c1c9egYBfaxDJlSo3HqX48VosilokU6Au9APnBqZj53WoOi1eltGdg&usqp=CAU"
            alt={currentUser.displayName}
          />
        )}
        <label htmlFor="avatar">
          <MdPhotoCamera />
          <input
            type="file"
            id="avatar"
            name="avatarURl"
            onChange={changeAvatar}
          />
        </label>
      </AvatarInput>
      <ContentUser>
        <form onSubmit={upProfile}>
          <span>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Nome"
              defaultValue={currentUser.displayName}
            />
          </span>
          <span>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="E-mail"
              defaultValue={currentUser.email}
            />
          </span>
          <button type="submit">Atualizar perfil</button>
        </form>

        <form onSubmit={changePassword}>
          <span>
            <input
              name="password"
              type={showType.type}
              className="inputPass"
              id="myInput"
              placeholder="Nova senha"
            />
            <button type="button" className="eye" onClick={changePasswordType}>
              <GiEyeTarget />
            </button>
          </span>
          <button type="submit">Alterar senha</button>
        </form>
      </ContentUser>

      <PetTitle>
        <h1>Pets</h1>
      </PetTitle>
      <ContainerPet>
        <div className="adcPets">
          <button type="button" onClick={showDiv}>
            <FcPlus />
          </button>
          <div className="hidden" id="hidden">
            <form onSubmit={adcPet}>
              <span>
                <GiHollowCat className="icon" />
                <input
                  type="text"
                  id="petName"
                  name="petName"
                  placeholder="Nome do pet:"
                />
              </span>

              <span>
                <MdPhotoCamera className="icon" />
                <input
                  type="file"
                  id="petPhoto"
                  name="petPhoto"
                  onChange={adcPhoto}
                />
              </span>
              <button type="submit">Adicionar Pet</button>
            </form>
          </div>
        </div>
        <PetList>
          <ol>
            {listUsersPet
              .filter(pet => pet.humanID === currentUser.uid)
              .map(pet => {
                return (
                  <Section key={pet.url}>
                    <li>
                      <span>
                        <img src={pet.url} alt={pet.name} />

                        <h1>{pet.name}</h1>

                        <button type="button" className="deleteButton">
                          <AiFillCloseSquare className="deleteIcon" />
                        </button>
                      </span>
                    </li>
                  </Section>
                );
              })}
          </ol>
        </PetList>
      </ContainerPet>
    </Container>
  );
};

export default Profile;
