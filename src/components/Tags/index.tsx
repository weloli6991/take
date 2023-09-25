import { ITagsProps } from "models";
import React, { useState } from "react";
import { ReactComponent as Plus } from "assets/icons/input/plus.svg";
import * as S from "./styles";

export const Tags: React.FC<ITagsProps> = ({ values }) => {
  return (
    <>
      <S.AddTag>
        <Plus width={12} height={12} stroke="#0065FF" />
        <S.TextAddTags>Adicionar</S.TextAddTags>
      </S.AddTag>
      {values.map((value, index) => {
        return (
          <S.WrapperTags key={index}>
            <S.RemoveTag>
              <S.TextRemoveTag>X</S.TextRemoveTag>
            </S.RemoveTag>
            <S.TextTags>{value}</S.TextTags>
          </S.WrapperTags>
        );
      })}
    </>
  );
};
