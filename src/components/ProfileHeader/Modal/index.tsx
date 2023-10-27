import { IUserProfileData } from '@appTypes';
import { Genders } from '@appTypes/enums';
import { Popup } from '@components/Popup';
import { Select } from '@components/Select';
import { NAME_MAX_LENGTH } from '@constants';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { firebaseDB } from '@services/database';
import { setProfilePopup, setSelectGender } from '@store/reducers/app';
import { setUserProfile } from '@store/reducers/user';
import { getPasswordValidation } from '@utils/helpers/validators';
import { FC, FormEvent, useCallback, useState } from 'react';

import { data } from './config';
import { Input } from './Input';
import { Body, Container, Header, Label, SaveButton, Title } from './styled';

const { buttonSubmitText, title } = data;
export const ProfilePopup: FC = () => {
  const { gender, uid, name, telegram } = useSelectorTyped((store) => store.user);
  const [userName, setUserName] = useState(name ?? uid);
  const [userSurname, setUserSurname] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userTelegram, setUserTelegram] = useState(telegram ?? '');
  const [isNewPassValid, setIsNewPassValid] = useState(true);

  const [userGender, setUserGender] = useState(gender);
  const dispatch = useDispatchTyped();

  const handlerOnChangeUsername = useCallback((name: string) => {
    setUserName(name);
  }, []);

  const handlerOnChangeUserSurname = useCallback(
    (surname: string) => {
      setUserSurname(surname);
    },
    [setUserSurname],
  );

  const handlerOnChangeUserPass = useCallback(
    (pass: string) => {
      setUserPass(pass);
      setIsNewPassValid(true);
    },
    [setUserPass],
  );

  const handlerOnChangeUserTelegram = useCallback((tg: string) => {
    setUserTelegram(tg);
  }, []);

  const handlerOnClickUserGender = useCallback((gender: string) => {
    setUserGender(gender as Genders);
    dispatch(setSelectGender(false));
  }, []);

  async function handlerOnSubmit(e: FormEvent) {
    e.preventDefault();
    const userProfileData: IUserProfileData = {};

    if (userSurname && userName) {
      userProfileData['name'] = `${userName} ${userSurname}`;
    } else if (userName) {
      userProfileData['name'] = userName;
    } else if (userSurname) {
      userProfileData['name'] = userSurname;
    }

    if (userPass) {
      const isPasswordValid = getPasswordValidation(userPass);

      if (isPasswordValid) {
        firebaseDB.updateUserPassword(userPass);
      } else {
        setIsNewPassValid(false);
        return;
      }
    }
    if (userTelegram) userProfileData['telegram'] = userTelegram;
    if (userGender) userProfileData['gender'] = userGender;

    firebaseDB.updateUserData(userProfileData, uid);
    dispatch(setUserProfile(userProfileData));
    dispatch(setProfilePopup(false));
  }

  return (
    <Popup>
      <Container onSubmit={handlerOnSubmit} data-testid='profile-popup'>
        <Header>
          <Title>{title}</Title>
          <SaveButton type='submit' data-testid='profile-button-save'>
            {buttonSubmitText}
          </SaveButton>
        </Header>
        <Body>
          <Input
            type='text'
            label='Name'
            value={userName.slice(0, NAME_MAX_LENGTH)}
            onChange={handlerOnChangeUsername}
            testID='profile-input-name'
          />
          <Input
            type='text'
            label='Surname'
            value={userSurname}
            onChange={handlerOnChangeUserSurname}
            testID='profile-input-surname'
          />
          <Input
            type='password'
            label='Password'
            value={userPass}
            onChange={handlerOnChangeUserPass}
            error={!isNewPassValid}
            testID='profile-input-password'
          />
          <Input
            type='text'
            label='Telegram'
            value={userTelegram}
            onChange={handlerOnChangeUserTelegram}
            testID='profile-input-telegram'
          />
          <>
            <Label>Gender</Label>
            <Select
              type='gender'
              data={Object.values(Genders)}
              title={userGender ?? 'Ghoose the gender'}
              onClick={handlerOnClickUserGender}
              testID='profile-select-gender'
            />
          </>
        </Body>
      </Container>
    </Popup>
  );
};
