export const sanitizeNumeric = (inputString: string): string => {
  return inputString.replace(/\D+/g, '');
};
