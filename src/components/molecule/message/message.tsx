import React, { FC } from "react";
import { Content } from "../../atoms/content/content";
import { TMessage } from "./message.types";
import { useNavigate } from "react-router-dom";
import { Text } from "../../atoms/text/text";

export const Message: FC<TMessage> = ({ data }) => {
  const navigate = useNavigate();
  // navigate("/results");
  return (
    <Content as="section" align="center">
      <Text>{`${data.full_name} tu formulario fue enviado correctamente!`}</Text>
      <Text>{`Puedes ver tus resultados aquí`}</Text>
    </Content>
  );
};
