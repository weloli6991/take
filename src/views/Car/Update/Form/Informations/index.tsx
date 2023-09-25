import React, { useState } from "react";
import * as S from "../styles";
import { useForm } from "react-hook-form";
import {
  Button,
  Input,
  InputChoice,
  RadioButton,
  SelectComponent,
  Tags,
} from "components";
import { ClassificationsTypes, ConditionsTypes } from "../../model";
import { useLocation } from "react-router-dom";
import { ICar } from "models";
import { Currency } from "components/Input/Currency";

export const Informations: React.FC = ({ ...props }) => {
  const [newCar, setNewCar] = useState<boolean>(false);
  const { state } = useLocation();
  const cars = state.cars as ICar[];
  const car = state.car as ICar;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const accessories = ["Alarme", "Ar-condicionado"];
  const characteristics = ["Único dono"];
  const states = ["SP"];
  const cities = ["Ribeirão Preto"];

  const [classification, setClassification] = useState<
    "A" | "B" | "C" | "D" | "E"
  >("A");
  const [condition, setCondition] = useState<"reasonable" | "good" | "great">(
    "reasonable"
  );
  const [tags, setTags] = useState<string[]>(["Particular", "Super oferta"]);
  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    defaultValues: {
      brand: car.brand_name,
      yearManufacture: car.manufacturing_year,
      yearModel: car.model_year,
      version: car.version_name,
      fuel: car.fuel_type,
      transmissionType: car.transmission_type,
      mileage: car.mileage,
      priceMax: `${car.ad_selling_price}`,
      priceMin: `${car.ad_selling_price}`,
    },
  });

  return (
    <S.BoxForm>
      <S.Label>Informações</S.Label>

      <S.RowColumn>
        <S.TextColumn active={true}>Dados do veículo</S.TextColumn>
        <S.TextColumn active={false}>Preço médio</S.TextColumn>

        <S.Underline />
      </S.RowColumn>

      <S.TitleForm>Dados do veículo</S.TitleForm>

      <S.RowRadio>
        <S.WrapperRadio margin={16}>
          <RadioButton
            text="0 km"
            status={newCar}
            setStatus={() => setNewCar(true)}
          />
        </S.WrapperRadio>

        <S.WrapperRadio>
          <RadioButton
            text="Seminovo"
            status={!newCar}
            setStatus={() => setNewCar(false)}
          />
        </S.WrapperRadio>
      </S.RowRadio>

      <S.RowInput>
        <S.WrapperInput maxWidth={132} margin={16}>
          <Input label="Placa" control={control} name="plate" />
        </S.WrapperInput>

        <S.WrapperInput maxWidth={132}>
          <Input label="Renavam" control={control} name="renavam" />
        </S.WrapperInput>
      </S.RowInput>

      <S.RowInput>
        <S.WrapperInput margin={16}>
          <SelectComponent
            label="Marca"
            control={control}
            name="brand"
            options={cars.map((carFilter) => {
              return {
                value: carFilter.brand_name,
                label: carFilter.brand_name,
              };
            })}
          />
        </S.WrapperInput>

        <S.WrapperInput>
          <SelectComponent
            options={months.map((month) => {
              return {
                value: month,
                label: month,
              };
            })}
            label="Modelo"
            control={control}
            name="model"
          />
        </S.WrapperInput>
      </S.RowInput>

      <S.RowInput>
        <S.WrapperInput margin={16}>
          <SelectComponent
            options={[
              {
                value: "Hatchback",
                label: "Hatchback",
              },
            ]}
            label="Carroceira"
            control={control}
            name="carriage"
          />
        </S.WrapperInput>

        <S.RowInput2>
          <S.WrapperInput maxWidth={132} margin={16}>
            <SelectComponent
              options={cars.map((carFilter) => {
                return {
                  value: carFilter.manufacturing_year,
                  label: carFilter.manufacturing_year,
                };
              })}
              label="Ano fabricação"
              control={control}
              name="yearManufacture"
            />
          </S.WrapperInput>

          <S.WrapperInput maxWidth={132}>
            <SelectComponent
              options={cars.map((carFilter) => {
                return {
                  value: carFilter.model_year,
                  label: carFilter.model_year,
                };
              })}
              label="Ano modelo"
              control={control}
              name="yearModel"
            />
          </S.WrapperInput>
        </S.RowInput2>
      </S.RowInput>

      <S.RowInput>
        <S.WrapperInput>
          <SelectComponent
            options={cars.map((carFilter) => {
              return {
                value: carFilter.version_name,
                label: carFilter.version_name,
              };
            })}
            label="Versão"
            control={control}
            name="version"
          />
        </S.WrapperInput>
      </S.RowInput>

      <S.RowInput>
        <S.WrapperInput margin={16}>
          <SelectComponent
            options={cars.map((carFilter) => {
              return {
                value: carFilter.fuel_type,
                label: carFilter.fuel_type,
              };
            })}
            label="Combustível"
            control={control}
            name="fuel"
          />
        </S.WrapperInput>

        <S.WrapperInput>
          <SelectComponent
            options={cars.map((carFilter) => {
              return {
                value: carFilter.transmission_type,
                label: carFilter.transmission_type,
              };
            })}
            label="Câmbio"
            control={control}
            name="transmissionType"
          />
        </S.WrapperInput>
      </S.RowInput>

      <S.RowInput>
        <S.WrapperInput margin={16}>
          <Input label="Quilometragem" control={control} name="mileage" />
        </S.WrapperInput>

        <S.WrapperInput>
          <SelectComponent
            options={cars.map((carFilter) => {
              return {
                value: carFilter.brand_name,
                label: carFilter.brand_name,
              };
            })}
            label="Cor"
            control={control}
            name="color"
          />
        </S.WrapperInput>
      </S.RowInput>

      <S.TitleForm>Acessórios</S.TitleForm>

      <S.RowInput>
        <S.WrapperInput>
          <SelectComponent
            options={accessories.map((accessory) => {
              return {
                value: accessory,
                label: accessory,
              };
            })}
            control={control}
            name="accessories"
            label="Acessórios"
            isMulti
          />
        </S.WrapperInput>
      </S.RowInput>

      <S.TitleForm>Características</S.TitleForm>

      <S.RowInput>
        <S.WrapperInput>
          <SelectComponent
            options={characteristics.map((characteristic) => {
              return {
                value: characteristic,
                label: characteristic,
              };
            })}
            control={control}
            name="characteristics"
            label="Características"
            isMulti
          />
        </S.WrapperInput>
      </S.RowInput>

      <S.TitleForm>Localização</S.TitleForm>

      <S.RowInput>
        <S.WrapperInput maxWidth={180} margin={16}>
          <SelectComponent
            options={states.map((state) => {
              return {
                value: state,
                label: state,
              };
            })}
            control={control}
            name="state"
            label="Estado"
            isMulti
          />
        </S.WrapperInput>

        <S.WrapperInput>
          <SelectComponent
            options={cities.map((city) => {
              return {
                value: city,
                label: city,
              };
            })}
            control={control}
            name="city"
            label="Cidade"
            isMulti
          />
        </S.WrapperInput>
      </S.RowInput>

      <S.Row2>
        <S.Div>
          <S.TitleForm removePadding>Classificação</S.TitleForm>

          <S.RowInputChoice>
            <S.WrapperRadio margin={7}>
              <InputChoice
                text="A"
                status={classification === ClassificationsTypes.A}
                setStatus={() => setClassification("A")}
              />
            </S.WrapperRadio>

            <S.WrapperRadio margin={7}>
              <InputChoice
                text="B"
                status={classification === ClassificationsTypes.B}
                setStatus={() => setClassification("B")}
              />
            </S.WrapperRadio>

            <S.WrapperRadio margin={7}>
              <InputChoice
                text="C"
                status={classification === ClassificationsTypes.C}
                setStatus={() => setClassification("C")}
              />
            </S.WrapperRadio>

            <S.WrapperRadio margin={7}>
              <InputChoice
                text="D"
                status={classification === ClassificationsTypes.D}
                setStatus={() => setClassification("D")}
              />
            </S.WrapperRadio>

            <S.WrapperRadio margin={7}>
              <InputChoice
                text="E"
                status={classification === ClassificationsTypes.E}
                setStatus={() => setClassification("E")}
              />
            </S.WrapperRadio>
          </S.RowInputChoice>
        </S.Div>

        <S.Div>
          <S.TitleForm removePadding>Condição geral do veículo</S.TitleForm>

          <S.RowInputChoice>
            <S.WrapperRadio margin={7}>
              <InputChoice
                text="Razoável"
                status={condition === ConditionsTypes.REASONABLE}
                setStatus={() => setCondition("reasonable")}
              />
            </S.WrapperRadio>

            <S.WrapperRadio margin={7}>
              <InputChoice
                text="Bom"
                status={condition === ConditionsTypes.GOOD}
                setStatus={() => setCondition("good")}
              />
            </S.WrapperRadio>

            <S.WrapperRadio margin={7}>
              <InputChoice
                text="Excelente"
                status={condition === ConditionsTypes.GREAT}
                setStatus={() => setCondition("great")}
              />
            </S.WrapperRadio>
          </S.RowInputChoice>
        </S.Div>
      </S.Row2>

      <S.TitleForm>Tags</S.TitleForm>

      <S.RowRadio>
        <Tags values={tags} />
      </S.RowRadio>

      <S.RowColumn>
        <S.TextColumn active={true}>Avaliação de venda</S.TextColumn>
        <S.TextColumn active={false}>Avaliação de revenda</S.TextColumn>
        <S.TextColumn active={false}>Preço desejado</S.TextColumn>

        <S.Underline />
      </S.RowColumn>

      <S.RowInput>
        <S.Div2 margin={16}>
          <S.WrapperInput marginBottom={16}>
            <Currency label="Preço máximo" control={control} name="priceMax" />
          </S.WrapperInput>

          <S.WrapperInput marginBottom={16}>
            <Currency label="Preço mínimo" control={control} name="priceMin" />
          </S.WrapperInput>
        </S.Div2>

        <S.Div2 marginBottom={16}>
          <S.WrapperPrice active>
            <S.TitlePrice active>Faixa de Preço KBB™</S.TitlePrice>
            <S.Price active>
              R${" "}
              {car.ad_selling_price.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              - R${" "}
              {car.ad_selling_price.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </S.Price>
          </S.WrapperPrice>
          <S.WrapperPrice>
            <S.TitlePrice>Preço para Particular</S.TitlePrice>
            <S.Price>
              R${" "}
              {car.ad_selling_price.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </S.Price>
          </S.WrapperPrice>
        </S.Div2>
      </S.RowInput>

      <S.Underline2 />

      <S.ButtonRight>
        <S.WrapperButton maxWidth={73}>
          <Button
            title="Salvar"
            typeButton="normal"
            onClick={() => history.back()}
          />
        </S.WrapperButton>
      </S.ButtonRight>
    </S.BoxForm>
  );
};
