import { IUser } from '@appTypes';
import { AppRoutes } from '@appTypes/enums';
import googleIcon from '@assets/icons/google.svg';
import twitterIcon from '@assets/icons/twitter.svg';
import preview from '@assets/images/preview.png';
import { useDispatchTyped } from '@hooks/redux';
import { logoutUser, setUser } from '@store/reducers/user';
import { PageBody, PageWrapper } from '@styles';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FC, MouseEvent, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { data, footerLinks } from './config';
import {
  Banner,
  Button,
  Buttons,
  Content,
  Footer,
  FooterLink,
  GoogleIcon,
  Image,
  Link,
  Links,
  Main,
  Subtitle,
  Text,
  Title,
  TwitterIcon,
} from './styled';

export const SignIn: FC = () => {
  const { title, subtitle, withEmailButton, withGoogleButton } = useMemo(getTextContent, []);
  const dispatch = useDispatchTyped();
  const navigate = useNavigate();

  function getTextContent() {
    const { title, subtitle, withEmailButton, withGoogleButton } = data;
    return { title, subtitle, withEmailButton, withGoogleButton };
  }

  async function handlerOnClickGoogle(e: MouseEvent<HTMLElement>) {
    e.preventDefault();

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const { uid, email } = result.user;

        const userData: IUser = {
          uid: uid,
          email: email,
          accessToken: credential.accessToken,
        };
        dispatch(setUser(userData));
        navigate(AppRoutes.FEED);
      })
      .catch(() => {
        dispatch(logoutUser());
      });
  }

  return (
    <PageWrapper>
      <PageBody>
        <Main>
          <Banner>
            <Image src={preview}></Image>
          </Banner>
          <Content>
            <TwitterIcon src={twitterIcon} />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Buttons>
              <Button to={AppRoutes.REGISTRATION} onClick={handlerOnClickGoogle}>
                <GoogleIcon src={googleIcon} />
                {withGoogleButton}
              </Button>
              <Button to={AppRoutes.REGISTRATION}>{withEmailButton}</Button>
            </Buttons>
            <Links>
              <Text>
                By singing up you agree to the <Link to={AppRoutes.HOME}>Terms of Service</Link> and
                <Link to={AppRoutes.HOME}> Privacy Policy</Link>, including
                <Link to={AppRoutes.HOME}>Cookie Use</Link>.
              </Text>
              <Text>
                Already have an account? <Link to={AppRoutes.LOGIN}>Log in</Link>
              </Text>
            </Links>
          </Content>
        </Main>
        <Footer>
          {footerLinks.map(({ to, text }) => (
            <FooterLink to={to} key={text}>
              {text}
            </FooterLink>
          ))}
        </Footer>
      </PageBody>
    </PageWrapper>
  );
};
