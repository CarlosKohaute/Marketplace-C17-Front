export type User = {
  id: string;
  name: string;
  cpf: number;
  email: string;
  imageURL: string;
  updatedAt: string | null;
  createdAt: string | null;
  favorites: string | null;
};

export type Categorie = {
  theme: string | undefined;
  id: string;
  name: string;
  products:string[]
};

export type ProductPayload = {
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
};