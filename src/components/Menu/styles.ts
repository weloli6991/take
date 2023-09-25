import styled, { css } from "styled-components";

export const ContainerPrincipal = styled.div<{ menuOpen: boolean }>`
  width: 280px;
  height: ${window.innerHeight - 72}px;

  ${({ menuOpen }) =>
    !menuOpen &&
    css`
      width: 88px;
    `};

  @media screen and (max-width: 768px) {
    width: 88px;
  }
`;

export const SideBarLateral = styled.nav<{ menuOpen: boolean }>`
  width: 280px;
  height: ${window.innerHeight - 72}px;
  position: relative;
  transition: width 100ms ease-in;
  background: #fff;
  box-shadow: -1px 0px 0px 0px #efefef inset;

  ${({ menuOpen }) =>
    !menuOpen &&
    css`
      width: 88px;
    `};

  @media screen and (max-width: 768px) {
    width: 88px;
    position: absolute;
  }
`;

export const Ul = styled.ul`
  padding: 24px 24px;
  margin: 0;
`;

export const ItemDescricao = styled.label<{ menuOpen: boolean }>`
  cursor: pointer;
  white-space: nowrap;
  color: #1d2c4b;
  font-family: "Inter";
  font-size: 0.875em;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.35px;
  box-sizing: border-box;

  ${({ menuOpen }) =>
    !menuOpen &&
    css`
      display: none;
    `};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li<{ active: boolean }>`
  height: 24px;
  list-style-type: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  &:hover {
    background-color: #0065ff;
    border-radius: 6px;

    ${ItemDescricao} {
      color: #ffffff;
    }
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #0065ff;
      border-radius: 6px;

      ${ItemDescricao} {
        color: #ffffff;
      }
    `};
`;

export const ButtonOpen = styled.button`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1em 1.5em;

  &:hover {
    background-color: #668cff;
  }
`;

export const ItemActive = styled.a`
  display: flex;
  align-items: center;

  text-decoration: none;
`;

export const ItemIcon = styled.div`
  margin-right: 0.5em;
`;

export const ButtonShowMenu = styled.button<{ menuOpen: boolean }>`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 24px;
  right: 24px;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  ${({ menuOpen }) =>
    !menuOpen &&
    css`
      transform: rotate(180deg);
    `};

  @media screen and (max-width: 768px) {
    transform: rotate(180deg);
    display: none;
  }
`;
