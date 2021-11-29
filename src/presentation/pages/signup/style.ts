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
      height: 350px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    span:nth-last-child(4) {
      color: ${Colors.LIGHT_II};
      margin: 10px 0 20px;
    }
    span:nth-last-child(2) {
      text-align: center;
      color: ${Colors.LIGHT_II};
      margin-top: 5px;
    }
    span:nth-last-child(1) {
      text-align: center;
      font-weight: bold;
      font-size: 0.8rem;
      text-transform: uppercase;
      color: ${Colors.PRIMARY_II};
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
