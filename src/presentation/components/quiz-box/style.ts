import styled from "styled-components";
import { Colors } from "@/presentation/styles/colors.enum";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    width: 350px;
    height: 400px;
    top: 10px;
    left: 13px;

    z-index: -1;
  }

  div:nth-last-child(5) {
    width: 100%;
    display: flex;
    margin-top: 20px;
    span {
      align-self: flex-start;
      width: 64px;
      height: 48px;
      background-color: ${Colors.PRIMARY_III};

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.8rem;
      font-weight: bold;

      margin: 0 20px 20px 0;
      color: ${Colors.WHITE};
    }
    p {
      font-weight: bold;
    }
  }
  .choices {
    max-width: 320px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    p {
      max-width: 250px;
      padding: 5px;
    }
    span {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      background-color: ${Colors.LIGHT_II};
      color: ${Colors.LIGHT};

      font-weight: bold;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .choice {
    span {
      background-color: ${Colors.PRIMARY_II};
    }
  }
  .disable {
    pointer-events: none;
  }
`;
