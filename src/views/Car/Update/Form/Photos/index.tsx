import React, { useState } from "react";
import * as S from "../styles";
import { ReactComponent as Plus } from "assets/icons/input/plus.svg";

export const Photos: React.FC = ({ ...props }) => {
  const [files, setFiles] = useState<(Blob | MediaSource)[]>([]);

  const handleChange = (e: any) => {
    const newFiles = [...files] as (Blob | MediaSource)[];

    newFiles.push(URL.createObjectURL(e.target.files[0]) as any);
    setFiles(newFiles);
  };

  return (
    <S.BoxForm width={100}>
      <S.Label>Fotos do veículo</S.Label>

      <S.WrapperMedia>
        <S.Input type="file" id="file" onChange={handleChange} />
        <S.AddMedia>
          <S.LabelAddMedia htmlFor="file">
            <Plus stroke="#0065FF" /> Adicionar
          </S.LabelAddMedia>
        </S.AddMedia>

        {files.map((file: any, index) => {
          return <S.Media src={file} key={index} />;
        })}
      </S.WrapperMedia>
    </S.BoxForm>
  );
};
