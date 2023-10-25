import { Layout } from '@components/Layout';
import { AppRoutes } from '@constants';
import { FeedPage } from '@pages/feed';
import { HomePage } from '@pages/home';
import { LoginPage } from '@pages/login';
import { ProfilePage } from '@pages/profile';
import { SignInPage } from '@pages/signIn';
import { SignUpPage } from '@pages/signUp';

const { HOME, LOGIN, REGISTRATION, SIGNIN, UNKNOWN, page } = AppRoutes;
const { FEED, PROFILE } = page;

export const routes = [
  { path: HOME, element: <HomePage /> },
  { path: SIGNIN, element: <SignInPage /> },
  { path: LOGIN, element: <LoginPage /> },
  { path: REGISTRATION, element: <SignUpPage /> },
  {
    path: '/page',
    element: <Layout />,
    children: [
      { path: FEED, element: <FeedPage /> },
      { path: PROFILE, element: <ProfilePage /> },
    ],
  },
  { path: UNKNOWN, element: <HomePage /> },
];
