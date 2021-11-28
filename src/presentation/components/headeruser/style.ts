import styled from "styled-components";
import logo from "@/presentation/assets/Logotipo-provisório-1.svg";
import { Colors } from "@/presentation/styles/colors.enum";

export const Logo = styled.div`
  width: 20px;
  height: 30px;

  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
`;

export const MainContainer = styled.div`
  max-width: 100vw;
  height: 60px;

  padding: 5px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 0.8rem;

  > p {
    cursor: pointer;
  }
  color: ${Colors.PRIMARY_II};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 1rem;

    p {
      margin: 0;
      color: ${Colors.DARK_III};
      font-size: 0.8rem;
    }
  }
`;
