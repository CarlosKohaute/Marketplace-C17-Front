import { useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { Categorie } from "../../types/data";
import {
  CardInfoContainer,
} from "./styles";
import { useParams } from "react-router-dom";
import { HandleError } from "../../../utils/errors/handle-error-modal";
import ProductList from "../../molecules/products-list/products-list";
import { CategorieCardContainer } from "./styles";

export type CategorieCardProps = {
  categorie?: Categorie;
};
export function CategoriePage({ categorie }: CategorieCardProps) {
  const [categorieData, setCategorieData] = useState<Categorie>(
    categorie ?? ({} as Categorie)
  );

  async function getCategorieData(id: string) {
    const data = await api.getCategorieById(id);
    setCategorieData(data);
  }

  const { id } = useParams();

  useEffect(() => {
    if (!categorie) {
      console.log(id);
      if (!id) {
        HandleError({ message: "Categorie not found" });
      } else {
        getCategorieData(id);
      }
    }
  }, []);

  return (
    <CategorieCardContainer>
      <CardInfoContainer>
        <section>
          <span>Categorie:</span>
          <h2>{categorieData.name}</h2>
        </section>
      </CardInfoContainer>
      <ProductList selectedCategorie={categorieData.id} />
    </CategorieCardContainer>
  );
}