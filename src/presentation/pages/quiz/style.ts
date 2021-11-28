import styled from "styled-components";
import { Colors } from "@/presentation/styles/colors.enum";

export const Container = styled.div`
  background-color: ${Colors.PRIMARY_IV};
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  button {
    width: 99px;
    height: 44px;
    align-self: flex-end;
    margin: 20px 20px 50px 0;

    background-color: ${Colors.PRIMARY_II};

    font-weight: bold;
    color: ${Colors.LIGHT};

    border: none;
    border-radius: 10px;
    text-transform: uppercase;
  }
`;
