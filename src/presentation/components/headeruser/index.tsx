// import { BottomCentredRowLayout } from "../layouts";
import { useNavigate } from "react-router-dom";
import user from "@/presentation/assets/Foto_perfil.svg";
import { Logo, MainContainer } from "./style";
import { MdClass, MdPinDrop } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";

export const UserHeader = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Logo onClick={() => navigate("/")}></Logo>
      <div onClick={() => navigate("/library")}>
        <MdClass />
        <p>Biblioteca</p>
      </div>
      <div onClick={() => navigate("/")}>
        <MdPinDrop />
        <p>Pontos</p>
      </div>
      <div onClick={() => navigate("/ranking")}>
        <FaTrophy />
        <p>Ranking</p>
      </div>
      <img src={user} alt="user" />
    </MainContainer>
  );
};
