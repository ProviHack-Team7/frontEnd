import { Content } from "@/presentation/components/content";
import { Header } from "@/presentation/components/header";
import { Container } from "./style";

export const HomePage = () => {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
};
