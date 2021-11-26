export const emailValidator = (email: string): boolean => {
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/gi;
  return regex.test(email);
};
