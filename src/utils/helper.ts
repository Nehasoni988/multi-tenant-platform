import type { User } from "../types/userTypes";

export const localStorageKeyForLoggedInUser =
  "canara-hsbc-assignment-loggedin-user";
export const localStorageKeyForUsers = "canara-hsbc-assignment-users";

export const setLoggedinUserToLS = (userId: string | number): void => {
  const users = getUsersFromLS();
  const user = users?.find((u) => u.id === userId) || "";
  localStorage.setItem(localStorageKeyForLoggedInUser, JSON.stringify(user));
};

export const getLoggedinUserFromLS = (): User | null => {
  const loggedinUser = localStorage.getItem(localStorageKeyForLoggedInUser);
  if (!loggedinUser) return null;

  return JSON.parse(loggedinUser);
};

export const setUsersToLS = (users: User[]): void => {
  localStorage.setItem(localStorageKeyForUsers, JSON.stringify(users));
};

export const getUsersFromLS = (): User[] | null => {
  const users = localStorage.getItem(localStorageKeyForUsers);
  if (!users?.length) return null;

  return JSON.parse(users);
};
