import { api } from "../../../utils/api/api";
import { UpdateCategorieForm } from "../../celules/update-categorie-form/update-categorie-form";

import { Categorie } from "../../types/data";
import ProductList from "../products-list/products-list";
import {
  CardInfoContainer,
  CategorieCardContainer,
  CategorieCardOptionsContainer,
} from "./styles";

export type CategorieCardProps = {
  categorie: Categorie;
};
  export function CategorieCard({ categorie }: CategorieCardProps) {
    return (
      <CategorieCardContainer>
        <CardInfoContainer>
          <section>
            <span>Categorie:</span>
            <h2>{categorie?.name}</h2>
          </section>
        </CardInfoContainer>
      </CategorieCardContainer>
    );
  }

