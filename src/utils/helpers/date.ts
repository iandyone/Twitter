export function getDaysAmountInAMonth(date: Date) {
  const { month, year } = getDateData(date);
  const nextMonth = new Date(year, month + 1);

  nextMonth.setMinutes(-1);

  return nextMonth.getDate();
}

export function getDateData(dateObject: Date) {
  const day = dateObject.getDay();
  const month = dateObject.getMonth();
  const year = dateObject.getFullYear();
  const date = dateObject.getDate();

  return { day, month, year, date };
}
