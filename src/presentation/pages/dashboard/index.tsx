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
        <Button onClick={() => navigate("/signup")}>Iniciar Quiz</Button>
      </span>

      <span>
        <h3>Aprenda, ganhe pontos e concorra a prêmios!</h3>
        <p>
          As instituições que aderirem à plataforma, possuindo pelo menos 3
          meses de uso contínuo, receberão divulgação gratuita por parte da Duda
          e um selo da plataforma dizendo que a Instituição se preocupa com a
          diversidade.
        </p>
        <div>
          <img src={trophy} alt="trophy illustration" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button onClick={() => navigate("/signup")}>Quero aprender</Button>
        </div>
      </span>
      <span>
        <p>Todes unidos pela diversidade e educação!</p>
        <div className="footbar_icons">
          <div>
            <p>10</p>
            <p>REDUZIR AS DESIGUALDADES</p>
            <img src={inequality} alt="trophy illustration" />
          </div>
          <div>
            <p>4</p>
            <p>EDUCAÇÃO DE QUALIDADE</p>
            <img src={book} alt="trophy illustration" />
          </div>
          <div>
            <p>16</p>
            <p>PAZ, JUSTIÇA E INSTITUIÇÕES FORTES</p>
            <img src={peace} alt="trophy illustration" />
          </div>
        </div>
      </span>
    </Container>
  );
};
