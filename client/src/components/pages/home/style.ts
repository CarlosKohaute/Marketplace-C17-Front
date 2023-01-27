import styled, { css } from "styled-components";

interface CategoriesNavigationButtonProps {
  active?: boolean;
}
export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.light.bg};

  section {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    box-sizing: border-box;
  }
`;

export const HomeContentContainer = styled.div`
  width: calc(100% - 32rem);
`;

export const HomeContentHeader = styled.header`
  width: 100%;
  height: 16vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2rem;
`;

export const TitleContainer = styled.div`
  h1 {
    font-family: "Big Shoulders Stencil Display", cursive;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  p {
    text-transform: capitalize;
    font-size: 18px;
  }
`;

export const CategoriesNavigationBar = styled.div`
  width: 100%;
  height: 3vh;
  border-bottom: 1px solid #393c49;
  display: flex;
`;

export const CategoriesNavigationButton = styled.button<CategoriesNavigationButtonProps>`
  color: #393c49;
  background-color: ${(props) => props.theme.light.bg};
    border: 0;
  cursor: pointer;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-right: 0.3rem;

  :hover {
    color: #ffffff;
    transform: (1.05);
  }
  ${({ active }) =>
    active &&
    css`
      color: #9bc848;
      border-bottom: 2px solid #9bc848;
    `}
`;

export const ProductsHeaderContainer = styled.div`
width:100%;
height: 12vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 2rem;
box-sizing: border-box;

button {
  margin: 1rem;
  height: 90%;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0.9rem;
  background-color: ${(props) => props.theme.light.fg};
  color: rgb(248, 248, 242);
  cursor: pointer;
}
`