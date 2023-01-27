import { Product } from "../../components/types/index"
import * as Styled from "./styles";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Styled.CardContainer>    
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <p>{product.description}</p>

      <button>Add to card</button>
    </Styled.CardContainer>
  

  );
};

export default ProductCard;