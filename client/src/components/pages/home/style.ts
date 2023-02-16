import styled from "styled-components";

export const CategorieDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CategorieFilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20%;
  @media (max-width: 768px) {
    width: 100%;
  }
  div {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    select {
      display: flex;
      border: none;
      cursor: pointer;
      background-color: ${({ theme }) => theme.light.bg};
      color: ${({ theme }) => theme.light.fg};
      padding: 1px 6px;
      margin: 2px;
      @media (max-width: 768px) {
        height: 1.7rem;
      }
    }
  }
`;

export const CategorieInput = styled.input`
  display: flex;
  @media (max-width: 768px) {
    width: 90%;
    height: 1.7rem;
  }
`;

export const CategorieContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 100%;
`;
