import { ISelectProps } from "models";
import React from "react";
import Select, { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";

import * as S from "./styles";
import { ReactComponent as Arrow } from "assets/icons/navbar/arrow-down.svg";
import { Controller } from "react-hook-form";

interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const animatedComponents = makeAnimated();

export const SelectComponent: React.FC<ISelectProps> = ({
  control,
  options,
  label,
  isMulti,
  ...props
}) => {
  const colourStyles: StylesConfig<ColourOption, true> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#fff",
      boxShadow: "none",
      borderRadius: 6,
      borderColor: "#d1d1d1",
      outline: "none",
    }),
    menu: (styles) => ({
      ...styles,
      zIndex: 10,
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: "#fff",
        color: "#1d2c4b",
        fontFamily: "Inter",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "400",
        cursor: "pointer",

        ":hover": {
          backgroundColor: "#D8E5F6",
        },
      };
    },
    valueContainer: (styles) => {
      return {
        ...styles,
        width: "unset",
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "#D8E5F6",
        borderRadius: 12,
        paddingLeft: 12,
        paddingRight: 12,
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: "#1d2c4b",
      fontFamily: "Inter",
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "400",
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: "#1d2c4b",
      fontFamily: "Inter",
      fontSize: 14,
      fontStyle: "normal",
      borderWidth: 0,
      ":hover": {
        cursor: "pointer",
      },
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: isMulti ? "block" : "none",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#1d2c4b",
      fontFamily: "Inter",
      fontSize: 14,
      fontStyle: "normal",
    }),
  };

  const DropDownIndicator = () => {
    return (
      <S.IconRight>
        <Arrow />
      </S.IconRight>
    );
  };

  const Placeholder = () => {
    return <></>;
  };

  animatedComponents.DropdownIndicator = DropDownIndicator;
  animatedComponents.Placeholder = Placeholder;

  return (
    <S.WrapperSelect>
      <Controller
        control={control}
        name={props.name as string}
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => {
          return (
            <>
              {label && <S.Label>{label}</S.Label>}
              <S.WrapperSelect>
                <Select
                  closeMenuOnSelect={isMulti ? false : true}
                  components={animatedComponents}
                  isMulti={isMulti}
                  defaultValue={
                    options.map((option) => {
                      if (option.value === value) return option;
                    }) as any
                  }
                  options={options as ColourOption[]}
                  onChange={onChange}
                  styles={colourStyles}
                ></Select>
              </S.WrapperSelect>
            </>
          );
        }}
      />
    </S.WrapperSelect>
  );
};
