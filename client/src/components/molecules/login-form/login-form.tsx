import { FormEvent, useState } from "react";
import { StyledForm, StyledLoginForm } from "./styles";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { api } from "../../../utils/api/api";
import { useNavigate } from "react-router-dom";
import { Loading } from "../loading/loading";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const loginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const userData = await api.login(loginPayload);
    setLoading(false);
    console.log(userData);
    if (userData.statusCode) {
      setError(true);
      return;
    }
    navigate("/home");
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <StyledLoginForm>
          <h2>Login</h2>
          <StyledForm onSubmit={handleSubmit} error={error}>
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
      )}
    </>
  );
}
