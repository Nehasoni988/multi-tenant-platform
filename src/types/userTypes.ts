export interface User {
  id: string | number;
  name: string;
  role: number;
  products: (string | number)[];
}
