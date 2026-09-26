import { useState } from "react";
import * as S from "./styles";

const ItemIndex = ({ sections = [] }) => {
    const [selectedIndex, setSelectedIndex] = useState("header");

    return (
        <S.Container>
            {sections.map(({ id, label }) => {
              const isSelected = selectedIndex === id;
              return (
                  <S.Category
                    onClick={() => setSelectedIndex(id)}
                    key={id} href={`#${id}`}
                    $isSelected={isSelected}
                  >
                    {label}
                  </S.Category>
              );
            })}
        </S.Container>
    );
};

export default ItemIndex;