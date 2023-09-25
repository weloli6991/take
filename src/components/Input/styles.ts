import InputMask from "react-input-mask";
import styled, { css } from "styled-components";

export const WrapperInput = styled.div`
  width: 100%;
  position: relative;
`;

export const Label = styled.p`
  color: #a3a3a3;
  font-family: "Inter";
  font-size: 0.625em;
  font-style: normal;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: -0.25px;
  background-color: #fff;
  position: absolute;
  bottom: 22px;
  left: 12px;
`;

export const Input = styled(InputMask)<{ iconRight: boolean }>`
  width: 100%;
  height: 38px;
  border-radius: 6px;
  border: 1px solid #d1d1d1;
  background-color: #fff;
  outline: none;
  padding: 0 12px;
  padding-right: ${({ iconRight }) => (iconRight ? 29 : 12)}px;
  box-sizing: border-box;

  color: #1d2c4b;
  font-family: "Inter";
  font-size: 0.875em;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.35px;

  ::placeholder {
    color: #a3a3a3;
    opacity: 1;
  }

  ::-ms-input-placeholder {
    color: #a3a3a3;
  }
`;

export const IconRight = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 9px;
  right: 9px;
`;
