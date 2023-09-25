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
        color: "#000",
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
      color: "#1D2C4B",
      fontFamily: "Inter",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: 500,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: "#000",
      borderWidth: 0,
      ":hover": {
        cursor: "pointer",
      },
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: isMulti ? "block" : "none",
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
