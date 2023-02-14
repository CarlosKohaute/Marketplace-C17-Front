import styled from "styled-components";

type clickedButtonProps = {
  isSelect: boolean;
};

export const ClickedButton = styled.button<clickedButtonProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.5rem;
  max-width: 20%;
  min-width: 19%;
  border: 3px solid ${(props) => (props.isSelect ? "green" : "red")};
  border-radius: 10px;

  img{
    width: 8rem;
    height: 5rem;
    margin-top: 0.5rem;
    justify-content: center;

  }

  div>button{
    align-items: baseline;
  }
`;