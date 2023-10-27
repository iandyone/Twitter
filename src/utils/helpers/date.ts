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

export function getFormattedPostDate(timestamp: number) {
  const now = new Date().getTime();
  const timeDifference = now - timestamp;

  const millisecondsInMinute = 60 * 1000;
  const millisecondsInHour = 60 * millisecondsInMinute;
  const millisecondsInDay = 24 * millisecondsInHour;

  if (timeDifference >= millisecondsInDay) {
    const date = new Date(timestamp);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    return `${month} ${day}`;
  } else if (timeDifference >= millisecondsInHour) {
    const hours = Math.floor(timeDifference / millisecondsInHour);
    return `${hours}h`;
  } else if (timeDifference >= millisecondsInMinute) {
    const minutes = Math.floor(timeDifference / millisecondsInMinute);
    return `${minutes}m`;
  } else {
    return 'now';
  }
}
