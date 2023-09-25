import React from "react";
import { ReactComponent as Logo } from "assets/icons/navbar/logo.svg";
import { ReactComponent as Home } from "assets/icons/navbar/home-nav-bar.svg";
import { ReactComponent as Notifications } from "assets/icons/navbar/notifications.svg";
import { ReactComponent as Settings } from "assets/icons/navbar/settings.svg";
import { ReactComponent as Profile } from "assets/icons/navbar/profile.svg";
import { ReactComponent as Arrow } from "assets/icons/navbar/arrow-down.svg";
import * as S from "./styles";

export const NavBar: React.FC = ({ ...props }) => {
  return (
    <S.Container>
      <S.Left>
        <Logo />
        <S.Row>
          <Home />
          <S.Title>Dryve - Ribeirão Preto</S.Title>
          <Arrow />
        </S.Row>
      </S.Left>

      <S.Right>
        <S.Row>
          <Notifications />

          <Settings />

          <Profile />
        </S.Row>
      </S.Right>
    </S.Container>
  );
};
