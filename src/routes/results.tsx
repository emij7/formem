import React, { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Content } from "../components/atoms/content/content";

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

  return <Content>RESULTADOS </Content>;
};
