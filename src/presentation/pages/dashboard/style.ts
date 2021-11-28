import styled from "styled-components";
import { Colors } from "@/presentation/styles/colors.enum";
import background from "@/presentation/assets/Bem-vindes.svg";
import mock01 from "@/presentation/assets/mock01.svg";
import mock02 from "@/presentation/assets/mock02.svg";

export const Container = styled.div`
  width: 375px;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;

  background-color: ${Colors.PRIMARY_IV};
  .footbar_icons {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
  }

  span:nth-child(2) {
    height: 234px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${Colors.LIGHT};

    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    h2 {
      text-align: center;
      width: 203px;
      font-size: 1.1rem;
      align-self: flex-end;
      margin: 15px 5px 0 0;
      padding: 5px;
    }
    p {
      width: 213px;
      align-self: flex-end;
      font-size: 0.8rem;
      margin-right: 5px;
    }

    button {
      width: 203px;
      height: 26px;
      align-self: flex-end;
      background-color: transparent;
      border: 1px solid ${Colors.PRIMARY_III};
      background-color: ${Colors.PRIMARY_IV};
      border-radius: 3px;

      font-size: 0.6rem;
      font-weight: bold;
      text-transform: uppercase;
      color: ${Colors.PRIMARY_III};
      margin-right: 10px;
      cursor: pointer;
    }
  }
  /* mocado devido a falta de tempo hábio */
  span:nth-child(3) {
    height: 220px;
    background-image: url(${mock01});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  /* mocado devido a falta de tempo hábio */
  span:nth-child(4) {
    height: 154px;
    background-image: url(${mock02});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
