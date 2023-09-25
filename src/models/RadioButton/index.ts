import React from "react";

export interface IRadioButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  status: boolean;
  setStatus: () => void;
}
