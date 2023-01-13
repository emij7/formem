import React, { FC, useEffect, useState } from "react";
import { Content } from "../../atoms/content/content";
import { Input } from "../../atoms/input/input";
import { Submit } from "../../atoms/submit/submit";
import { TForm } from "./form.types";
import { insertData } from "../../../api/data/data";
import { Message } from "../message/message";

export const Form: FC<TForm> = () => {
  type item = {
    type: string;
    label: string;
    name?: string;
    required?: boolean;
    options?: Array<object>;
  };

  const [form, setForm] = useState([]); //State que guarda lo que trae el JSON
  const [submited, setSubmited] = useState(false);

  const minimumDate = "1905-01-01";
  const todayDate = new Date().toISOString().split("T")[0];

  const [formValues, setFormValues] = useState<{
    [key: string]: string;
  }>({
    full_name: "",
    email: "",
    country_of_origin: "",
    birth_date: "",
    terms_and_conditions: "false",
  });

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (
      formValues.full_name.length > 0 &&
      formValues.email.length > 0 &&
      formValues.country_of_origin.length > 0 &&
      formValues.birth_date.length > 0 &&
      formValues.terms_and_conditions !== "false"
    ) {
      event.preventDefault();
      await insertData(formValues);
      setSubmited(true);
    }
  };

  const onChangeValue = (
    //funcion para guardar cambios de input en formValues
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (event.currentTarget.type === "date") {
      const date =
        parseInt(event.currentTarget.value.replaceAll("-", "")) >
        parseInt(todayDate.replaceAll("-", ""))
          ? todayDate
          : parseInt(event.currentTarget.value.replaceAll("-", "")) <
            parseInt(minimumDate.replaceAll("-", ""))
          ? minimumDate
          : event.currentTarget.value;
      event.currentTarget.value = date;
    }
    const inputValue = event.currentTarget.value;
    setFormValues({ ...formValues, [event.target.name]: inputValue });
  };

  const onChangeCheckbox = (
    //funcion para guardar cambios de input en formValues
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    formValues.terms_and_conditions === "false"
      ? setFormValues({ ...formValues, terms_and_conditions: "true" })
      : setFormValues({ ...formValues, terms_and_conditions: "false" });
  };

  const formDB = async () => {
    let res = await fetch("db.json");
    let data = await res.json();
    let dataArray = data.items;
    return dataArray;
  };
  formDB()
    .then((dataArray) => setForm(dataArray))
    .catch((err) => console.log(err.message));

  return submited ? (
    <Message data={formValues} />
  ) : (
    <Content as="form" align="center">
      {form.map((item: item, index) => {
        if (item.type === "submit") {
          return (
            <Submit
              key={index}
              label={item.label}
              type="submit"
              onClick={onSubmit}
            ></Submit>
          );
        } else if (item.type === "checkbox") {
          return (
            <Input
              align="center"
              key={index}
              label={item.label}
              name={item.name}
              type={item.type}
              required={item.required}
              onChange={onChangeCheckbox}
              width="1rem"
            ></Input>
          );
        } else {
          return (
            <Input
              align="center"
              key={index}
              label={item.label}
              name={item.name}
              type={item.type}
              value={formValues[item.type]}
              required={item.required}
              onChange={onChangeValue}
              options={item.options}
              min={minimumDate}
            ></Input>
          );
        }
      })}
    </Content>
  );
};
