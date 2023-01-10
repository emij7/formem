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
    >
      <Text>Form name</Text>
      <Text>Here is the form description</Text>
      <Form />
    </Content>
  );
};
