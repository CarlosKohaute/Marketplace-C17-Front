import { FormEvent } from "react";
import { api } from "../../../utils/api/api";
import { Form } from "../../atoms/form/form";

export interface CreateProductFormProps {
  handleControl: () => void;
  changeEditingMode: () => void;
}

export function CreateProductForm({
  handleControl,
  changeEditingMode,
}: CreateProductFormProps) {
  const inputsData = [
    {
      placeholder: "Product infos",
      name: "Product name",
      description: "Product description",
      price: 77,
      image: "Product image URL",
      categoryId: "Categorie ID of this product",
    },
  ];

  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      name: e.currentTarget.Name.value,
      description: e.currentTarget.description.value,
      price: e.currentTarget.price.value,
      image: e.currentTarget.image.value,
      categoryId: e.currentTarget.categoyId.value,
    };
    const response = await api.createProductList(data);
    console.log(response);
  }
  return (
    <section>
      <Form
        title={"Create product"}
        inputs={inputsData}
        onSubmit={HandleSubmit}
        cancel={changeEditingMode}
      />
    </section>
  );
}
