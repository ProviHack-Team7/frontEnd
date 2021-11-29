import Button from "../button/Button";
import { Container, Contents, Cards } from "./style";
import { CentredRightColumnLayout } from "../layouts";
import { useNavigate } from "react-router-dom";

export const Content = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <CentredRightColumnLayout>
        <h1>+5k alunos e professores </h1>
        <p>
          Estão mudando a educação no Brasil sendo um espaço cada vez mais
          inclusivo e seguro para todes.
        </p>
        <Button onClick={() => navigate("/signup")}>Quero fazer parte</Button>
      </CentredRightColumnLayout>
      <Contents>
        <h1>73% dos estudantes LGBTQIA+</h1>
        <p>disseram já terem sido agredidos verbalmente, e 36%, fisicamente.</p>
        <Button onClick={() => navigate("/")}>ver mais</Button>
      </Contents>
      <Cards>
        <CentredRightColumnLayout>
          <h1>Histórias que inspiram</h1>
          <p>
            ”Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est
            risus, viverra eu massa sed, sodales vehicula enim. Nullam dapibus
            vulputate luctus.”
          </p>
          <Button onClick={() => navigate("/signup")}>Quero fazer parte</Button>
        </CentredRightColumnLayout>
      </Cards>
      <span>
        <h2 onClick={() => navigate("/about")}>Sobre nós</h2>
        <p>Cras est risus, viverra eu massa sed, sodales vehicula enim.</p>
      </span>
    </Container>
  );
};
