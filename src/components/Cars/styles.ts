import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 24px;
  background-color: #f9f9f9;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  @media screen and (max-width: 872px) {
    display: block;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 872px) {
    display: block;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 872px) {
    display: block;
  }
`;

export const Title = styled.p`
  color: #1d2c4b;
  font-family: "Inter";
  font-size: 1.5em;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.6px;

  @media screen and (max-width: 872px) {
    margin-bottom: 10px;
  }
`;

export const WrapperSearch = styled.div`
  width: 100%;
  max-width: 275px;
  margin-left: 16px;

  @media screen and (max-width: 872px) {
    margin-left: 0px;
    margin-bottom: 10px;
    max-width: unset;
  }
`;

export const WrapperButton = styled.div`
  margin-right: 16px;

  @media screen and (max-width: 872px) {
    margin-right: 0px;
    margin-bottom: 10px;
  }
`;

export const WrapperTable = styled.table`
  width: 100%;
  padding: 0 24px;
`;

export const Table = styled.table`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #efefef;
  background: #fff;
  border-collapse: collapse;

  @media screen and (max-width: 872px) {
    margin-top: 10px;
  }
`;

export const Tr = styled.tr`
  border-bottom: 1pt solid #efefef;
  cursor: pointer;
`;

export const Th = styled.th<{ hidde?: boolean }>`
  color: #a3a3a3;
  font-family: "Inter";
  font-size: 0.875em;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.35px;
  text-align: left;
  padding-bottom: 16px;
  box-sizing: border-box;
  padding: 16px 16px;

  ${({ hidde }) =>
    hidde &&
    css`
      @media screen and (max-width: 872px) {
        display: none;
      }
    `};
`;

export const Td = styled.td<{ hidde?: boolean }>`
  box-sizing: border-box;
  padding: 8px 16px;

  ${({ hidde }) =>
    hidde &&
    css`
      @media screen and (max-width: 872px) {
        display: none;
      }
    `};
`;

export const NavigateButton = styled.button`
  width: 100%;
  border: 0;
  background-color: transparent;
`;

export const RowTable = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 872px) {
    display: block;
  }
`;

export const RowTable2 = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperTexts = styled.div`
  padding-left: 16px;

  @media screen and (max-width: 872px) {
    padding: 0;
  }
`;

export const TitleTable = styled.p`
  color: #1d2c4b;
  font-family: "Inter";
  font-size: 0.75em;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: -0.3px;
  margin: 0;
  margin-bottom: 5px;
`;

export const TextTable = styled.p`
  color: #1d2c4b;
  font-family: "Inter";
  font-size: 0.75em;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.3px;
  margin: 0;
  margin-bottom: 5px;
`;

export const TextPriceTable = styled.p`
  color: #0065ff;
  font-family: "Inter";
  font-size: 0.75em;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: -0.3px;
  margin: 0;
  margin-bottom: 5px;
`;

export const ImageCar = styled.img`
  width: 96px;
  height: 72px;
`;

export const WrapperBullet = styled.div`
  position: relative;
  width: 8px;
  height: 8px;
  margin: 0 2px;
`;

export const Bullet = styled.div`
  position: absolute;
  bottom: -1px;
`;

export const WrapperLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
