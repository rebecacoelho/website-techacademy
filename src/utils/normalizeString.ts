export const normalizeString = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ''); 
};