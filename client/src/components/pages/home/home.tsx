import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { Card } from "../../atoms/card/card";
import { Form, InputProps } from "../../atoms/form/form";
import { Select } from "../../atoms/select/select";
import { CategorieCard } from "../../molecules/categorie-card/categorie-card";
import ProductList from "../../molecules/products-list/products-list";
import { Categorie } from "../../types/data";


export function Home() {
  const [categories, setCategories] = useState<Categorie[]>([]);
  const [selectedCategorie, setSelectedCategorie] = useState<
    string | undefined
  >();
  const [control, setControl] = useState<boolean>(false);
  const [isEditingMode, setIsEditingMode] = useState<boolean>(false);

   const categorieSelectedData = categories.find(
    (categorie) => categorie.id == selectedCategorie
  );
  console.log(categories);
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

  function handleEditMode() {
    setIsEditingMode(!isEditingMode);
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
      <div>
      {selectedCategorie && (
          <CategorieCard
            categorie={categorieSelectedData ?? ({} as Categorie)}
            changeEditingMode={handleEditMode}
            handleControl={handleControl}
            editingMode={isEditingMode}
          />
        )}
      </div>
      <ProductList selectedCategorie={selectedCategorie} />
    </div>
  );
}

