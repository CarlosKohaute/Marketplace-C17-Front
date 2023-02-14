import { FormEvent, useState } from "react";
import { Card } from "../../atoms/card/card";
import { Select } from "../../atoms/select/select";
export function Home() {
  const [selectedCategorie, setSelectedCategorie] = useState<string>();

  const options = ["Celulares", "Computadores", "Tablets"];

  const produtosCateg1 = ["S22 ultra", "iphone 13 pro", "Xiaomi 11"];

  const produtosCateg2 = ["ideapad3", "macbook air", "vivobook"];

  const produtosCateg3 = ["Ipad air", "Samsung tab"];
  const productList = [
    {
      name: "S22 ultra",
      description:
        "The Samsung Galaxy S22 Ultra is the headliner of the S22 series. Its the first S series phone to include Samsung's S Pen. Specifications are top-notch including 6.8-inch Dynamic AMOLED display with 120Hz refresh rate, Snapdragon 8 Gen 1 processor, 5000mAh battery, up to 12gigs of RAM, and 1TB of storage.",
      price: 7999.99,
      image:
        "https://www.oficinadanet.com.br/imagens/obj_item/1128/s22-ultra.jpg",
      categoryId: "7de6d3ce-b4cb-435f-b784-8c4935ae0cdc",
    },
    {
      name: "Macbook Air",
      description:
        "The Samsung Galaxy S22 Ultra is the headliner of the S22 series. Its the first S series phone to include Samsung's S Pen. Specifications are top-notch including 6.8-inch Dynamic AMOLED display with 120Hz refresh rate, Snapdragon 8 Gen 1 processor, 5000mAh battery, up to 12gigs of RAM, and 1TB of storage.",
      price: 7999.99,
      image:
        "https://a-static.mlcdn.com.br/800x560/apple-macbook-air-136-m2-8gb-ram-256gb-ssd-prata/magazineluiza/235410100/cde4b6b35777c873a509653163aa25aa.jpg",
      categoryId: "7de6d3ce-b4cb-435f-b784-8c4935ae0cdc",
    },
  ];

  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  function selectedProduct(value: string) {
    if (selectedProducts.includes(value)) {
      setSelectedProducts((state) =>
        state.filter((productName) => productName !== value)
      );
    } else {
      setSelectedProducts((state) => [...state, value]);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log(selectedProducts);
  }

  return (
    <div>
      <h2>Home</h2>
      <Select options={options} selectedOption={setSelectedCategorie} />
      <form onSubmit={handleSubmit}>
        {productList.map((product) => {
          return (
            <Card
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              selectCard={selectedProduct}
              key={product.name}
            />
          );
        })}
        <div>
          <button type="submit">enviar</button>
        </div>
      </form>
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
      {selectedCategorie === "Tablets" && (
        <>
          {produtosCateg3.map((product) => {
            return <h2>{product}</h2>;
          })}
        </>
      )}
    </div>
  );
}
