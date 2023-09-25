import React, { useState } from "react";
import * as S from "./styles";
import { Controller } from "react-hook-form";
import { ICurrencyProps } from "models/Input/Currency";
import { convertToMoney } from "utils/money";

export const Currency: React.FC<ICurrencyProps> = ({
  control,
  iconRight,
  label,
  ...props
}) => {
  const format = (numStr: any) => {
    if (numStr === "") return "";
    return convertToMoney(numStr).toLocaleString("pt-br", {
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
            <S.Row>
              <S.TextCurrency value={value}>R$</S.TextCurrency>
              <S.WrapperInput>
                {label && <S.Label>{label}</S.Label>}
                <S.Input
                  {...props}
                  format={format}
                  removeFormatting={(value) => value}
                  getCaretBoundary={(value) => [false]}
                  value={value}
                  name={name}
                  onChange={onChange}
                  iconRight={iconRight ? true : false}
                />
                {iconRight && <S.IconRight>{iconRight}</S.IconRight>}
              </S.WrapperInput>
            </S.Row>
          );
        }}
      />
    </S.WrapperInput>
  );
};
