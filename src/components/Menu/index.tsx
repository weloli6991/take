import React, { useState } from "react";
import { ReactComponent as Dashboard } from "assets/icons/menu/dashboard.svg";
import { ReactComponent as Tags } from "assets/icons/menu/tags.svg";
import { ReactComponent as Calendar } from "assets/icons/menu/calendar.svg";
import { ReactComponent as Car } from "assets/icons/menu/car.svg";
import { ReactComponent as Rocket } from "assets/icons/menu/rocket.svg";
import { ReactComponent as User } from "assets/icons/menu/user.svg";
import { ReactComponent as Chart } from "assets/icons/menu/chart.svg";
import { ReactComponent as Bank } from "assets/icons/menu/bank.svg";
import { ReactComponent as ButtonShowMenu } from "assets/icons/menu/button-show-menu.svg";
import * as S from "./styles";

export const Menu: React.FC = ({ ...props }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const [mouseEnter, setMouseEnter] = useState<string>("");
  const [active, setActive] = useState<string>("");

  const listMenu = [
    { name: "dashboard", title: "Resumo", icon: Dashboard },
    { name: "tags", title: "Oportunidades", icon: Tags },
    { name: "calendar", title: "Agenda", icon: Calendar },
    { name: "car", title: "Veículos", icon: Car },
    { name: "rocket", title: "Publicação", icon: Rocket },
    { name: "user", title: "Contatos", icon: User },
    { name: "chart", title: "Analytics", icon: Chart },
    { name: "bank", title: "Financeiro", icon: Bank },
  ];

  return (
    <S.ContainerPrincipal menuOpen={menuOpen}>
      <S.SideBarLateral menuOpen={menuOpen}>
        <S.Ul>
          {listMenu.map((list, index) => {
            return (
              <S.MenuItem
                key={index}
                onMouseEnter={() => setMouseEnter(list.name)}
                onMouseLeave={() => setMouseEnter("")}
                active={active === list.name}
                onClick={() => setActive(list.name)}
              >
                <S.ItemIcon>
                  <list.icon
                    stroke={
                      mouseEnter === list.name || active === list.name
                        ? "#ffffff"
                        : "#1D2C4B"
                    }
                  />
                </S.ItemIcon>
                <S.ItemDescricao menuOpen={menuOpen}>
                  {list.title}
                </S.ItemDescricao>
              </S.MenuItem>
            );
          })}
        </S.Ul>

        <S.ButtonShowMenu
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        >
          <ButtonShowMenu />
        </S.ButtonShowMenu>
      </S.SideBarLateral>
    </S.ContainerPrincipal>
  );
};
