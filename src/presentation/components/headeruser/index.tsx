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
      <div>
        <MdClass />
        <p onClick={() => navigate("/")}>Biblioteca</p>
      </div>
      <div>
        <MdPinDrop />
        <p onClick={() => navigate("/")}>Pontos</p>
      </div>
      <div>
        <FaTrophy />
        <p onClick={() => navigate("/")}>Ranking</p>
      </div>
      <img src={user} alt="user" />
    </MainContainer>
  );
};
