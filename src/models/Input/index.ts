import React from "react";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  control?: any;
  iconRight?: any;
}

export type TTypeInput =
  | "normal"
  | "input_widget"
  | "input_widget_error"
  | "error"
  | "phone";
