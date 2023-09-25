import React from "react";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconLeft?: any;
  typeButton: TTypeButton;
}

export type TTypeButton = "normal" | "outline";
