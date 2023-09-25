import React from "react";
import { NumberFormatBaseProps } from "react-number-format";

export interface ICurrencyProps
  extends Omit<
    NumberFormatBaseProps,
    "removeFormatting" | "getCaretBoundary" | "format"
  > {
  label?: string;
  control?: any;
  iconRight?: any;
}

export type TTypeCurrency =
  | "normal"
  | "input_widget"
  | "input_widget_error"
  | "error";
