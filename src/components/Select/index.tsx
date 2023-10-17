import { ArrowIcon } from '@components/SVG/Arrow';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { setSelectDay, setSelectGender, setSelectMonth, setSelectYear } from '@store/reducers/app';
import { FC, memo, useMemo } from 'react';

import { Option } from './Option';
import { Container, IconContainer, Options, Title, TitleContainer } from './styled';
import { ISelectComponentProps } from './types';

const SelectComponent: FC<ISelectComponentProps> = ({ title, data, onClick, isValid, type, testID }) => {
  const { selectDay, selectMonth, selectYear, selectGender } = useSelectorTyped((store) => store.app);
  const { action, isVisible } = useMemo(getControls, [type, getAction, getControls]);
  const dispatch = useDispatchTyped();

  function handlerOnClick() {
    dispatch(action());
  }

  function getControls() {
    const action = getAction();
    const isVisible = getSelectActivity();

    return { action, isVisible };
  }

  function getAction() {
    const actions = {
      day: setSelectDay,
      month: setSelectMonth,
      year: setSelectYear,
      gender: setSelectGender,
    };

    return actions[type];
  }

  function getSelectActivity() {
    const selectStatuses = {
      day: selectDay,
      month: selectMonth,
      year: selectYear,
      gender: selectGender,
    };

    return selectStatuses[type];
  }

  function handlerOnClickOption(option: string) {
    onClick(option);
  }

  return (
    <Container>
      <TitleContainer>
        <Title $isValid={isValid} onClick={handlerOnClick} data-testid={testID}>
          {title}
        </Title>
        <IconContainer $isActive={isVisible}>
          <ArrowIcon />
        </IconContainer>
      </TitleContainer>
      {isVisible && (
        <Options>
          {data.map((option) => (
            <Option
              option={option}
              handler={handlerOnClickOption}
              key={option}
              testID={`select-option-${option}`}
            />
          ))}
        </Options>
      )}
    </Container>
  );
};

export const Select = memo(SelectComponent);
