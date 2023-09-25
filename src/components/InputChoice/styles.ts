import styled, { css } from "styled-components";

export const WrapperInputChoice = styled.button<{ status: boolean }>`
  min-width: 43px;
  background-color: #efefef;
  padding: 8px 16px;
  border-radius: 30px;
  border: 0;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  ${({ status }) =>
    status &&
    css`
      background-color: #0065ff;
    `};
`;

export const TextInputChoice = styled.p<{ status: boolean }>`
  color: "#000";
  font-family: "Inter";
  font-size: 0.875em;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.35px;
  margin: 0;

  ${({ status }) =>
    status &&
    css`
      color: #fff;
    `};
`;
