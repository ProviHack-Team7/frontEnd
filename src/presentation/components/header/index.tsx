// import { BottomCentredRowLayout } from "../layouts";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { Logo, MainContainer } from "./style";
export const Header = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Logo onClick={() => navigate("/")}></Logo>
      <p onClick={() => navigate("/")}>sobre nós</p>
      <p onClick={() => navigate("/")}>blog</p>
      <p onClick={() => navigate("/")}>cases</p>
      <Button onClick={() => navigate("/signup")}>cadastrar</Button>
      <Button onClick={() => navigate("/signin")}>login</Button>
    </MainContainer>
  );
};
