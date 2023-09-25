import { IInputProps } from "models";
import React, { useState } from "react";
import * as S from "./styles";
import { Controller } from "react-hook-form";

export const Input: React.FC<IInputProps> = ({
  control,
  iconRight,
  label,
  ...props
}) => {
  const format = (numStr: any) => {
    if (numStr === "") return "";
    return numStr.toLocaleString("pt-br", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <S.WrapperInput>
      <Controller
        control={control}
        name={props.name as string}
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => {
          return (
            <S.WrapperInput>
              {label && <S.Label>{label}</S.Label>}
              <S.Input
                {...props}
                name={name}
                onChange={onChange}
                value={value as string}
                iconRight={iconRight ? true : false}
              />
              {iconRight && <S.IconRight>{iconRight}</S.IconRight>}
            </S.WrapperInput>
          );
        }}
      />
    </S.WrapperInput>
  );
};
