import { IUserProfileData } from '@appTypes';
import { Genders } from '@appTypes/enums';
import { Popup } from '@components/Popup';
import { Select } from '@components/Select';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { firebaseDB } from '@services/database';
import { setProfilePopup, setSelectGender } from '@store/reducers/app';
import { setUserProfile } from '@store/reducers/user';
import { FC, FormEvent, useCallback, useMemo, useState } from 'react';

import { Input } from './Input';
import { Body, Container, Header, SaveButton, Title } from './styled';

export const ProfilePopup: FC = () => {
  const { gender, uid, name, telegram } = useSelectorTyped((store) => store.user);
  const [userName, setUserName] = useState(name ?? uid);
  const [userSurname, setUserSurname] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userTelegram, setUserTelegram] = useState(telegram ?? '');
  const getderList = useMemo(getGenderList, []);

  const [userGender, setUserGender] = useState(gender);
  const dispatch = useDispatchTyped();

  function getGenderList() {
    return Object.values(Genders);
  }

  const handlerOnChangeUsername = useCallback(
    (name: string) => {
      setUserName(name);
    },
    [setUserName],
  );

  const handlerOnChangeUserSurname = useCallback(
    (surname: string) => {
      setUserSurname(surname);
    },
    [setUserSurname],
  );

  const handlerOnChangeUserPass = useCallback(
    (pass: string) => {
      setUserPass(pass);
    },
    [setUserPass],
  );

  const handlerOnChangeUserTelegram = useCallback(
    (tg: string) => {
      setUserTelegram(tg);
    },
    [setUserTelegram],
  );

  const handlerOnClickUserGender = useCallback(
    (gender: string) => {
      setUserGender(gender as Genders);
      dispatch(setSelectGender(false));
    },
    [dispatch],
  );

  function handlerOnSubmit(e: FormEvent) {
    const userProfileData: IUserProfileData = {};

    if (userSurname && userName) {
      userProfileData['name'] = `${userName} ${userSurname}`;
    } else if (userName) {
      userProfileData['name'] = userName;
    } else if (userSurname) {
      userProfileData['name'] = userSurname;
    }

    if (userTelegram) userProfileData['telegram'] = userTelegram;
    if (userGender) userProfileData['gender'] = userGender;

    firebaseDB.updateUserData(userProfileData, uid);
    dispatch(setUserProfile(userProfileData));
    dispatch(setProfilePopup(false));
    e.preventDefault();
  }

  return (
    <Popup>
      <Container onSubmit={handlerOnSubmit}>
        <Header>
          <Title>Edit profile</Title>
          <SaveButton type='submit'>Save</SaveButton>
        </Header>
        <Body>
          <Input type='text' label='Name' value={userName} onChange={handlerOnChangeUsername} />
          <Input type='text' label='Surname' value={userSurname} onChange={handlerOnChangeUserSurname} />
          <Input type='password' label='Password' value={userPass} onChange={handlerOnChangeUserPass} />
          <Input type='text' label='Telegram' value={userTelegram} onChange={handlerOnChangeUserTelegram} />
          <Select
            type='gender'
            data={getderList}
            title={userGender ?? 'Ghoose the gender'}
            onClick={handlerOnClickUserGender}
          />
        </Body>
      </Container>
    </Popup>
  );
};
