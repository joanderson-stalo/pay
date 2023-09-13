export const convertDateFormat = (inputDate: string): string => {
  const parts = inputDate.split('/');
  if (parts.length !== 3) {
    throw new Error('Invalid');
  }

  const [day, month, year] = parts;
  const newDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  return newDate;
};
