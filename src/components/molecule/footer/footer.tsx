import React, { FC } from "react";
import { Content } from "../../atoms/content/content";
import { TFooter } from "./footer.types";

export const Footer: FC<TFooter> = () => {
  return (
    <Content as="footer" align="center">
      FOOTER
    </Content>
  );
};
