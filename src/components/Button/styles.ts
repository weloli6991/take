import { TTypeButton } from "models";
import styled, { css } from "styled-components";

export const Button = styled.button<{ typeButton: TTypeButton }>`
  width: 100%;
  height: 38px;
  border-radius: 6px;
  border-width: 0;
  padding: 8px 16px;
  box-sizing: border-box;
  background: #0065ff;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ typeButton }) =>
    typeButton === "outline" &&
    css`
      background-color: #fff;
      border: 1px solid #cce8fe;
    `};
`;

export const Title = styled.p<{ typeButton: TTypeButton }>`
  color: #fff;
  font-family: "Inter";
  font-size: 0.875em;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: -0.35px;
  margin: 0;

  ${({ typeButton }) =>
    typeButton === "outline" &&
    css`
      color: #0065ff;
    `};
`;

export const IconLeft = styled.div`
  width: 22px;
  height: 22px;
  margin-right: 8px;
`;
