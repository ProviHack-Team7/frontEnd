import styled from "styled-components";
import background from "@/presentation/assets/content.svg";
import background2 from "@/presentation/assets/image119.png";
import { Colors } from "@/presentation/styles/colors.enum";

export const Container = styled.div`
  width: 100%;

  color: ${Colors.WHITE};
  display: flex;
  flex-direction: column;

  div:nth-last-child(4) {
    height: 248px;

    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;

    h1 {
      font-size: 1.2rem;
      align-self: flex-end;
      margin: 5px;
      padding: 5px;
    }
    p {
      width: 230px;
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
  span {
    height: 186;
    color: ${Colors.PRIMARY_III};
    background-color: ${Colors.PRIMARY_IV};
    text-align: center;
    p {
      font-weight: 0.5rem;
    }
    h2 {
      cursor: pointer;
    }
  }
`;

export const Contents = styled.div`
  height: 186px;

  background-color: ${Colors.PRIMARY_III};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 1.2rem;
    margin: 5px;
  }
  p {
    font-size: 0.7rem;
  }
  button {
    width: 148px;
    height: 44px;

    background-color: ${Colors.WHITESMOKE};
    border: none;
    border-radius: 3px;

    font-size: 0.7rem;
    font-weight: bold;
    color: ${Colors.PRIMARY_II};

    margin-top: 20px;
    cursor: pointer;
  }
`;

export const Cards = styled.div`
  width: 100%;

  color: ${Colors.WHITE};
  display: flex;
  flex-direction: column;

  div:nth-last-child(1) {
    height: 248px;

    background-image: url(${background2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -2;

    position: relative;
    ::before {
      content: "";
      width: 100%;
      height: 100%;

      position: absolute;
      background: linear-gradient(
        270.1deg,
        #000000 0.06%,
        #000000 53.23%,
        rgba(0, 0, 0, 0) 117.2%
      );
      top: 0;
      left: 0;
      z-index: -1;
    }

    h1 {
      font-size: 1.2rem;
      align-self: flex-end;
      margin: 5px;
      padding: 5px;
    }
    p {
      width: 230px;
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
`;
