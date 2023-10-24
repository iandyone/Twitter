import { ISideMenuOption } from '@appTypes';
import { useFillColor } from '@hooks/animations';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, OptionTitle } from './styled';

const OptionComponent: FC<ISideMenuOption> = ({ path, title, onClick, testID, active, element: Icon }) => {
  const navigate = useNavigate();
  const fillColor = useFillColor();

  function handerOnClick() {
    navigate(path);
    onClick();
  }

  return (
    <Container onClick={handerOnClick} data-testid={testID}>
      <Icon fill={fillColor} />
      <OptionTitle $isActive={active}>{title}</OptionTitle>
    </Container>
  );
};

export const Option = memo(OptionComponent);
