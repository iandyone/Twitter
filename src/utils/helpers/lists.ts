import { Months } from '@appTypes/enums';

import { getDaysAmountInAMonth } from './date';

export function getLikesList(likes: string[], uid: string) {
  if (!likes) {
    return [uid];
  }

  const isAledyLikes = likes.includes(uid);

  return isAledyLikes ? likes.filter((id) => id !== uid) : [...likes, uid];
}

export function setPageScroll(flag: boolean) {
  document.body.style.position = flag ? 'static' : 'fixed';
}

export function getSelectLists(month: string) {
  const legalAge = 18;
  const currentYear = new Date().getFullYear();

  const daysList = [];
  const yearList = [];
  const monthList = Object.keys(Months).filter((month) => month.length > 2);
  const daysInAMonth = getDaysAmountInAMonth(new Date(currentYear, Months[month as keyof typeof Months]));

  for (let day = 1; day <= daysInAMonth; ++day) {
    daysList.push(String(day));
  }

  for (let year = currentYear - legalAge; year >= 1950; --year) {
    yearList.push(String(year));
  }

  return { daysList, monthList, yearList };
}
