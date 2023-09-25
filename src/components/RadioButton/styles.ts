import styled, { css } from "styled-components";

export const WrapperRadio = styled.button`
  width: 100%;
  background-color: transparent;
  border: 0;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;

export const Circle = styled.div<{ status?: boolean }>`
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  background-color: #fff;
  border: 2px solid #d1d1d1;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ status }) =>
    status &&
    css`
      background-color: #0065ff;
      border: unset;
    `};
`;

export const CircleActive = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 9px;
  background-color: #fff;
`;

export const TextRadio = styled.p`
  color: #000;
  font-family: "Inter";
  font-size: 0.875em;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.35px;
  padding-left: 8px;
  margin: 0;
`;
