import { useEffect, useRef, useState } from "react";
import * as S from "./styles";

const HorizontalTab = ({ tabs = [], value, onChange }) => {
    const refs = useRef([]);
    const [underline, setUnderline] = useState({
        width: 0,
        offset: 0
    });

    useEffect(() => {
        const updateUnderline = () => {
            const idx = tabs.findIndex(tab => tab.id === value);
            const element = refs.current[idx];

            if (!element) return;

            setUnderline({
                width: element.offsetWidth,
                offset: element.offsetLeft
            });
        };

        updateUnderline();

        const observer = new ResizeObserver(updateUnderline);

        refs.current.forEach(element => {
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [tabs, value]);

    return (
        <S.TabWrapper>
            {tabs.map((tab, idx) => (
                <S.NavigateText
                    key={tab.id}
                    ref={el => refs.current[idx] = el}
                    className={value === tab.id ? "typo-title-1" : "typo-content-1"}
                    $active={value === tab.id}
                    onClick={() => onChange(tab.id)}
                    type="button"
                >
                    {tab.label}
                </S.NavigateText>
            ))}

            <S.Underline
                $width={underline.width}
                $offset={underline.offset}
            />
        </S.TabWrapper>
    );
};

export default HorizontalTab;