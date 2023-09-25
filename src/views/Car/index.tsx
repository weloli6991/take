import React, { useState } from "react";
import { Cars, Menu, NavBar } from "components";
import * as S from "./styles";

export const Car = () => {
  return (
    <>
      <NavBar />
      <S.Row>
        <Menu />
        <Cars />
      </S.Row>
    </>
  );
};
