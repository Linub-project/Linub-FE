import * as S from "./styles";

const FreePost = ({post}) => {
    return (
        <S.Container>
            {post.content}
        </S.Container>
    );
}

export default FreePost;