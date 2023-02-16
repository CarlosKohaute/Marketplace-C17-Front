import { Dispatch, FormEvent, SetStateAction } from "react";
import { Categorie } from "../../types/data";
import { Form, InputProps } from "../../atoms/form/form";
import { api } from "../../../utils/api/api";

export interface UpdateCategorieFormProps {
  handleControl: () => void;
  changeEditingMode: () => void;
  categorie: Categorie;
}

export function UpdateCategorieForm({
  handleControl,
  categorie,
  changeEditingMode,
}: UpdateCategorieFormProps) {
  const inputsData: InputProps[] = [
    {
      placeholder: "Product infos",
      name: "Product name",
      description: "Product description",
      price: 77,
      image: "Product image URL",
      categoryId: "Categorie ID of this product",
    }
    
  ];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      name: e.currentTarget.Name.value,
      description: e.currentTarget.description.value,
      price: e.currentTarget.price.value,
      image: e.currentTarget.image.value,
      categoryId: e.currentTarget.categoyId.value,
    
    }
      console.log({ ...data, id: categorie.id });

      await api.updateCategorie({ ...data, id: categorie.id });
  
      changeEditingMode();
      handleControl();
    }
  
    return (
      <section>
        <Form
          title={"Update Categorie"}
          inputs={inputsData}
          onSubmit={handleSubmit}
          cancel={changeEditingMode}
        />
      </section>
    );
  }