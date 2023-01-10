import { InputHTMLAttributes } from "react";
import { AlignItems } from "../content/content.types";

export type TInput = InputHTMLAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLTextAreaElement> & {
    align?: AlignItems;
    helper?: string;
    hideLabel?: boolean;
    label: string;
    options?: any[];
  };
