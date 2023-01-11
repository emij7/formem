import { TContent } from "../../atoms/content/content.types";

export type TMessage = TContent & {
  data: {
    full_name?: string;
  };
};
