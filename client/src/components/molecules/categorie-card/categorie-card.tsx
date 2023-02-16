import { api } from "../../../utils/api/api";
import { UpdateCategorieForm } from "../../celules/update-categorie-form/update-categorie-form";

import { Categorie } from "../../types/data";

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
    <div>
      <h2>{categorie?.name}</h2>
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
      ) : (
        <CreateCategorieForm handleControl={handleControl} />
      )}
    </div>
  );
}
