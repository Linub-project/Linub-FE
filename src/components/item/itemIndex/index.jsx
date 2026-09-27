import { useEffect, useState } from "react";
import * as S from "./styles";

const ItemIndex = ({ sections = [] }) => {
    const [selectedIndex, setSelectedIndex] = useState("header");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries.find((entry) => entry.isIntersecting);

                if (visibleEntry) {
                    setSelectedIndex(visibleEntry.target.id);
                }
            },
            {
                root: null,
                rootMargin: "-20% 0px -70% 0px",
                threshold: 0,
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);

            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [sections]);

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