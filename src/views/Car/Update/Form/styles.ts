import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 24px;
  background-color: #f9f9f9;

  @media screen and (max-width: 768px) {
    width: calc(100% - 88px);
  }
`;

export const Div = styled.div`
  padding: 0 32px;
  flex-wrap: wrap;
`;

export const Div2 = styled.div<{ margin?: number; marginBottom?: number }>`
  width: 50%;
  margin-right: ${({ margin }) => (margin ? margin : 0)}px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;

  @media screen and (max-width: 615px) {
    width: 100%;
    margin-bottom: 16px;
  }
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

export const Row2 = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

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

export const WrapperForm = styled.div`
  width: 100%;
  display: flex;
  padding: 0 24px;
  box-sizing: border-box;
  justify-content: space-between;

  /* width */
  ::-webkit-scrollbar {
    width: 1px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 0px;
    width: 1px;
  }

  @media screen and (max-width: 1306px) {
    display: block;
  }
`;

export const WrapperBoxForm = styled.div`
  width: 50%;

  @media screen and (max-width: 1306px) {
    width: 100%;
  }
`;

export const BoxForm = styled.div<{ width?: number }>`
  width: ${({ width }) => (width ? width : 50)}%;
  border-radius: 8px;
  border: 1px solid #efefef;
  background: #fff;
  margin-bottom: 24px;

  @media screen and (max-width: 1306px) {
    width: 100%;
  }
`;

export const Margin32 = styled.div`
  width: 32px;
`;

export const Label = styled.p`
  color: #1d2c4b;
  font-family: "Inter";
  font-size: 0.875em;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.35px;
  padding: 16px 32px;
  box-sizing: border-box;
  margin: 0;
  border-bottom: 1px solid #efefef;
`;

export const TextColumn = styled.p<{ active: boolean }>`
  color: #a3a3a3;
  font-family: "Inter";
  font-size: 0.875em;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: -0.35px;
  margin: 0;
  margin-right: 40px;
  padding-bottom: 16px;
  box-sizing: border-box;
  min-width: 88px;

  ${({ active }) =>
    active &&
    css`
      border-bottom: 4px solid #0065ff;
      color: #0065ff;
    `};
`;

export const RowRadio = styled.div`
  display: flex;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const RowInputChoice = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const RowColumn = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0px 32px;
  margin: 32px 0px;
  box-sizing: border-box;
  overflow: scroll;
  overflow-y: hidden;
`;

export const Underline = styled.div`
  width: calc(100% - 64px);
  height: 1px;
  background-color: #efefef;
  position: absolute;
  bottom: 0px;
  box-sizing: border-box;
`;

export const TitleForm = styled.p<{ removePadding?: boolean }>`
  color: #0065ff;
  font-family: "Inter";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.4px;
  margin: 0;
  padding: ${({ removePadding }) => (removePadding ? "0px" : "0 32px")};
  margin-bottom: 26px;
`;

export const RowInput = styled.div`
  display: flex;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;
  margin-bottom: 16px;

  @media screen and (max-width: 615px) {
    display: block;
  }
`;

export const RowInput2 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 615px) {
    display: block;
  }
`;

export const WrapperInput = styled.div<{
  maxWidth?: number;
  margin?: number;
  marginBottom?: number;
}>`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth + "px" : "100%")};
  margin-right: ${({ margin }) => (margin ? margin : 0)}px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;

  @media screen and (max-width: 615px) {
    max-width: unset;
    margin-bottom: 16px;
  }
`;

export const WrapperRadio = styled.div<{ margin?: number }>`
  margin-right: ${({ margin }) => (margin ? margin : 0)}px;
  margin-bottom: 16px;
`;

export const Option = styled.option``;

export const WrapperPrice = styled.div<{ active?: boolean }>`
  width: 100%;
  min-height: 48px;
  border-radius: ${({ active }) =>
    active ? "6px 6px 0px 0px" : "0px 0px 6px 6px"};
  border: ${({ active }) =>
    active ? "1px solid #36b37e" : "1px solid #d1d1d1"};
  background: ${({ active }) => (active ? "#36b37e" : "#fff")};
  padding-bottom: 8px;
`;

export const TitlePrice = styled.p<{ active?: boolean }>`
  color: ${({ active }) => (active ? "#fff" : "#1D2C4B")};
  text-align: center;
  font-family: "Inter";
  font-size: 0.625em;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.3px;
  margin: 0;
  margin-top: 8px;
  margin-bottom: 6px;
`;

export const Price = styled.p<{ active?: boolean }>`
  color: ${({ active }) => (active ? "#fff" : "#1D2C4B")};
  text-align: center;
  font-family: "Inter";
  font-size: 0.875em;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: -0.3px;
  margin: 0;
`;

export const Underline2 = styled.div`
  width: 100%;
  height: 1px;
  background-color: #efefef;
  margin-bottom: 16px;
`;

export const ButtonRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const WrapperButton = styled.div<{ maxWidth?: number }>`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth + "px" : "100%")};
  margin-right: 16px;
  margin-bottom: 16px;
`;

export const WrapperCarInspectImg = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 24px;
  box-sizing: border-box;
`;

export const CarInspectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const AddMedia = styled.button`
  width: 138px;
  height: 98px;
  border-radius: 5px;
  border: 1px dashed #d1d1d1;
  background: #eaf9ff;
  padding: 0;
  margin: 4px;
`;

export const LabelAddMedia = styled.label`
  width: 138px;
  height: 98px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #0065ff;
  font-family: "Inter";
  font-size: 0.875em;
  font-style: normal;
  cursor: pointer;
`;

export const Media = styled.img`
  width: 138px;
  height: 98px;
  border-radius: 4px;
  border: 1px solid #efefef;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  margin: 4px;
`;

export const Input = styled.input`
  display: none;
`;

export const WrapperMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 32px;
`;

export const WrapperContacts = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  overflow-y: hidden;
  padding: 32px;
  box-sizing: border-box;
  height: 118px;
`;

export const CircleName = styled.div`
  width: 64px;
  height: 64px;
  background-color: #eaf9ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 64px;
  margin-right: 16px;
`;

export const TextCircleName = styled.p`
  color: #0065ff;
  text-align: center;
  font-family: "Inter";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`;

export const WrapperContact = styled.div<{ index: number }>`
  display: flex;
  margin-right: 32px;
  position: absolute;
  left: ${({ index }) => index * 260}px;
  padding: 0 32px;
`;

export const WrapperText = styled.div``;

export const TextName = styled.p`
  color: #1d2c4b;
  font-family: "Inter";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  color: #666;
  font-family: "Inter";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  margin-bottom: 8px;
`;
