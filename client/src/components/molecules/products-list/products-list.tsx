import React from "react";
import { api } from "../../../utils/api/api";

export default function ProductList() {
  const [products, setProducts] = useState<>([]);
  const sortedProductsByCategorieId = selectedCategorie
    ? products.filter((product) => product.categoryId == selectedCategorie)
    : [];
  async function findProducts() {
    const data = await api.getProductList();
    setProducts(data);
  }
  return (
    <section>
      {sortedProductsByCategorieId.map((product) => {
        return (
          <div key={product.name}>
            <span>{product.name}</span>
            <span>{product.description}</span>
            <span>{product.price}</span>
            <span>{product.image}</span>
            <span>{product.categoryId}</span>
          </div>
        );
      })}
    </section>
  );
}
function setProducts(data: any) {
  throw new Error("Function not implemented.");
}
