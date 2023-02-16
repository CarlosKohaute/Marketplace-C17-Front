import { Categorie } from "../../types/data";
import { CreateProductForm } from "../../celules/create-product/create-product-form";
import { UpdateCategorieForm } from "../../celules/update-categorie-form/update-categorie-form";


type MutationCategorieProps = {
  selectedCategorie?: Categorie;
  handleControl: () => void;
};

export function MutationCategorie({
  selectedCategorie,
  handleControl,
}: MutationCategorieProps) {
  return (
    <div>
      {selectedCategorie ? (
        <UpdateCategorieForm
          handleControl={handleControl}
          categorie={selectedCategorie}
          changeEditingMode={() => {}}
        />
      ) : (
        <CreateProductForm
          handleControl={handleControl}
          changeEditingMode={() => {}}
        />
      )}
    </div>
  );
}