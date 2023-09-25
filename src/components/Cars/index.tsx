import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactComponent as Search } from "assets/icons/input/search.svg";
import { ReactComponent as Plus } from "assets/icons/input/plus.svg";
import { ReactComponent as Filter } from "assets/icons/input/filter.svg";
import { ReactComponent as Bullet } from "assets/icons/table/bullet.svg";
import { useForm } from "react-hook-form";
import { ICar } from "models";
import axios from "axios";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Loading } from "components/Loading";
import { useNavigate } from "react-router-dom";

export const Cars: React.FC = ({ ...props }) => {
  const navigate = useNavigate();
  const [listCars, setListCars] = useState<ICar[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({});

  useEffect(() => {
    getListCars();
  }, []);

  const getListCars = () => {
    axios
      .get("http://www.mocky.io/v2/5eb553df31000060006994a8")
      .then((response) => {
        setListCars(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <S.Container>
      <S.Row>
        <S.Left>
          <S.Title>Veículos</S.Title>
          <S.WrapperSearch>
            <Input
              control={control}
              name="search"
              placeholder="Buscar..."
              iconRight={<Search />}
            />
          </S.WrapperSearch>
        </S.Left>

        <S.Right>
          <S.WrapperButton>
            <Button
              title="Filtrar"
              iconLeft={<Filter />}
              typeButton="outline"
            />
          </S.WrapperButton>
          <Button title="Adicionar" iconLeft={<Plus />} typeButton="normal" />
        </S.Right>
      </S.Row>

      <S.WrapperTable>
        {loading ? (
          <S.WrapperLoading>
            <Loading />
          </S.WrapperLoading>
        ) : (
          <S.Table>
            <S.Tr>
              <S.Th>Dados do veículo</S.Th>
              <S.Th hidde={true}>REF</S.Th>
              <S.Th hidde={true}>Placa</S.Th>
              <S.Th hidde={true}>Data</S.Th>
            </S.Tr>
            {listCars.map((car, index) => {
              return (
                <S.Tr
                  key={index}
                  onClick={() =>
                    navigate("update-car", {
                      state: { car, cars: listCars },
                    })
                  }
                >
                  <S.Td>
                    <S.RowTable>
                      <S.ImageCar src={car?.image} />
                      <S.WrapperTexts>
                        <S.TitleTable>
                          {car?.brand_name} {car?.model_name}
                        </S.TitleTable>
                        <S.TextTable>{car?.version_name}</S.TextTable>
                        <S.RowTable2>
                          <S.TextTable>
                            {car?.manufacturing_year}/{car?.model_year}
                          </S.TextTable>
                          <S.WrapperBullet>
                            <S.Bullet>
                              <Bullet />
                            </S.Bullet>
                          </S.WrapperBullet>
                          <S.TextTable>{car?.fuel_type}</S.TextTable>
                        </S.RowTable2>
                        <S.RowTable2>
                          <S.TextTable>
                            {car?.mileage.toLocaleString("pt-br", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            })}{" "}
                            km
                          </S.TextTable>
                          <S.WrapperBullet>
                            <S.Bullet>
                              <Bullet />
                            </S.Bullet>
                          </S.WrapperBullet>
                          <S.TextPriceTable>
                            R${" "}
                            {car?.ad_selling_price.toLocaleString("pt-br", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </S.TextPriceTable>
                        </S.RowTable2>
                      </S.WrapperTexts>
                    </S.RowTable>
                  </S.Td>
                  <S.Td hidde={true}>
                    <S.TextTable>L4GVJEI</S.TextTable>
                  </S.Td>
                  <S.Td hidde={true}>
                    <S.TextTable>FTF5I78</S.TextTable>
                  </S.Td>
                  <S.Td hidde={true}>
                    <S.TextTable>24/07/2020</S.TextTable>
                  </S.Td>
                </S.Tr>
              );
            })}
          </S.Table>
        )}
      </S.WrapperTable>
    </S.Container>
  );
};
