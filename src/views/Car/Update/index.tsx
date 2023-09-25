import React, { useState } from "react";
import { Cars, Menu, NavBar } from "components";
import * as S from "./styles";
import { Form } from "./Form";

export const Update = () => {
  return (
    <>
      <NavBar />
      <S.Row>
        <Menu />
        <Form />
      </S.Row>
    </>
  );
};
