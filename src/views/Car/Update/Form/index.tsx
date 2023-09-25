import React from "react";
import * as S from "./styles";
import { Informations } from "./Informations";
import { Inspects } from "./Inspects";
import { Photos } from "./Photos";
import { Contacts } from "./Contacts";

export const Form: React.FC = ({ ...props }) => {
  return (
    <S.Container>
      <S.Row>
        <S.Left>
          <S.Title>Editar veículo</S.Title>
        </S.Left>
      </S.Row>

      <S.WrapperForm>
        <Informations />
        <S.Margin32 />
        <S.WrapperBoxForm>
          <Inspects />
          <Photos />
          <Contacts />
        </S.WrapperBoxForm>
      </S.WrapperForm>
    </S.Container>
  );
};
