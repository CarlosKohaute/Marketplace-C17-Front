import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { Card } from "../../atoms/card/card";
import { Select } from "../../atoms/select/select";

export type product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

export function Product() {
  const [products, setProducts] = useState<product[]>([]);
  const [search, setSearch] = useState("");

  async function findProducts() {
    const produtos = await api.getProducts();
    setProducts(produtos);
  }

  const sortedProducts =
    search.length > 0
      ? products.filter((product) =>
          product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : products;
  useEffect(() => {
    console.log("rodou useEffect");
    findProducts();
  }, []);
  console.log("renderizou");
  return (
    <div>
      <h2>Home</h2>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.currentTarget.value);
        }}
        placeholder="Search"
      />
      {sortedProducts.map((product) => (
        <div key={product.id}>
          <img src={product.image}/>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
