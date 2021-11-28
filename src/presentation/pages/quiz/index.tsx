import Button from "@/presentation/components/button/Button";
import { QuizCards } from "@/presentation/components/quiz-card";
import { quiz } from "@/presentation/utils/mock/mock-quiz";
import { Container } from "./style";

export const QuizPage = () => {
  return (
    <Container>
      <QuizCards quiz={quiz} />
      <Button>Concluir</Button>
    </Container>
  );
};
