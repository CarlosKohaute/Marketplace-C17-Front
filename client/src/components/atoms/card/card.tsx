import { ReactNode, useState } from "react";
import { ClickedButton } from "../../pages/home/style";

export type CardProps = {
  name: string;
  description: string;
  image: string;
  price: number;
  selectCard: (data: string) => void;
};

export function Card({ name, description,image, price, selectCard }: CardProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <ClickedButton
      isSelect={isActive}
      onClick={() => {
        setIsActive(!isActive);
        selectCard(name);
      }}
      type="button"
    >
      <img src={image} />
      <h2>{name}</h2>
      <h3>{price}</h3>
      <p>{description}</p>
    </ClickedButton>
  );
}