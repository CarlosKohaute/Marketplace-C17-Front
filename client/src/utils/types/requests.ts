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