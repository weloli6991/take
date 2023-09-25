import React from "react";

export interface IInputChoiceButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  status: boolean;
  setStatus: () => void;
}
