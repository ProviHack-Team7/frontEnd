import Button from "@/presentation/components/button/Button";
import FormItem from "@/presentation/components/form/form-item/FormItem";
import { UpperCentredColumnLayout } from "@/presentation/components/layouts";
import { Container } from "./style";

import fblogo from "@/presentation/assets/fb_logo.svg";
import applelogo from "@/presentation/assets/apple_logo.svg";
import googlelogo from "@/presentation/assets/google_logo.svg";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <UpperCentredColumnLayout>
        <h1>Login</h1>
        <form>
          <FormItem labelName={"Email"} placeholder={"digite seu email"} />
          <FormItem labelName={"Senha"} placeholder={"digite sua senha"} />
          <span>Esqueceu sua senha?</span>
          <Button onClick={() => navigate("/dashboard")}>Entrar</Button>
        </form>
        <span>ou entre com</span>
        <div>
          <img src={googlelogo} alt="logo Facebook" />
          <img src={fblogo} alt="logo Facebook" />
          <img src={applelogo} alt="logo Facebook" />
        </div>

        <span>Não tem uma conta?</span>
        <span>cadastre-se</span>
      </UpperCentredColumnLayout>
    </Container>
  );
};
