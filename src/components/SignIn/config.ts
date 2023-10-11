import { IFooterLink } from '@appTypes';
import { AppRoutes } from '@constants/variables';

export const data = {
  title: 'Happening now',
  subtitle: 'Join Twitter today',
  withGoogleButton: 'Sign up with Google',
  withEmailButton: 'Sign up with email',
};

export const footerLinks: IFooterLink[] = [
  { text: 'About', to: AppRoutes.HOME },
  { text: 'Help Center', to: AppRoutes.HOME },
  { text: 'Terms of Service', to: AppRoutes.HOME },
  { text: 'Privacy Policy', to: AppRoutes.HOME },
  { text: 'Cookie Policy', to: AppRoutes.HOME },
  { text: 'Ads info', to: AppRoutes.HOME },
  { text: 'Blog', to: AppRoutes.HOME },
  { text: 'Status', to: AppRoutes.HOME },
  { text: 'Carrres', to: AppRoutes.HOME },
  { text: 'Brand Resources', to: AppRoutes.HOME },
  { text: 'Advertsing', to: AppRoutes.HOME },
  { text: 'Marketing', to: AppRoutes.HOME },
  { text: 'Twitter for Business', to: AppRoutes.HOME },
  { text: 'Developers', to: AppRoutes.HOME },
  { text: 'Directory', to: AppRoutes.HOME },
  { text: 'Settings', to: AppRoutes.HOME },
  { text: '© 2021 Twitter, Inc.', to: AppRoutes.HOME },
];
