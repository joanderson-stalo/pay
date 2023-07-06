export function validateDataCriacao(value: string): boolean {
  if (typeof value !== 'string') {
    return false;
  }

  const dateParts = value.split('/');

  if (dateParts.length !== 3) {
    return false;
  }

  const day = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]);
  const year = parseInt(dateParts[2]);

  const isValidDate =
    !isNaN(day) &&
    !isNaN(month) &&
    !isNaN(year) &&
    day >= 1 &&
    day <= 31 &&
    month >= 1 &&
    month <= 12 &&
    year >= 1900 &&
    year <= new Date().getFullYear();

  return isValidDate;
}
