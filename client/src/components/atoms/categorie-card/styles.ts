import styled from "styled-components";

type CategorieCardButtonProps = {
  backgroundColor: string;
};

export const CategorieCardButton = styled.button<CategorieCardButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  align-items: center;
  width: 20%;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border-radius: 5px;
  min-height: 100px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: scale(1.15);
  }
`;
