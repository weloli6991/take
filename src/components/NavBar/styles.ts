import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 72px;
  background-color: #fff;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-sizing: border-box;
  flex-wrap: wrap;

  @media screen and (max-width: 468px) {
    padding-bottom: 12px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 468px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding-left: 7px;
`;

export const Title = styled.p`
  color: #1d2c4b;
  font-family: "Inter";
  font-size: 0.875em;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.35px;
  padding: 0 4px;
`;
