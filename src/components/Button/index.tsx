import { IButtonProps } from "models";
import React from "react";
import * as S from "./styles";

export const Button: React.FC<IButtonProps> = ({
  title,
  iconLeft,
  typeButton,
  ...props
}) => {
  return (
    <S.Button {...props} typeButton={typeButton}>
      {iconLeft && <S.IconLeft>{iconLeft}</S.IconLeft>}
      <S.Title typeButton={typeButton}>{title}</S.Title>
    </S.Button>
  );
};
