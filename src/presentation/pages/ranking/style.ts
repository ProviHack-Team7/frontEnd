import styled from "styled-components";
import mock08 from "@/presentation/assets/mock08.svg";
import mock07 from "@/presentation/assets/mock07.svg";
export const Container = styled.div`
  max-width: 375px;
  height: 100vh;

  margin: auto;
`;
/* mocado devido a falta de tempo hábio */

export const Mock1 = styled.div`
  max-width: 375px;
  height: 72px;
  background-image: url(${mock08});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
/* mocado devido a falta de tempo hábio */

export const Mock2 = styled.div`
  max-width: 375px;
  height: 720px;

  background-image: url(${mock07});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
