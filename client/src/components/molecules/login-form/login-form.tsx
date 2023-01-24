import { FormEvent } from "react";
import { StyledForm, StyledLoginForm } from "./styles";
export function LoginForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const loginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    console.log(loginPayload);
  }

  return (
    <StyledLoginForm>
      <h2>Login</h2>
      <StyledForm onSubmit={handleSubmit}>
        <input placeholder="Your e-mail" name="email" />
        <input placeholder="Your Password" name="password" />
        <button type="submit">Login</button>
      </StyledForm>
    </StyledLoginForm>
  );
}
