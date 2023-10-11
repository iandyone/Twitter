import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { setSelectDay, setSelectMonth, setSelectYear } from '@store/reducers/app';
import { FC, memo, useMemo } from 'react';

import { Option } from './Option';
import { Container, Options, Title } from './styled';
import { ISelectComponentProps } from './types';

const SelectComponent: FC<ISelectComponentProps> = ({ title, data, onClick, isValid, type }) => {
  const { selectDay, selectMonth, selectYear } = useSelectorTyped((store) => store.app);
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
    };

    return actions[type];
  }

  function getSelectActivity() {
    const selectStatuses = {
      day: selectDay,
      month: selectMonth,
      year: selectYear,
    };

    return selectStatuses[type];
  }

  function handlerOnClickOption(option: string) {
    onClick(option);
  }

  return (
    <Container>
      <Title $isActive={isVisible} $isValid={isValid} onClick={handlerOnClick}>
        {title}
      </Title>
      {isVisible && (
        <Options>
          {data.map((option) => (
            <Option option={option} handler={handlerOnClickOption} key={option} />
          ))}
        </Options>
      )}
    </Container>
  );
};

export const Select = memo(SelectComponent);
