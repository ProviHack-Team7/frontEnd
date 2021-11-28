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

  button:nth-last-child(2) {
    width: 70px;
    height: 28px;
    border: 2px solid ${Colors.PRIMARY};
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;

    font-weight: bold;
    color: ${Colors.PRIMARY};
  }

  button:nth-last-child(1) {
    width: 47px;
    height: 28px;
    border: none;
    border-radius: 5px;
    background-color: ${Colors.PRIMARY_II};
    cursor: pointer;

    font-weight: bold;
    color: ${Colors.WHITE};
  }
`;
