import styled from "styled-components";
import { Colors } from "@/presentation/styles/colors.enum";
import background from "@/presentation/assets/content.svg";

export const Container = styled.div`
  width: 375px;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;

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
    background-size: 100%;
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
      width: 105px;
      height: 26px;
      align-self: center;
      background-color: transparent;
      border: 1px solid ${Colors.LIGHT};
      border-radius: 3px;

      font-size: 0.6rem;
      font-weight: bold;
      color: ${Colors.LIGHT};

      cursor: pointer;
      margin-left: 20px;
    }
  }
  span:nth-child(3) {
    background-color: ${Colors.PRIMARY_III};
  }
  span:nth-child(4) {
    background-color: purple;
  }
`;
