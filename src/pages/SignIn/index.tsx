import googleIcon from '@assets/icons/google.svg';
import twitterIcon from '@assets/icons/twitter.svg';
import preview from '@assets/images/preview.png';
import { PageWrapper } from '@styles';
import { FC, useMemo } from 'react';

import { data, footerLinks } from './config';
import {
  Banner,
  Body,
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
      <Body>
        <Main>
          <Banner>
            <Image src={preview}></Image>
          </Banner>
          <Content>
            <TwitterIcon src={twitterIcon} />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Buttons>
              <Button>
                <GoogleIcon src={googleIcon} />
                {withGoogleButton}
              </Button>
              <Button>{withEmailButton}</Button>
            </Buttons>
            <Links>
              <Text>
                By singing up you agree to the <Link href='/'>Terms of Service</Link> and
                <Link href='/'> Privacy Policy</Link>, including <Link href='/'>Cookie Use</Link>.
              </Text>
              <Text>
                Already have an account? <Link href='/'>Log in</Link>
              </Text>
            </Links>
          </Content>
        </Main>
        <Footer>
          {footerLinks.map(({ href, text }) => (
            <FooterLink href={href} key={text}>
              {text}
            </FooterLink>
          ))}
        </Footer>
      </Body>
    </PageWrapper>
  );
};
