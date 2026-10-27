import * as S from "./styles";

const QnaPost = ({post}) => {
    return (
        <S.Container>
            {post.content}
        </S.Container>
    );
}

export default QnaPost;