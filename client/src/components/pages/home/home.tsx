import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../utils/api/api";
import { colors } from "../../../utils/colors";
import { CategorieCard } from "../../atoms/categorie-card/categorie-card";
import { Categorie } from "../../types/data";
import { CategorieContentDiv, CategorieDiv } from "./style";

export function Home() {
  const [categories, setCategories] = useState<Categorie[]>([]);
  const [selectedCategorie, setSelectedCategorie] = useState<
    string | undefined
  >();
  const [control, setControl] = useState<boolean>(false);
  const [isEditingMode, setIsEditingMode] = useState<boolean>(false);
  async function handleDeleteCategorie() {
    await api.deleteCategorie(categorieSelectedData?.id ?? "");
    handleControl();
  }
  const categorieSelectedData = categories.find(
    (categorie) => categorie.id == selectedCategorie
  );
  const navigate = useNavigate();

  console.log(JSON.parse(localStorage.getItem("user") ?? "").role);
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
    <CategorieDiv>
      <CategorieContentDiv>
        {categories.map((categorie) => {
          const color: any =
            colors[Math.floor(Math.random() * colors.length - 1) + 1];
          return (
            <CategorieCard
              key={categorie.id}
              id={categorie.id}
              name={categorie.name}
              theme={categorie.theme}
              color={color}
            />
          );
        })}
      </CategorieContentDiv>
    </CategorieDiv>
  );
}
