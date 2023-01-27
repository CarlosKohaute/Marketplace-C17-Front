import { FormEvent, useState } from "react";
import { StyledForm, StyledLoginForm } from "./styles";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
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
        <input placeholder="Your e-mail" name="email" required />
        <div>
          <input
            placeholder="Your Password"
            type={showPassword ? "text" : "password"}
            name="password"
            required
          />
          <button onClick={handleShowPassword}>
            {showPassword ? (
              <BsEyeSlashFill size={20} />
            ) : (
              <BsEyeFill size={20} />
            )}
          </button>
        </div>
        <button type="submit">Login</button>
      </StyledForm>
    </StyledLoginForm>
  );
}
