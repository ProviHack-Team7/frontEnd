import Button from "@/presentation/components/button/Button";
import FormItem from "@/presentation/components/form/form-item/FormItem";
import { UpperCentredColumnLayout } from "@/presentation/components/layouts";
import { Container } from "./style";

import fblogo from "@/presentation/assets/fb_logo.svg";
import applelogo from "@/presentation/assets/apple_logo.svg";
import googlelogo from "@/presentation/assets/google_logo.svg";

export const SignUp = () => {
  return (
    <Container>
      <UpperCentredColumnLayout>
        <h1>Cadastro</h1>
        <form>
          <FormItem
            labelName={"Nome completo"}
            placeholder={"digite seu nome completo"}
          />
          <FormItem labelName={"Email"} placeholder={"digite seu email"} />
          <FormItem labelName={"Senha"} placeholder={"digite sua senha"} />
          <Button>Criar cadastro</Button>
        </form>
        <span>ou cadastre com</span>
        <div>
          <img src={googlelogo} alt="logo Facebook" />
          <img src={fblogo} alt="logo Facebook" />
          <img src={applelogo} alt="logo Facebook" />
        </div>

        <span>Já tem uma conta?</span>
        <span>Entrar</span>
      </UpperCentredColumnLayout>
    </Container>
  );
};
