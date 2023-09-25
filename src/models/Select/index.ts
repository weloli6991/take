import React from "react";

export interface ISelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  control?: any;
  isMulti?: true | undefined;
  options: { value: string | number; label: string | number }[];
}

export type TTypeSelect =
  | "normal"
  | "input_widget"
  | "input_widget_error"
  | "error"
  | "phone";
