import { HeaderDiv, HeaderDivButtons, HeaderDivTitle } from "./styles";
import { FiLogOut } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/data";
import { useState } from "react";
import { ModalCelule } from "../../celules/modal/modal";
import { CreateProductForm } from "../../celules/create-product/create-product-form";
import { CheckIcon, UsersIcon } from "../../../assets";

export function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  let user = {} as User;
  if (localStorage.getItem("token") !== null)
    user = JSON.parse(localStorage.getItem("user") ?? "");

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  }

  function handleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <HeaderDiv>
      <HeaderDivButtons>
        <HeaderDivTitle>
          <img src="" alt="Logo" />
        </HeaderDivTitle>
        <button onClick={handleModal}>
          <IoMdAddCircleOutline size={20} /> Create Categorie
        </button>

        <button onClick={handleLogout}>
          <FiLogOut size={20} />
        </button>
      </HeaderDivButtons>
      <ModalCelule
        handleModal={handleModal}
        isOpen={isOpen}
        children={
          <CreateProductForm
            changeEditingMode={handleModal}
            handleControl={() => {}}
          />
        }
      />
    </HeaderDiv>
  );
}
