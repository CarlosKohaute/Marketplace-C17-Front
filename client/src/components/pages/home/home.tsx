import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { Card } from "../../atoms/card/card";
import { Form, InputProps } from "../../atoms/form/form";
import { Select } from "../../atoms/select/select";

export type Categorie = {
  id: string;
  name: string;
};

export type productPayload = {
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
};

export function Home() {
  const [categories, setCategories] = useState<Categorie[]>([]);
  const [selectedCategorie, setSelectedCategorie] = useState<
    string | undefined
  >();

  const [products, setProducts] = useState<productPayload[]>([]);

  const [control, setControl] = useState<boolean>(false);


  async function findCategories() {
    const data = await api.getCategories();
    setCategories(data);
    const response = await api.createProductList(data);
  }
  function getSelectedCategorie(value: string) {
    setSelectedCategorie(value);
  }



  useEffect(() => {
    findCategories();
  }, []);

  useEffect(() => {
    findProducts();
  }, [control]);

  return (
    <div>
      <h2>Home</h2>
      <Select
        options={categories.map((categories) => {
          return { name: categories.name, value: categories.id };
        })}
        selectedOption={getSelectedCategorie}
      />
      <createProductForm/>
      <h2>Products of this categorie</h2>
 
    </div>
  );
}
