import { useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { productPayload } from "../../pages/home/home";

export type ProductsListProps = {
  selectedCategorie: string | undefined;
};

export default function ProductList({ selectedCategorie }: ProductsListProps) {
  const [products, setProducts] = useState<productPayload[]>([]);
  const [control, setControl] = useState<boolean>(false);

  const sortedProductsByCategorieId = selectedCategorie
    ? products.filter((product) => product.categoryId == selectedCategorie)
    : [];
  async function findProducts() {
    const data = await api.getProductList();
    setProducts(data);
  }

  useEffect(() => {
    findProducts();
  }, [control]);

  return (
    <section>
      <h2>Products of this categorie</h2>
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
