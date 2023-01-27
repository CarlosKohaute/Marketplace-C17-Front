import styled, { css } from "styled-components";

interface MenuItemProps {
  logout?: boolean;
  active?: boolean;
}

interface MenuItemButtonProps {
  active?: boolean;
}

export const MenuContainer = styled.div`
  width: 6rem;
  height: 100vh;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.light.fg};;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 3.5rem;
    margin: 1.25rem 0;
  }
  nav {
    width: 100%;
  }
`;

export const MenuItem = styled.div<MenuItemProps>`
  height: 80px;
  width: calc(100% - 12px);
  box-sizing: border-box;
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px 0px 0px 12px;
  background-color: ${(props) => props.theme.light.fg};

  ${({ logout }) =>
    logout &&
    css`
      margin-right: 0.9rem;
      position: absolute;
      bottom: 0;
      width: calc(4rem - 12px);
      border-radius: 16px;
      cursor: pointer;
      :hover {
        transform: scale(1.001);
      }
    `}
  ${({ active }) =>
    active &&
    css`
  background-color: ${(props) => props.theme.light.fg};;
    `}
`;

export const MenuItemButton = styled.button<MenuItemButtonProps>`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  background-color: ${(props) => props.theme.light.fg};
  border-radius: 8px;
  background-color: ${(props) => props.theme.light.bg};
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
  ${({ active }) =>
    active &&
    css`
  background-color: ${(props) => props.theme.light.fg};
  background-color: ${(props) => props.theme.light.bg};
    `}
`;
