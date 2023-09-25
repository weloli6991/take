import React from "react";
import * as S from "../styles";
import CarInspect from "assets/icons/car-inspect.png";

export const Inspects: React.FC = ({ ...props }) => {
  return (
    <S.BoxForm width={100}>
      <S.Label>Notas de inspeção</S.Label>

      <S.WrapperCarInspectImg>
        <S.CarInspectImg src={CarInspect} />
      </S.WrapperCarInspectImg>
    </S.BoxForm>
  );
};
