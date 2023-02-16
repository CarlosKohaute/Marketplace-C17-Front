export type LoginRequest = {
  email: string;
  password: string;
};

export type createProductPayload = {
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
};
export type UpdateCategoriePayload = {
  id: string;
  name?: string;
  products?: string[];
};

export type UserPayload = {
  name: string;
  email: string;
  password: string;
  cpf: string;
  image: string
};