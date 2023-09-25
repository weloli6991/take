import React from "react";
import * as S from "../styles";

export const Contacts: React.FC = ({ ...props }) => {
  const contacts = [
    {
      firstLetters: "AB",
      name: "Alfa Bravo",
      email: "email@domainname.com",
      phone: "(16) 99999-9999",
    },
    {
      firstLetters: "CD",
      name: "Charlie Delta",
      email: "email@domainname.com",
      phone: "(16) 99999-9999",
    },
    {
      firstLetters: "EF",
      name: "Echo Foxtrot",
      email: "email@domainname.com",
      phone: "(16) 99999-9999",
    },
  ];

  return (
    <S.BoxForm width={100}>
      <S.Label>Contatos vinculados</S.Label>

      <S.WrapperContacts>
        {contacts.map((contact, index) => {
          return (
            <S.WrapperContact key={index} index={index}>
              <S.CircleName>
                <S.TextCircleName>{contact.firstLetters}</S.TextCircleName>
              </S.CircleName>

              <S.WrapperText>
                <S.TextName>{contact.name}</S.TextName>
                <S.Text>{contact.email}</S.Text>
                <S.Text>{contact.phone}</S.Text>
              </S.WrapperText>
            </S.WrapperContact>
          );
        })}
      </S.WrapperContacts>
    </S.BoxForm>
  );
};
