export const dateFormat = (
  year: number | string,
  month: number | string,
  day: number | string,
  format: string
) => {
  return `${year}${format}${Number(month) < 10 ? `0${month}` : month}${format}${
    Number(day) < 10 ? `0${day}` : day
  }`;
};
