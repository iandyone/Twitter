import { IUserProfileData } from '@appTypes';
import { Popup } from '@components/Popup';
import { DEFAULT_GAP } from '@constants/variables';
import { useDispatchTyped } from '@hooks/redux';
import { setUserProfile } from '@store/reducers/user';
import { ButtonTemplate, TitleTemplate } from '@styles';
import { FC, FormEvent, useCallback, useState } from 'react';
import styled from 'styled-components';

import { Input } from './Input';

export const Container = styled.article`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${DEFAULT_GAP};
`;

export const Title = styled(TitleTemplate)`
  font-size: 24px;
  text-align: center;
`;

export const SaveButton = styled(ButtonTemplate)`
  width: 68px;
  height: 32px;
`;

export const Body = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ProfilePopup: FC = () => {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userTelegram, setUserTelegram] = useState('');

  const dispatch = useDispatchTyped();

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

  function handlerOnSubmit(e: FormEvent) {
    const userProfileData: IUserProfileData = {
      name: userName,
      surname: userSurname,
      telegram: userTelegram,
    };

    dispatch(setUserProfile(userProfileData));
    e.preventDefault();
  }

  return (
    <Popup>
      <Container>
        <Header>
          <Title>Edit profile</Title>
          <SaveButton>Save</SaveButton>
        </Header>
        <Body onSubmit={handlerOnSubmit}>
          <Input type='text' label='Name' value={userName} onChange={handlerOnChangeUsername} />
          <Input type='text' label='Surname' value={userSurname} onChange={handlerOnChangeUserSurname} />
          <Input type='password' label='Password' value={userPass} onChange={handlerOnChangeUserPass} />
          <Input type='text' label='Telegram' value={userTelegram} onChange={handlerOnChangeUserTelegram} />
        </Body>
      </Container>
    </Popup>
  );
};
