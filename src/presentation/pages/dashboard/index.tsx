import Button from "@/presentation/components/button/Button";
import { UserHeader } from "@/presentation/components/headeruser";
import { useNavigate } from "react-router";
import { Container } from "./style";
import trophy from "@/presentation/assets/ilustração.svg";
import peace from "@/presentation/assets/paz.svg";
import inequality from "@/presentation/assets/desigualdade.svg";
import book from "@/presentation/assets/book.svg";

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <UserHeader />
      <span>
        <h2>Agora você faz parte da família Duda!</h2>
        <p>
          A plataforma que conecta professores e alunos com o objetivo fornecer
          educação sobre diversidade e fomentar projetos de inclusão nas
          instituições de ensino.
        </p>
        <Button onClick={() => navigate("/quiz")}>Iniciar o Quiz</Button>
      </span>

      <span></span>
      <span></span>
    </Container>
  );
};
