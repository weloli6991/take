import styled, { css } from "styled-components";

export const Row = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

export const AddTag = styled.button`
  min-width: 43px;
  background-color: #fff;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid #cce8fe;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  cursor: pointer;
  margin-bottom: 16px;
`;

export const TextAddTags = styled.p`
  color: #0065ff;
  font-family: "Inter";
  font-size: 0.625em;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: -0.3px;
  margin: 0;
`;

export const RemoveTag = styled.button`
  width: 0.625em;
  height: 0.625em;
  background-color: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  cursor: pointer;
`;

export const TextRemoveTag = styled.p`
  color: #1d2c4b;
  font-family: "Inter";
  font-size: 0.625em;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: -0.3px;
  margin: 0;
`;

export const WrapperTags = styled.div`
  min-width: 43px;
  background-color: #f7f7f7;
  padding: 6px 8px;
  border-radius: 6px;
  border: 0;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  margin-bottom: 16px;
`;

export const TextTags = styled.p`
  color: #1d2c4b;
  font-family: "Inter";
  font-size: 0.625em;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: -0.3px;
  margin: 0;
`;
