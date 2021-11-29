import Button from "@/presentation/components/button/Button";
import { UserHeader } from "@/presentation/components/headeruser";
import { QuizCards } from "@/presentation/components/quiz-card";
import { quiz } from "@/presentation/utils/mock/mock-quiz";
import { Container } from "./style";

export const QuizPage = () => {
  return (
    <Container>
      <UserHeader />
      <QuizCards quiz={quiz} />
      <Button>Concluir</Button>
    </Container>
  );
};
