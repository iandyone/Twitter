import { IFooterLink } from '@appTypes';
import { AppRoutes } from '@constants';

const { HOME } = AppRoutes;

export const data = {
  title: 'Happening now',
  subtitle: 'Join Twitter today',
  withGoogleButton: 'Sign up with Google',
  withEmailButton: 'Sign up with email',
};

export const footerLinks: IFooterLink[] = [
  { text: 'About', to: HOME },
  { text: 'Help Center', to: HOME },
  { text: 'Terms of Service', to: HOME },
  { text: 'Privacy Policy', to: HOME },
  { text: 'Cookie Policy', to: HOME },
  { text: 'Ads info', to: HOME },
  { text: 'Blog', to: HOME },
  { text: 'Status', to: HOME },
  { text: 'Carrres', to: HOME },
  { text: 'Brand Resources', to: HOME },
  { text: 'Advertsing', to: HOME },
  { text: 'Marketing', to: HOME },
  { text: 'Twitter for Business', to: HOME },
  { text: 'Developers', to: HOME },
  { text: 'Directory', to: HOME },
  { text: 'Settings', to: HOME },
  { text: `© ${new Date().getFullYear()} Twitter, Inc.`, to: HOME },
];
