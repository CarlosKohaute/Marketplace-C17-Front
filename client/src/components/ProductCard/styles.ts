import styled, { css } from "styled-components";
import { Theme } from "../../components/types/styled-components";

interface CardContainerProps {
  theme: Theme;
  active?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  ${({ theme }) => css`
    width: 16rem;
    height: 20rem;
    background-color: ${theme.light.fg};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    text-align: center;
    justify-content: center;
    padding: 0.5rem;
    padding-top: 8rem;
    box-sizing: border-box;
    cursor: pointer;
    img {
      width: 8rem;
      position: absolute;
      top: -2.3rem;
    }
    button{
      padding: 0.2rem;
      cursor: pointer;
      background-color: ${theme.light.bg};
    }
  `}
`;