import React, { FC } from "react";
import { theme } from "../../../styles/global";
import { Content } from "../../atoms/content/content";
import { Text } from "../../atoms/text/text";
import { Form } from "../form/form";
import { TMain } from "./main.types";

export const Main: FC<TMain> = () => {
  return (
    <Content
      align="center"
      as="section"
      backgroundColor={theme.color.primary.normal}
      borderRadius={theme.size.s}
      margin="auto"
      minHeight="5rem"
      width="80%"
      padding={`${theme.spacing.l} 0`}
    >
      <Text align="center" semibold size={theme.size.m}>
        DATOS PERSONALES
      </Text>
      <Form />
    </Content>
  );
};
