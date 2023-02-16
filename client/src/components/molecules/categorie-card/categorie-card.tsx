import { api } from "../../../utils/api/api";
import { UpdateCategorieForm } from "../../celules/update-categorie-form/update-categorie-form";

import { Categorie } from "../../types/data";
import ProductList from "../products-list/products-list";
import { CardInfoContainer, CategorieCardContainer, CategorieCardOptionsContainer } from "./styles";

export type CategorieCardProps = {
  categorie: Categorie;
  changeEditingMode: () => void;
  handleControl: () => void;
  editingMode: boolean;
};
export function CategorieCard({
  categorie,
  changeEditingMode,
  editingMode,
  handleControl,
}: CategorieCardProps) {
  async function handleDeleteCategorie() {
    await api.deleteCategorie(categorie.id ?? "");
    handleControl();
  }

  return (
    <CategorieCardContainer>
      <CardInfoContainer>
        <section>
          <span>Categorie:</span>
          <h2>{categorie?.name}</h2>
          </section>
          </CardInfoContainer>
          <CategorieCardOptionsContainer>
          <button
            onClick={() => {
              changeEditingMode();
            }}
          >
            Edit this categorie
          </button>
          <button onClick={handleDeleteCategorie}>Delete this categorie</button>
          {editingMode ? (
            <UpdateCategorieForm
              handleControl={handleControl}
              categorie={categorie}
              changeEditingMode={changeEditingMode}
            />
          ): <ProductList selectedCategorie={undefined}/>}
        </CategorieCardOptionsContainer>
        </CategorieCardContainer>
  )}
