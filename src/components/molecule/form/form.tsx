import React, { FC, useState } from "react";
import { Content } from "../../atoms/content/content";
import { Input } from "../../atoms/input/input";
import { TForm } from "./form.types";

export const Form: FC<TForm> = () => {
  type item = {
    type: string;
    label: string;
    name?: string;
    required?: boolean;
    options?: Array<object>;
  };
  const [form, setForm] = useState([]);
  const [formValues, setFormValues] = useState<{
    [key: string]: string;
  }>({});
  const onChangeValue = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.currentTarget.value;
    setFormValues({ ...formValues, [event.target.name]: inputValue });
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
  return (
    <Content as="form" align="center">
      {form.map((item: item, index) => {
        return (
          <Input
            key={index}
            label={item.label}
            name={item.name}
            type={item.type}
            value={formValues[item.type]}
            required={item.required}
            onChange={onChangeValue}
          ></Input>
        );
      })}
    </Content>
  );
};
