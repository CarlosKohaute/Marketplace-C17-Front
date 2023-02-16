import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../utils/api/api";
import { colors } from "../../../utils/colors";
import { CategorieCard } from "../../atoms/categorie-card/categorie-card";
import { Select } from "../../atoms/select/select";
import { Categorie } from "../../types/data";
import { CategorieContentDiv, CategorieDiv } from "./style";

export function Home() {
  const [categories, setCategories] = useState<Categorie[]>([]);

  const [search, setSearch] = useState<string>("");
  const [paramToFilter, setParamToFilter] = useState<string>("name");

  console.log(JSON.parse(localStorage.getItem("user") ?? "").role);
  async function findCategories() {
    const data = await api.getCategories();
    setCategories(data);
  }

  const filteredCategories = categories.filter((categorie) => {
    if (paramToFilter === "name")
      return categorie.name.toUpperCase().includes(search.toUpperCase());
  });

  useEffect(() => {
    findCategories();
  }, []);

  console.log(search);

  return (
    <CategorieDiv>
       <input
        type="text"
        onChange={(e) => {
          setSearch(e.currentTarget.value);
        }}
      />
      <Select
        selectedOption={setParamToFilter}
        options={[
          { name: "Name", value: "name" },
        ]}
      />
      <CategorieContentDiv>
      {filteredCategories.map((categorie) => {
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
