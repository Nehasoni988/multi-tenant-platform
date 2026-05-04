import type { User } from "../types/userTypes";

export const localStorageKey = "canara-hsbc-assignment";

export const setLoggedinUser = (user: User): void => {
  localStorage.setItem(localStorageKey, JSON.stringify(user));
};

export const getLoggedinUser = (): User | null => {
  const loggedinUser = localStorage.getItem(localStorageKey);
  if (!loggedinUser) return null;

  return JSON.parse(loggedinUser);
};
