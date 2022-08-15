import * as format from 'date-format';
const parseFormatDateString = (date, formatter) => {
  return format(formatter, date);
};
const getFirstDate = date => {
  date.setDate(1);
  return date;
};
const getLastDate = date => {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    date.setDate(31);
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    date.setDate(30);
  } else if (year % 4 === 0) {
    date.setDate(29);
  } else {
    date.setDate(28);
  }
  return date;
};
export { parseFormatDateString, getFirstDate, getLastDate };
