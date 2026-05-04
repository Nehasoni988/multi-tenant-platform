import type { Product } from "./productTypes";

export interface User {
  id: string | number;
  name: string;
  role: number;
  products: Product[];
}
