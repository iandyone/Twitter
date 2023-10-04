import { AppRoutes } from '@appTypes/enums';
import googleIcon from '@assets/icons/google.svg';
import twitterIcon from '@assets/icons/twitter.svg';
import preview from '@assets/images/preview.png';
import { PageBody, PageWrapper } from '@styles';
import { FC, useMemo } from 'react';

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

export const SignInPage: FC = () => {
  const { title, subtitle, withEmailButton, withGoogleButton } = useMemo(getTextContent, []);

  function getTextContent() {
    const { title, subtitle, withEmailButton, withGoogleButton } = data;
    return { title, subtitle, withEmailButton, withGoogleButton };
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
              <Button to={AppRoutes.REGISTRATION}>
                <GoogleIcon src={googleIcon} />
                {withGoogleButton}
              </Button>
              <Button to={AppRoutes.REGISTRATION}>{withEmailButton}</Button>
            </Buttons>
            <Links>
              <Text>
                By singing up you agree to the <Link to={AppRoutes.HOME}>Terms of Service</Link> and
                <Link to={AppRoutes.HOME}> Privacy Policy</Link>, including{' '}
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
