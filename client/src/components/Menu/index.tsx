import * as Styled from "./styles";
import { HomeIcon, SettingsIcon, LogoutIcon } from "../../assets/icons";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/login";

interface MenuProps {
  path: "home" | "settings";
}
const Menu = ({ path }: MenuProps) => {
  return (
    <Styled.MenuContainer>
      <nav>
        <Styled.MenuItem active={path === "home"}>
          <Styled.MenuItemButton active={path === "home"}>
            <HomeIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
        <Styled.MenuItem active={path === "settings"}>
          <Styled.MenuItemButton active={path === "settings"}>
            <SettingsIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
      </nav>
      <Styled.MenuItem>
        <Styled.MenuItem logout>
          <Routes>
            <Route path="/" element={<LogoutIcon />} />
          </Routes>
        </Styled.MenuItem>
      </Styled.MenuItem>
    </Styled.MenuContainer>
  );
};
export default Menu;
