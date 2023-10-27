import { Months } from '@appTypes/enums';
import { Month } from '@appTypes/types';
import { USER_MAX_BORN_YEAR } from '@constants';

import { getDaysAmountInAMonth } from './date';

export function getSelectLists(month: string) {
  const legalAge = 18;
  const currentYear = new Date().getFullYear();

  const daysList = [];
  const yearList = [];
  const monthList = Object.keys(Months).filter((month) => month.length > 2);
  const daysInAMonth = getDaysAmountInAMonth(new Date(currentYear, Months[month as Month]));

  for (let day = 1; day <= daysInAMonth; ++day) {
    daysList.push(String(day));
  }

  for (let year = currentYear - legalAge; year >= USER_MAX_BORN_YEAR; --year) {
    yearList.push(String(year));
  }

  return { daysList, monthList, yearList };
}

export function setPageScroll(flag: boolean) {
  document.body.style.position = flag ? 'static' : 'fixed';
}
