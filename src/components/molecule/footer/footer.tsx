import React, { FC } from "react";
import { theme } from "../../../styles/global";
import { Content } from "../../atoms/content/content";
import { Text } from "../../atoms/text/text";
import { TFooter } from "./footer.types";

export const Footer: FC<TFooter> = () => {
  return (
    <Content as="footer" align="center" margin={`${theme.spacing.m} 0 0 0`}>
      <Text> Hecho por Ignacio Emiliano Juarez</Text>
    </Content>
  );
};
