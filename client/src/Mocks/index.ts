import * as T from "../components/types/index";
import s22 from "../assets/icons/s22.png"

export const MockedProducts: T.Product[] = [
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    name: "S22Ultra",
    description: `Smartphone Samsung Galaxy S22 Ultra 256GB 5G 12GB RAM Tela 6,8" Câm. Traseira 108+10+12+10MP Frontal 40MP Verde`,
    price: 5.0,
    image: s22,
    categoryId: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    name: "S22Ultra",
    description: `Smartphone Samsung Galaxy S22 Ultra 256GB 5G 12GB RAM Tela 6,8" Câm. Traseira 108+10+12+10MP Frontal 40MP Verde`,
    price: 5.0,
    image: s22,
    categoryId: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
export const MockedFavorites: T.Favorite[] = [
  {
    id: "35abf7f1-c999-4bcf-abfb-a95cb483a2b9",
    productName: "S22 Ultra",
    userId: "6d6cf9d2-cf94-4b90-a53b-973d92501e02",
    favoritedAt: new Date(),
  },
  {
    id: "9a5a8f0e-43aa-4d77-8afd-e3a95deddc81",
    productName: "S22 Ultra",
    userId: "6d6cf9d2-cf94-4b90-a53b-973d92501e02",
    favoritedAt: new Date(),
  },
];

export const MockedCategories: T.Category[] = [
  {
    id: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    name: "Celulares",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
