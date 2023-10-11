import { MobileMenu } from '@components/MobileMenu';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { useMobile } from '@hooks/window';
import { setMobileMenu } from '@store/reducers/app';
import { FC, MouseEvent, useEffect } from 'react';

import { BurgerButton, BurgerLine, MenuContainer } from './styled';

export const BurgerMenu: FC = () => {
  const { burger } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();
  const isMobile = useMobile();

  function handlerOnClickButton() {
    dispatch(setMobileMenu());
  }

  function handlerOnClickMenu(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  useEffect(() => {
    document.body.style.position = burger ? 'fixed' : 'static';
  }, [burger]);

  return (
    <MenuContainer onClick={handlerOnClickMenu}>
      <BurgerButton onClick={handlerOnClickButton}>
        <BurgerLine $isOpen={burger} />
        <BurgerLine $isOpen={burger} />
        <BurgerLine $isOpen={burger} />
      </BurgerButton>
      {isMobile && <MobileMenu isMenuOpened={burger} />}
    </MenuContainer>
  );
};
