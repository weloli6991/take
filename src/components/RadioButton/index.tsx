import { IRadioButtonProps } from "models";
import React, { useState } from "react";
import CheckBox from "assets/images/icons/checkbox.svg";
import * as S from "./styles";

export const RadioButton: React.FC<IRadioButtonProps> = ({
  text,
  status,
  setStatus,
  ...props
}) => {
  return (
    <S.WrapperRadio
      {...props}
      onClick={() => {
        setStatus();
      }}
    >
      {status ? (
        <S.Circle status={status}>
          <S.CircleActive />
        </S.Circle>
      ) : (
        <S.Circle />
      )}
      <S.TextRadio>{text}</S.TextRadio>
    </S.WrapperRadio>
  );
};
