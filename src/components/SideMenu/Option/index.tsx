import { ISideMenuOption } from '@appTypes';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, OptionIcon, OptionTitle } from './styled';

export const Option: FC<ISideMenuOption> = ({ icon, path, title }) => {
  const navigate = useNavigate();

  function handerOnClick() {
    navigate(path);
  }

  return (
    <Container onClick={handerOnClick}>
      <OptionIcon src={icon} />
      <OptionTitle>{title}</OptionTitle>
    </Container>
  );
};
