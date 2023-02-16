import { useNavigate } from "react-router-dom";
import { Categorie } from "../../types/data";
import { CategorieCardButton } from "./styles";

export type CardProps = {
  id?: string;
  name?: string;
  theme?: string;
  color: string ;
  categorie?: any
};

export function CategorieCard({ id, name, theme, color }: CardProps) {
  const navigate = useNavigate();

  return (
    <CategorieCardButton
      backgroundColor={color}
      onClick={() => {
        navigate("/products/" + id);
      }}
    >
      <h2>{name}</h2>
    </CategorieCardButton>
  );
}

