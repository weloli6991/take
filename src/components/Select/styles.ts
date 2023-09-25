import styled, { css } from "styled-components";

export const WrapperSelect = styled.div`
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
  top: -14px;
  left: 12px;
  z-index: 1;
`;

export const Select = styled.select`
  width: 100%;
  height: 38px;
  border-radius: 6px;
  border: 1px solid #d1d1d1;
  background-color: #fff;
  outline: none;
  padding: 0 12px;
  padding-right: 29px;
  box-sizing: border-box;

  color: #1d2c4b;
  font-family: "Inter";
  font-size: 0.875em;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.35px;

  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;

  ::placeholder {
    color: #a3a3a3;
    opacity: 1;
  }

  ::-ms-input-placeholder {
    color: #a3a3a3;
  }
`;

export const IconRight = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 9px;
  margin-right: 9px;
`;
