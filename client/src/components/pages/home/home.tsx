import { useState } from "react";
import { Select } from "../../atoms/select/select";
export function Home() {
  const [selectedCategorie, setSelectedCategorie] = useState<string>();

  const options = ["Celulares", "Computadores", "Tablets"];

  function resultSelect(value: string) {
    console.log(value);
  }
  const produtosCateg1 =[
    "S22 ultra",
    "iphone 13 pro",
    "Xiaomi 11"
  ]

  const produtosCateg2 =[
    "ideapad3",
    "macbook air",
    "vivobook"
  ]

  const produtosCateg3 =[
    "Ipad air",
    "Samsung tab"
  ]
  console.log(selectedCategorie)
  return (
    <div>
      <h2>Home</h2>
      <Select options={options} selectedOption={setSelectedCategorie} />
      {selectedCategorie === "Celulares" && (
        <>
          {produtosCateg1.map((product) => {
            return <h2>{product}</h2>;
          })}
        </>
      )}
      {selectedCategorie === "Computadores" && (
        <>
          {produtosCateg2.map((product) => {
            return <h2>{product}</h2>;
          })}
        </>
      )}
    </div>
  );
}
