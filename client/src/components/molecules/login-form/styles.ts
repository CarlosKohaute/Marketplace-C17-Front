import styled from "styled-components";

export const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 400px;
  border: 1px solid ${(props) => props.theme.light.fg};
  height: 30rem;
  h2 {
    margin: 2rem;
  }
`;

export type StyledFormProps = {
  error: boolean;
};


export const StyledForm = styled.form<StyledFormProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;

  input {
    display: flex;
    width: 90%;
    padding: 0.5rem 1rem;
    border: ${(props) => (props.error ? "solid 2px red" : "none")};
    margin: 1rem;
    border-radius: 1rem;
    border: none;
    height: 35px;
    font-size: 1rem;
    background-color: ${(props) => props.theme.light.fg};
  }
  div {
    display: flex;
    flex-direction: row;
    width: 90%;
    border-radius: 5px 0 0 5px;
    border: none;
    align-items: center;

    input {
      display: flex;
      width: 100%;
      padding: 0.5rem 0 0.5rem 1rem;
      margin: 1rem -0.5rem 1rem 1rem;
      border-radius: 1rem;
      border: none;
      height: 35px;
    }
    button {
      height: 50%;
      display: flex;
      align-items: center;
      border: none;
      border-radius: 1rem;
      margin: 0 1rem 0 -1rem;
      padding: 0 0 0 -1rem;
      cursor: pointer;
      background-color: ${(props) => props.theme.light.fg};
    }
  }
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
`;
