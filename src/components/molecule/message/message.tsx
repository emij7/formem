import React, { FC } from "react";
import { Content } from "../../atoms/content/content";
import { TMessage } from "./message.types";
import { useNavigate } from "react-router-dom";
import { Text } from "../../atoms/text/text";
import { theme } from "../../../styles/global";

export const Message: FC<TMessage> = ({ data }) => {
  const navigate = useNavigate();
  const onViewResults = () => {
    navigate("/results", {
      state: {
        data,
      },
    });
  };
  return (
    <Content as="section" align="center" margin={`${theme.spacing.m} 0`}>
      <Text
        align="center"
        size={theme.size.m}
      >{`¡${data.full_name} tu formulario fue enviado correctamente!`}</Text>
      <Text align="center" size={theme.size.m}>
        Para ver tus resultados haz click aquí:{" "}
      </Text>
      <Content
        align="center"
        backgroundColor={theme.color.blue}
        border={`1px solid ${theme.color.gray.normal}`}
        borderRadius={theme.size.s}
        margin={`${theme.spacing.m} 0`}
        onClick={onViewResults}
        padding={theme.spacing.m}
        max-width="50%"
        width="15rem"
      >
        <Text align="center" size={theme.size.m}>
          RESULTADOS
        </Text>
      </Content>
    </Content>
  );
};
