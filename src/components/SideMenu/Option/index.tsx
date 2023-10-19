import { ISideMenuOption } from '@appTypes';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, OptionTitle } from './styled';

const OptionComponent: FC<ISideMenuOption> = ({ path, title, onClick, testID, active, element: Icon }) => {
  const navigate = useNavigate();

  function handerOnClick() {
    navigate(path);
    onClick();
  }

  return (
    <Container onClick={handerOnClick} data-testid={testID}>
      <Icon isActive={false} />
      <OptionTitle $isActive={active}>{title}</OptionTitle>
    </Container>
  );
};

export const Option = memo(OptionComponent);
