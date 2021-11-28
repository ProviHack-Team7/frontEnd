import { QuizBox } from "../quiz-box";
import { Container } from "./style";

interface QuizProps {
  quiz: Array<Object>;
}

export const QuizCards = ({ quiz }: QuizProps) => {
  return (
    <Container>
      {quiz.map((elem: Object, index: number) => (
        <QuizBox elem={elem} index={index} />
      ))}
    </Container>
  );
};
