import React, { FC } from "react";
import { theme } from "../../../styles/global";
import { Content } from "../../atoms/content/content";
import { Text } from "../../atoms/text/text";
import { THeader } from "./header.types";

export const Header: FC<THeader> = () => {
  return (
    <Content as="header" align="center" margin={`${theme.size.m} 0`}>
      <Text size={theme.size.l} bold italic>
        FormEmu
      </Text>
    </Content>
  );
};
