import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { Card } from "../../atoms/card/card";
import { Form, InputProps } from "../../atoms/form/form";
import { Select } from "../../atoms/select/select";
import { createProductForm } from "../../molecules/create-product/create-product-form";
import ProductList from "../../molecules/products-list/products-list";

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
  const [control, setControl] = useState<boolean>(false);

  async function findCategories() {
    const data = await api.getCategories();
    setCategories(data);
  }

  function getSelectedCategorie(value: string) {
    setSelectedCategorie(value);
  }

  function handleControl() {
    setControl(!control);
  }

  useEffect(() => {
    findCategories();
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
      <ProductList selectedCategorie={selectedCategorie}/>
    </div>
  );
}
