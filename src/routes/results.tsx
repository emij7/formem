import React, { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Content } from "../components/atoms/content/content";
import { Text } from "../components/atoms/text/text";
import { theme } from "../styles/global";

export const Results: FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    const checkData = (state: object) => {
      if (state === null) {
        navigate("/");
      }
    };

    checkData(state);
  }, [navigate, state]);

  const capitalizeFirstLetter = (str: string) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  };

  return (
    <Content
      align="center"
      as="section"
      backgroundColor={theme.color.primary.light}
      borderRadius={theme.size.s}
      margin="auto"
      minHeight="5rem"
      width="80%"
      padding={`${theme.spacing.l} 0`}
    >
      <Text size={theme.size.m}>Estos son los datos que compartiste:</Text>
      <Content align="center" margin={`${theme.spacing.l} 0`}>
        <Content align="center" margin={`${theme.spacing.s} 0`} gap="0">
          <Text size={theme.size.m} semibold>
            Nombre:
          </Text>
          <Text size={theme.size.m}>{state.data.full_name}</Text>
        </Content>
        <Content align="center" margin={`${theme.spacing.s} 0`} gap="0">
          <Text size={theme.size.m} semibold>
            E-Mail:
          </Text>
          <Text size={theme.size.m}>{state.data.email}</Text>
        </Content>
        <Content align="center" margin={`${theme.spacing.s} 0`} gap="0">
          <Text size={theme.size.m} semibold>
            Nacionalidad:
          </Text>
          <Text size={theme.size.m}>
            {capitalizeFirstLetter(state.data.country_of_origin)}
          </Text>
        </Content>
        <Content align="center" margin={`${theme.spacing.s} 0`} gap="0">
          <Text size={theme.size.m} semibold>
            Fecha de nacimiento:
          </Text>
          <Text size={theme.size.m}>{state.data.birth_date}</Text>
        </Content>
      </Content>
    </Content>
  );
};
