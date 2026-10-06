import * as S from "./styles";

const Pagination = ({
    page,
    onChange,
    pageGroupSize = 10
}) => {
    if (!page || page.totalPages < 1) {
        return null;
    }

    const currentPage = page.number;
    const totalPages = page.totalPages;

    const currentGroup = Math.floor(currentPage / pageGroupSize);

    const startPage = currentGroup * pageGroupSize;

    const endPage = Math.min( startPage + pageGroupSize, totalPages );

    const pages = Array.from({ length: endPage - startPage }, (_, index) => startPage + index);

    return (
        <S.Container>
            <S.PageButton
                type="button"
                disabled={page.first}
                onClick={() =>
                    onChange(currentPage - 1)
                }
            >이전</S.PageButton>
            {pages.map(pageNumber => (
                <S.PageButton
                    key={pageNumber}
                    type="button"
                    $active={
                        pageNumber === currentPage
                    }
                    onClick={() =>
                        onChange(pageNumber)
                    }
                >
                    {pageNumber + 1}
                </S.PageButton>
            ))}
            <S.PageButton
                type="button"
                disabled={page.last}
                onClick={() =>
                    onChange(currentPage + 1)
                }
            >다음</S.PageButton>
        </S.Container>
    );
};

export default Pagination;