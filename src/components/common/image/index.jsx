import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as S from "./styles";

const IMAGE_BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/images`;

const Image = ({
    src,
    alt = "이미지",
    width = "100%",
    height = "auto",
    maxHeight = "400px",
    fit = "contain",
    radius = "6px",
    fallback = "이미지를 불러오는데 실패했습니다.",
    preview = true,
    onClick,
    ...props
}) => {
    const [hasError, setHasError] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const imageUrl = src ? `${IMAGE_BASE_URL}/${src}` : null;

    useEffect(() => {
        setHasError(false);
        setIsOpen(false);
    }, [src]);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    const handleImageClick = (e) => {
        onClick?.(e);

        if (preview) {
            setIsOpen(true);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <S.Container
                $width={width}
                $height={height}
                $radius={radius}
            >
                {src && !hasError ? (
                    <S.Image
                        src={imageUrl}
                        alt={alt}
                        $fit={fit}
                        $maxHeight={maxHeight}
                        $clickable={preview}
                        onError={() => setHasError(true)}
                        onClick={handleImageClick}
                        onKeyDown={e => {
                            if (preview && (e.key === "Enter" || e.key === " ")) {
                                e.preventDefault();
                                handleImageClick(e);
                            }
                        }}
                        role={preview ? "button" : undefined}
                        tabIndex={preview ? 0 : undefined}
                        loading="lazy"
                        {...props}
                    />
                ) : (
                    <S.Fallback className="typo-content-1">
                        {fallback}
                    </S.Fallback>
                )}
            </S.Container>

            {isOpen && imageUrl && createPortal(
                <S.Overlay
                    onClick={handleClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${alt} 확대 보기`}
                >
                    <S.PreviewImage
                        src={imageUrl}
                        alt={alt}
                        onClick={e => e.stopPropagation()}
                    />
                </S.Overlay>,
                document.body
            )}
        </>
    );
};

export default Image;