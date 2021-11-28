import styled from "styled-components";
import { Colors } from "@/presentation/styles/colors.enum";

export const Container = styled.div`
  width: 375px;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${Colors.PRIMARY_IV};

  color: ${Colors.PRIMARY_II};

  div:nth-last-child(1) {
    h1 {
      align-self: flex-start;
    }

    form {
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      span {
        align-self: flex-end;
        color: ${Colors.DARK_III};
        margin-bottom: 30px;
      }
    }
    span:nth-last-child(4) {
      color: ${Colors.DARK_III};
      margin: 10px 0 20px;
    }
    span:nth-last-child(2) {
      text-align: center;
      color: ${Colors.DARK};
      margin-top: 5px;
    }
    span:nth-last-child(1) {
      text-align: center;
      color: ${Colors.DARK};
    }
    button {
      width: 331px;
      height: 44px;
      background-color: ${Colors.PRIMARY_II};

      font-weight: bold;
      color: ${Colors.LIGHT};

      border: none;
      border-radius: 10px;
      text-transform: uppercase;
    }
  }
`;
