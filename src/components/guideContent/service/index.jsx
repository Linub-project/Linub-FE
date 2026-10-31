import * as PS from "../styles";

const Service = () => {
    return (
        <PS.ContentContainer>
            <PS.Section>
                <PS.TitleText>서비스 이용 안내</PS.TitleText>
                <PS.ContentText>Linub의 기능과 콘텐츠는 학습을 돕기 위해 제공됩니다. 기능별 세부 정책은 각 화면의 최신 안내를 확인해 주세요.</PS.ContentText>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>문제 및 콘텐츠 이용 안내</PS.TitleText>
                <PS.ContentText>문제와 해설에 오류가 있다면 신고 기능을 이용해 주세요. 사용자 제작 콘텐츠는 검토 과정을 거쳐 반영될 수 있습니다.</PS.ContentText>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>PDF 다운로드 및 보관</PS.TitleText>
                <PS.ContentText>생성 파일의 보관 기간과 제한은 확정된 운영 정책에 따라 안내됩니다. 중요한 학습 자료는 사용자가 별도로 보관해 주세요.</PS.ContentText>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>커뮤니티 이용 시 주의사항</PS.TitleText>
                <PS.ContentText>다른 사용자를 존중하고 개인정보, 불법 자료 또는 권리를 침해하는 콘텐츠를 게시하지 마세요.</PS.ContentText>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>오류 신고 및 문의</PS.TitleText>
                <PS.ContentText>문제 오류와 서비스 장애는 문의 또는 신고 기능을 통해 상황과 재현 방법을 함께 전달해 주세요.</PS.ContentText>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>저작권 및 라이선스</PS.TitleText>
                <PS.ContentText>콘텐츠별 출처와 이용 조건을 확인해야 하며, 제3자 권리 자료는 해당 권리자의 조건을 따릅니다.</PS.ContentText>
            </PS.Section>
        </PS.ContentContainer>
    );
}

export default Service;