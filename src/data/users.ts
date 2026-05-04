import { PRODUCTS } from "./products";
import { ROLES } from "./roles";

export const USERS = [
  {
    id: 1,
    name: "Admin",
    role: ROLES.ADMIN,
    products: [PRODUCTS[0], PRODUCTS[1], PRODUCTS[2]],
  },
  {
    id: 2,
    name: "User-1",
    role: ROLES.USER,
    products: [PRODUCTS[0], PRODUCTS[1]],
  },
  {
    id: 3,
    name: "User-2",
    role: ROLES.USER,
    products: [PRODUCTS[2]],
  },
];
