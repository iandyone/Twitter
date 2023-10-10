import { IPost } from '@appTypes';

export const PHONE_MASK = '+375';
export const USER_ELEMENT_HEIGHT = '55px';
export const DEFAULT_GAP = '20px';

export const colors = {
  black: '#000',
  white: '#fff',
  blue: '#1da1f2',
  gray: '#e4eaed',
  gray2: '#b3b8bb',
  gray3: '#eff3f4',
  gray4: '#536471',
  red: 'red',
  green: 'green',
};

export const AppRoutes = {
  HOME: '/',
  SIGNIN: '/signin',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  page: {
    FEED: '/page/feed',
    PROFILE: '/page/profile',
  },
};

export const mockPosts: IPost[] = [
  {
    user: { uid: 'Andrei', email: 'iandyone@yahoo.com' },
    body: 'some post content some post content some post content some post content some post content some post content some post content',
    date: new Date(),
    likes: 3,
  },
  {
    user: { uid: 'Julia', email: 'juliait16@gmail.com' },
    body: 'some post content some post content some post content some post content some post content some post content some post content',
    date: new Date(),
    likes: 7,
  },
  {
    user: { uid: 'Vladislav', email: 'fidrik.gmail.com' },
    body: 'some post content some post content some post content some post content some post content some post content some post content',
    date: new Date(),
    likes: 3,
  },
  {
    user: { uid: 'Dasha', email: 'DarioIIIka@mail.ru' },
    body: 'some post content some post content some post content some post content some post content some post content some post content',
    date: new Date(),
    likes: 0,
  },
];
