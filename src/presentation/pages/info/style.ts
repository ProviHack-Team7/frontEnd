import styled from "styled-components";
import mock06 from "@/presentation/assets/mock06.svg";
import { Colors } from "@/presentation/styles/colors.enum";

export const Container = styled.div`
  max-width: 375px;
  height: 900px;
  background-color: ${Colors.PRIMARY_IV};
  margin: auto;
`;
/* mocado devido a falta de tempo hábio */

export const Mock1 = styled.div`
  max-width: 350px;
  height: 804px;
  margin: auto;
  background-image: url(${mock06});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
/* mocado devido a falta de tempo hábio */
