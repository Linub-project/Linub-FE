import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};

    max-width: 100%;
    box-sizing: border-box;

    border-radius: ${({ $radius }) => $radius};
    overflow: hidden;
`;

export const Image = styled.img`
    display: block;

    width: 100%;
    height: 100%;
    max-height: ${({ $maxHeight }) => $maxHeight};

    object-fit: ${({ $fit }) => $fit};

    cursor: ${({ $clickable }) => $clickable ? "zoom-in" : "default"};
`;

export const Fallback = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100px;

    padding: 16px;
    box-sizing: border-box;

    background-color: var(--color-bg-subtle);
    color: var(--color-text-default);
    text-align: center;
`;

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 9999;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 32px;
    box-sizing: border-box;

    background-color: rgba(0, 0, 0, 0.85);
    cursor: zoom-out;
`;

export const PreviewImage = styled.img`
    display: block;

    max-width: 100%;
    max-height: 100%;

    width: auto;
    height: auto;

    object-fit: contain;

    border-radius: 4px;
    cursor: default;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;

    border: none;
    border-radius: 50%;

    background-color: rgba(255, 255, 255, 0.15);
    color: white;

    font-size: 28px;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }
`;