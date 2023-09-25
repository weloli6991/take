import { IInputChoiceButtonProps } from "models";
import React, { useState } from "react";
import CheckBox from "assets/images/icons/checkbox.svg";
import * as S from "./styles";

export const InputChoice: React.FC<IInputChoiceButtonProps> = ({
  text,
  status,
  setStatus,
  ...props
}) => {
  return (
    <S.WrapperInputChoice
      {...props}
      status={status}
      onClick={() => {
        setStatus();
      }}
    >
      <S.TextInputChoice status={status}>{text}</S.TextInputChoice>
    </S.WrapperInputChoice>
  );
};
