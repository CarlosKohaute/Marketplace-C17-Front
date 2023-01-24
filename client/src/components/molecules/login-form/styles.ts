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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;

  input {
    display: flex;
    width: 90%;
    padding: 0.5rem 1rem;
    margin: 1rem;
    border-radius: 1rem;
    border: none;
  }
  button {
    margin: 1rem;
  }
`;
