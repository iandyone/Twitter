import { ISideMenuOption } from '@appTypes';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, OptionIcon, OptionTitle } from './styled';

const OptionComponent: FC<ISideMenuOption> = ({ icon, path, title, onClick }) => {
  const navigate = useNavigate();

  function handerOnClick() {
    navigate(path);
    onClick();
  }

  return (
    <Container onClick={handerOnClick}>
      <OptionIcon src={icon} />
      <OptionTitle>{title}</OptionTitle>
    </Container>
  );
};

export const Option = memo(OptionComponent);
