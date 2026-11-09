import { SNAPSHOT } from "@/components/static/privacy/index";
import * as S from "@/components/static/privacy/styles";
import * as PS from "@/components/static/styles";

const Privacy_0_1 = ({current}) => {
    return (
        <S.Container>
            <section>
                <PS.Title>1. 개인정보 처리의 기본 원칙</PS.Title>
                <PS.Content>Linub는 서비스 제공에 필요한 최소한의 개인정보를 처리합니다.</PS.Content>
                <PS.Content>처리 목적을 변경하거나 별도의 동의가 필요한 개인정보를 추가로 처리하는 경우에는 법령에 따라 필요한 안내와 동의 절차를 진행합니다.</PS.Content>
                <PS.Content>개인정보 처리방침의 공개는 개인정보 수집 · 이용, 제3자 제공 또는 국외이전에 필요한 별도 동의를 대신하지 않습니다.</PS.Content>
            </section>
            <section>
                <PS.Title>2. 처리하는 개인정보의 항목 · 목적 · 법적 근거</PS.Title>
                <PS.SubTitle>2.1. 회원 가입과 이용자가 요청한 서비스 제공에 필요한 정보</PS.SubTitle>
                <PS.Content>다음 정보는 회원과의 서비스 이용계약 체결 · 이행을 위해 필요한 범위에서 「개인정보 보호법」 제15조 제1항 제4호를 근거로 처리합니다.</PS.Content>
                <PS.Content>선택 기능의 이용자가 해당 기능을 요청하는 경우에는 그 기능을 제공하는 데 필요한 정보만 처리합니다.</PS.Content>
                <PS.Table>
                    <colgroup>
                        <col width="20%" />
                        <col width="40%" />
                        <col width="40%" />
                    </colgroup>
                    <PS.Tr>
                        <PS.Th>이용 상황</PS.Th>
                        <PS.Th>처리하는 개인정보</PS.Th>
                        <PS.Th>처리 목적</PS.Th>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>회원 가입 · 로그인 · 회원 관리</PS.Td>
                        <PS.Td $align="left">이메일 주소, 닉네임, 비밀번호의 해시값, 가입 · 수정일시, 최근 로그인일시, 마지막 비밀번호 변경일시, 계정 상태, 회원 권한</PS.Td>
                        <PS.Td>회원 식별, 이메일 계정을 이용한 인증, 계정 · 권한 관리</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>이메일 인증 · 비밀번호 재설정</PS.Td>
                        <PS.Td $align="left">이메일 주소, 인증값 또는 확인용 값, 발급 · 만료 정보, 인증 처리 결과</PS.Td>
                        <PS.Td>이메일 사용 가능 여부 확인, 비밀번호 재설정 요청 처리</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>로그인 상태 유지</PS.Td>
                        <PS.Td $align="left">회원 식별정보 및 권한을 포함하는 인증 토큰, 토큰의 발급 · 만료 정보, 브라우저에 설정하는 인증 쿠키</PS.Td>
                        <PS.Td>로그인 상태 유지 및 인증 요청 처리</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>개인별 사전 학습 정보 저장</PS.Td>
                        <PS.Td $align="left">회원 식별번호, 저장한 사전 항목, 개인 메모 내용, 저장 · 수정 일시</PS.Td>
                        <PS.Td>이용자가 저장한 학습 정보 제공 및 관리</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>모의시험 진행 · 결과 제공</PS.Td>
                        <PS.Td $align="left">회원 식별번호, 응시 시험, 시험 과목, 출제된 문제와 순서, 선택한 보기 또는 제출한 답안, 정오 여부, 시험 시작 · 종료 · 중단 · 재개 관련 시각과 상태, 소요 시간, 정답 · 오답 수</PS.Td>
                        <PS.Td>시험 진행 상태 저장, 이어 풀기, 채점, 결과 · 학습 통계 제공</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>오답 복습 · 문제 북마크</PS.Td>
                        <PS.Td $align="left">회원 식별번호, 문제 식별번호, 오답 횟수, 개인 메모, 북마크, 관련 풀이 기록과 작성 · 수정 일시</PS.Td>
                        <PS.Td>오답노트 · 북마크 제공, 개인별 복습 문제 추천</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>개인별 학습 통계 · 목표</PS.Td>
                        <PS.Td $align="left">회원 식별번호, 저장된 시험 · 풀이 기록으로 계산한 풀이 수 · 정답률 · 학습일, 설정한 주간 목표</PS.Td>
                        <PS.Td>학습 현황과 목표 달성도 표시</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>커뮤니티 게시글 · 댓글</PS.Td>
                        <PS.Td $align="left">작성자 식별번호, 닉네임, 글 · 댓글의 제목과 내용, 첨부파일, 작성 · 수정 일시, 게시물 유형 · 처리 상태</PS.Td>
                        <PS.Td>게시글 · 댓글 게시와 조회, 질문 · 답변 및 건의 · 신고 처리</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>문제 제출</PS.Td>
                        <PS.Td $align="left">제출자 식별번호, 제출 제목, 문제 · 보기 · 정답 · 해설, 이미지, 소스코드 · 언어, 선택한 과목, 제출 · 수정 일시, 요청 상태</PS.Td>
                        <PS.Td>이용자가 작성한 문제 접수, 심사, 승인된 문제의 서비스 등록</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>문제 심사 참여</PS.Td>
                        <PS.Td $align="left">심사자 식별번호, 심사 대상, 심사 의견 · 판정, 심사 일시</PS.Td>
                        <PS.Td>심사 자격 확인, 중복 · 자기 심사 방지, 심사 결과 안내 및 문제 등록 판단</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>개인별 PDF 생성 · 보관</PS.Td>
                        <PS.Td $align="left">생성자 식별번호, 생성 유형과 조건, 포함 문제, 정답 · 해설 포함 설정, 파일 이름 · 저장 경로, 생성 일시, 오답 횟수</PS.Td>
                        <PS.Td>요청한 문제집 생성, 생성 이력 · 생성 한도 관리, 소유자 확인 및 재다운로드</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>서비스 관련 문의</PS.Td>
                        <PS.Td $align="left">문의자가 제공한 이메일 주소, 문의 내용 · 첨부자료, 처리 내용 · 일시</PS.Td>
                        <PS.Td>문의 접수, 답변 및 처리 결과 안내</PS.Td>
                    </PS.Tr>
                </PS.Table>
                <PS.Content>자유 모드와 모의시험은 기록 범위가 다릅니다. 자유 모드는 이용자가 정답 · 해설을 직접 확인하는 방식으로 제공하며, 현재 자유 모드의 문제별 선택 답안과 채점 결과를 시험 결과 기록으로 서버에 저장하지 않습니다.</PS.Content>
                <PS.Content>문제 · 사전 콘텐츠 자체의 식별번호, 과목 코드 및 공용 태그는 원칙적으로 콘텐츠 관리 정보입니다. 이를 회원의 작성 · 이용 이력과 연결하여 처리하는 부분은 개인정보로 관리합니다.</PS.Content>
                <PS.SubTitle>2.2. 별도 동의를 받아 처리하는 선택 정보</PS.SubTitle>
                <PS.Content>다음 정보는 해당 기능을 선택하고 개인정보 수집 · 이용에 동의한 이용자에 한하여 「개인정보 보호법」 제15조 제1항 제1호에 따라 처리합니다.</PS.Content>
                <PS.Table>
                    <colgroup>
                        <col width="10%" />
                        <col width="30%" />
                        <col width="30%" />
                        <col width="30%" />
                    </colgroup>
                    <PS.Tr>
                        <PS.Th>선택 기능</PS.Th>
                        <PS.Th>처리하는 개인정보</PS.Th>
                        <PS.Th>처리 목적</PS.Th>
                        <PS.Th>동의하지 않는 경우</PS.Th>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>프로필 이미지 등록</PS.Td>
                        <PS.Td $align="left">이용자가 등록한 이미지, 이미지 저장 경로</PS.Td>
                        <PS.Td $align="left">프로필 표시, 게시글 · 댓글 작성자 구분</PS.Td>
                        <PS.Td $align="left">기본 프로필로 서비스를 이용할 수 있습니다.</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>자격증 인증 요청</PS.Td>
                        <PS.Td $align="left">회원 식별번호, 신청한 자격 종류 · 등급, 증빙 이미지 및 그 이미지에 포함된 인증에 필요한 정보, 신청 · 심사일시, 심사 상태 · 사유, 인증 결과</PS.Td>
                        <PS.Td $align="left">자격 보유 사실 확인, 인증 상태 및 문제 심사 참여 자격 관리</PS.Td>
                        <PS.Td $align="left">자격 인증과 인증을 전제로 하는 심사 기능 이용이 제한됩니다. 일반 학습 기능은 이용할 수 있습니다.</PS.Td>
                    </PS.Tr>
                </PS.Table>
                <PS.Content>자격증 증빙에서 확인하는 구체적인 정보는 실명, 자격 종류 · 등급, 생년월일, 자격증 번호, 취득일입니다. 이미지에 포함되는 정보도 수집 항목에 포함되므로, 신청 화면에서 필요한 부분과 가려야 할 부분을 안내합니다.</PS.Content>
                <PS.Content>주민등록번호, 주소, 연락처, 인증에 필요하지 않은 생년월일 · 사진 및 QR 코드의 불필요한 정보는 업로드 전에 가려야 합니다. Linub는 자격증 인증을 이유로 주민등록번호가 표시된 원본 전체의 제출을 요구하지 않습니다.</PS.Content>
                <PS.Content>자격증 이미지는 공개 프로필이나 일반 문제 심사자에게 공개하는 자료가 아닙니다. 인증 업무를 담당하는 관리자와 해당 이용자에게 필요한 범위로 접근을 제한합니다. 발급기관에 진위 확인을 요청하는 경우에는 제5절의 별도 제공 절차를 따릅니다.</PS.Content>
                <PS.Content>자격증 증빙 이미지는 관리자의 승인 또는 거절 결정 직후 파기됩니다.</PS.Content>
                <PS.SubTitle>2.3. 서비스 이용 과정에서 생성되는 기술적 정보</PS.SubTitle>
                <PS.Content>서비스 접속과 보안 · 장애 대응 과정에서 다음 정보를 처리할 수 있습니다. 실제 저장 여부와 보유기간은 제4절의 기준을 따릅니다.</PS.Content>
                <PS.Table>
                    <colgroup>
                        <col width="20%" />
                        <col width="40%" />
                        <col width="40%" />
                    </colgroup>
                    <PS.Tr>
                        <PS.Th>구분</PS.Th>
                        <PS.Th>처리 항목</PS.Th>
                        <PS.Th>목적 및 근거</PS.Th>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>웹 · API 접속 및 오류 기록</PS.Td>
                        <PS.Td $align="left">IP 주소, 접속일시, 요청 경로, 처리 결과 · 오류 코드, 브라우저 · 운영체제 정보, 필요한 경우 회원 식별번호</PS.Td>
                        <PS.Td $align="left">서비스 운영, 비정상 접근 대응, 장애 원인 확인. 서비스 이행에 필요한 처리는 제15조 제1항 제4호, 별도의 보안상 정당한 이익에 근거하는 처리는 제15조 제1항 제6호의 요건을 검토하여 적용</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>개인정보취급자의 업무 접근 기록</PS.Td>
                        <PS.Td $align="left">관리자 식별정보, 접속일시 · 접속지, 처리 대상, 조회 · 변경 · 다운로드 업무 내역</PS.Td>
                        <PS.Td $align="left">개인정보 오남용 방지 및 법정 안전조치. 제15조 제1항 제2호, 제29조 및 「개인정보의 안전성 확보조치 기준」 제8조의 적용 범위에 따른 처리</PS.Td>
                    </PS.Tr>
                </PS.Table>
            </section>
            <section>
                <PS.Title>3. 개인정보 수집 방법과 공개 범위</PS.Title>
                <PS.SubTitle>3.1. 수집 방법</PS.SubTitle>
                <PS.Content>Linub는 회원 가입 · 시험 · 문제 제출 · 자격 인증 신청 · 게시글 작성 화면에 이용자가 직접 입력하거나 파일을 업로드한 정보, 서비스 제공 과정에서 생성된 기록, 문의 과정에서 전달받은 정보를 처리합니다. 발급기관의 진위 확인 결과를 회신받는 경우에는 자격증 인증 신청과 연결하여 처리합니다.</PS.Content>
                <PS.SubTitle>3.2. 다른 이용자에게 보이는 정보</PS.SubTitle>
                <PS.Table>
                    <colgroup>
                        <col width="30%" />
                        <col width="70%" />
                    </colgroup>
                    <PS.Tr>
                        <PS.Th>정보</PS.Th>
                        <PS.Th>공개 · 열람 범위</PS.Th>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>공개 게시글 · 댓글, 작성자 닉네임 및 표시되는 프로필 이미지</PS.Td>
                        <PS.Td $align="left">해당 게시물의 공개 범위에 따라 다른 회원 또는 방문자가 볼 수 있습니다. 공개 게시물의 첨부파일도 함께 확인할 수 있습니다.</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>문제 제출 내용과 제출자 표시 정보</PS.Td>
                        <PS.Td $align="left">작성자, 권한 있는 문제 심사자 및 관리자에게 제목 · 문제 · 보기 · 해설 · 이미지 · 소스코드가 표시됩니다.</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>등록이 완료된 문제</PS.Td>
                        <PS.Td $align="left">문제 · 보기 · 해설 · 이미지 · 소스코드가 문제 풀이 또는 PDF에 포함되어 다른 이용자에게 제공될 수 있습니다. 문제 제출자 계정 · 심사 기록은 공개하지 않습니다.</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>사전 메모, 오답 문제 메모, 개인 학습 기록, 개인별 PDF</PS.Td>
                        <PS.Td $align="left">해당 이용자에게만 제공하며, 운영 업무상 필요한 관리자 접근을 제외하고 다른 이용자에게 공개하지 않습니다.</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>자격증 증빙 이미지</PS.Td>
                        <PS.Td $align="left">신청자와 인증 담당 관리자만 확인합니다. 발급기관 확인은 제5절의 범위를 따릅니다.</PS.Td>
                    </PS.Tr>
                </PS.Table>
                <PS.Content>문제 심사 결과의 공개 시점은 심사 참여 여부 및 작성자 · 관리자 권한에 따라 제한할 수 있습니다. 비공개 문의 · 건의 · 신고 기능이 있는 경우에는 해당 화면에서 공개 범위를 별도로 안내합니다.</PS.Content>
                <PS.Content>건강, 정치적 견해, 종교, 성생활과 같은 민감정보나 다른 사람의 개인정보를 공개 글 · 첨부파일 · 문제 · 메모에 입력하지 않도록 주의해 주세요.</PS.Content>
                <PS.Content>공개를 원하지 않는 정보는 게시 전에 제외하고, 게시 후에는 수정 · 삭제 기능 또는 개인정보 문의 창구로 삭제를 요청할 수 있습니다.</PS.Content>
                <PS.Content>삭제 후에도 다른 사람이 별도로 저장한 사본이나 외부 검색 서비스의 반영에는 시간이 걸릴 수 있으며, 필요한 삭제 요청을 지원합니다.</PS.Content>
            </section>
            <section>
                <PS.Title>4. 개인정보의 보유기간</PS.Title>
                <PS.SubTitle>4.1. 서비스별 보유 기준</PS.SubTitle>
                <PS.Content>개인정보는 아래 기간 또는 기준에 따라 보유하며, 목적이 달성되거나 보유기간이 끝나면 지체 없이 파기합니다.</PS.Content>
                <PS.Content>이용자가 삭제를 요청할 수 있는 정보는 서비스 내 삭제 기능 또는 제10절의 문의 창구를 통해 요청할 수 있습니다.</PS.Content>
                <PS.Table>
                    <colgroup>
                        <col width="30%" />
                        <col width="70%" />
                    </colgroup>
                    <PS.Tr>
                        <PS.Th>정보</PS.Th>
                        <PS.Th>보유기간 또는 종료 기준</PS.Th>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>회원 기본정보 · 비밀번호 해시 · 개인별 학습 정보</PS.Td>
                        <PS.Td $align="left">회원 탈퇴 처리 완료 시까지. 별도의 삭제 · 동의 철회 요청을 처리한 정보는 해당 처리 시까지</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>프로필 이미지</PS.Td>
                        <PS.Td $align="left">이미지 삭제 · 교체, 동의 철회 또는 회원 탈퇴 처리 완료 시까지</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>회원가입용 인증 코드</PS.Td>
                        <PS.Td $align="left">인증 완료 또는 유효기간 만료 시까지. 유효기간: 10분</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>비밀번호 재설정용 인증 코드</PS.Td>
                        <PS.Td $align="left">인증 완료 또는 유효기간 만료 시까지. 유효기간: 5분</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>회원탈퇴용 인증 코드</PS.Td>
                        <PS.Td $align="left">인증 완료 또는 유효기간 만료 시까지. 유효기간: 3분</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>로그인 세션 정보</PS.Td>
                        <PS.Td $align="left">로그아웃 · 탈퇴 시 또는 최대 유효기간 1시간</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>시험 세션 · 답안 · 오답 · 북마크 · 메모 · 개인 통계</PS.Td>
                        <PS.Td $align="left">이용자의 삭제 요청 또는 회원 탈퇴 처리 완료 시까지. 기능별 삭제 제한이 생기는 경우 그 근거와 범위를 별도로 안내 예정</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>게시글 · 댓글 · 첨부파일</PS.Td>
                        <PS.Td $align="left">이용자의 삭제 요청 처리 시까지. 탈퇴 시 처리 방식: 탈퇴와 동시에 파일 영구적으로 삭제</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>제출 문제 · 심사 기록</PS.Td>
                        <PS.Td $align="left">접수 · 심사 · 결과 확인에 필요한 기간.</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>자격증 증빙 원본 · 심사를 위해 추출한 증빙 정보</PS.Td>
                        <PS.Td $align="left">인증 심사와 정해진 이의신청 처리에 필요한 기간.</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>자격증 인증 결과 · 심사 이력</PS.Td>
                        <PS.Td $align="left">인증 상태 유지 또는 회원 탈퇴 처리 완료 시까지. 관리자의 승인 또는 거절 결정 직후 파기</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>생성한 PDF와 개인별 생성 이력</PS.Td>
                        <PS.Td $align="left">생성 이력은 이용자의 삭제 요청 또는 회원 탈퇴 처리 완료 시까지. PDF 파일은 생성 후 7일간 보관한 뒤 영구적으로 파기</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>문의 · 건의 · 신고 처리 기록</PS.Td>
                        <PS.Td $align="left">처리 완료 후 이용자의 삭제 요청 시까지</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>백업에 포함된 개인정보</PS.Td>
                        <PS.Td $align="left">해당사항 없음</PS.Td>
                    </PS.Tr>
                </PS.Table>
                <PS.SubTitle>4.2. 법령에 따른 별도 보존</PS.SubTitle>
                <PS.Content>「개인정보의 안전성 확보조치 기준」 제8조가 적용되는 개인정보취급자의 접속기록은 원칙적으로 1년 이상, 같은 조에서 정한 요건에 해당하면 2년 이상 보관 · 관리합니다. 이는 모든 이용자의 학습 기록을 장기간 보관한다는 의미가 아닙니다.</PS.Content>
                <PS.Content>이 밖에 개인정보를 별도로 보존하여야 하는 법적 의무가 실제 발생한 경우에는 적용 법령, 보존 대상 항목 및 기간을 특정하여 해당 정보만 분리 보관합니다. Linub의 모든 이용 기록에 전자상거래 기록의 보관기간이나 통신사업자 기록의 보관기간을 일괄 적용하지 않습니다.</PS.Content>
            </section>
            <section>
                <PS.Title>5. 개인정보의 제3자 제공</PS.Title>
                <PS.Content>Linub는 이용자의 동의를 받거나 법령상 제공 근거가 있는 경우를 제외하고 개인정보를 외부 기관에 제공하지 않습니다.</PS.Content>
                <PS.Content>공개 게시와 심사 화면에서의 정보 표시 범위는 제3절에서 설명합니다.</PS.Content>
                <PS.SubTitle>5.1. 자격증 발급기관을 통한 진위 확인</PS.SubTitle>
                <PS.Content>이용자가 리눅스마스터 자격증 인증을 신청하고 외부 진위 확인에 별도로 동의한 경우, 다음과 같이 필요한 최소 정보만 제공합니다.</PS.Content>
                <PS.Table>
                    <colgroup>
                        <col width="20%" />
                        <col width="80%" />
                    </colgroup>
                    <PS.Tr>
                        <PS.Th>항목</PS.Th>
                        <PS.Th>내용</PS.Th>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>제공받는 자</PS.Td>
                        <PS.Td $align="left">한국정보통신진흥협회(KAIT)</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>제공 목적</PS.Td>
                        <PS.Td $align="left">신청한 리눅스마스터 자격증의 보유 사실 및 증빙 진위 확인</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>제공 항목</PS.Td>
                        <PS.Td $align="left">성명, 생년월일, 자격증번호, 취득일</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>제공받는 자의 보유 · 이용기간</PS.Td>
                        <PS.Td $align="left" $c>작성 예정</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>제공 근거</PS.Td>
                        <PS.Td $align="left">「개인정보 보호법」 제17조 제1항 제1호에 따른 별도 동의</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>제공 시기 · 방식</PS.Td>
                        <PS.Td $align="left">자격 인증 신청 내역을 취합하여 주마다 1회 제공</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>거부권 및 영향</PS.Td>
                        <PS.Td $align="left">제공에 동의하지 않을 수 있습니다. 발급기관의 확인이 필요한 인증 건은 처리가 제한될 수 있으나, 일반 학습 서비스 이용은 제한되지 않습니다.</PS.Td>
                    </PS.Tr>
                </PS.Table>
                <PS.Content>발급기관 확인에는 시간이 걸릴 수 있습니다.</PS.Content>
                <PS.Content>추가 증빙이나 다른 개인정보 제공이 필요하면 해당 항목 · 목적 · 보유기간을 먼저 안내하고 필요한 동의를 받습니다.</PS.Content>
                <PS.Content>리눅스마스터 이외의 자격증을 다른 기관에 확인하려면 그 기관에 대한 제공 내용을 별도로 안내합니다.</PS.Content>
                <PS.SubTitle>5.2. 문제 심사에 참여하는 회원의 정보 열람</PS.SubTitle>
                <PS.Content>심사 참여 회원에게 표시되는 정보는 제3절의 범위로 제한합니다.</PS.Content>
                <PS.Content>심사 자격을 가진 회원이라는 이유만으로 그 회원을 개인정보취급 권한이 있는 내부 관리자와 동일하게 취급하지 않습니다.</PS.Content>
                <PS.Content>자격증 원본 · 이메일 · 인증 토큰을 문제 심사 자료로 제공하지 않습니다.</PS.Content>
            </section>
            <section>
                <PS.Title>6. 개인정보 처리업무의 위탁</PS.Title>
                <PS.Content>외부 업체에 개인정보 처리업무를 맡기는 경우 수탁자와 위탁업무를 공개하고, 목적 외 처리 금지, 보호조치, 재위탁 관리 및 계약 종료 시 처리 기준을 계약 등으로 정하여 관리합니다.</PS.Content>
                <PS.Table>
                    <colgroup>
                        <col width="25%" />
                        <col width="25%" />
                        <col width="50%" />
                    </colgroup>
                    <PS.Tr>
                        <PS.Th>수탁자</PS.Th>
                        <PS.Th>위탁업무</PS.Th>
                        <PS.Th>처리 정보 및 관련 안내</PS.Th>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>Vercel Inc.</PS.Td>
                        <PS.Td>웹사이트 배포, 콘텐츠 전송(CDN) 및 호스팅 관련 운영</PS.Td>
                        <PS.Td $align="left">서비스 접속 과정에서 처리되는 IP 주소, 요청 정보 및 관련 기술적 로그</PS.Td>
                    </PS.Tr>
                </PS.Table>
                <PS.Content>운영자가 직접 관리하는 서버의 DB, 파일 및 자체 실행 소프트웨어를 외부 수탁 업체로 표시하지 않습니다.</PS.Content>
                <PS.Content>Linub는 개인정보 처리업무를 위탁하는 경우 개인정보 보호법에 따라 위탁 목적 외 개인정보 처리 금지, 안전성 확보 조치 및 수탁자 관리·감독 등 개인정보 보호에 필요한 사항을 준수합니다.</PS.Content>
                <PS.Content>국외 처리가 있는 수탁 업무는 제7절의 내용도 함께 확인할 수 있도록 안내합니다.</PS.Content>
            </section>
            <section>
                <PS.Title>7. 개인정보의 국외 이전</PS.Title>
                <PS.Content>Linub는 안정적인 웹사이트 운영과 서비스 제공을 위해 국외 서비스 제공업체를 이용하고 있으며, 서비스 이용 과정에서 일부 개인정보가 국외에서 처리될 수 있습니다.</PS.Content>
                <PS.Content>개인정보의 국외이전 관련 사항은 다음과 같습니다.</PS.Content>
                <PS.Table>
                    <colgroup>
                        <col width="20%" />
                        <col width="80%" />
                    </colgroup>
                    <PS.Tr>
                        <PS.Th>구분</PS.Th>
                        <PS.Th>내용</PS.Th>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>이전받는 자</PS.Td>
                        <PS.Td $align="left">Vercel Inc.</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>연락처</PS.Td>
                        <PS.Td $align="left">privacy@vercel.com</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>이전 국가</PS.Td>
                        <PS.Td $align="left">미국</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>이전 항목</PS.Td>
                        <PS.Td $align="left">IP 주소 및 웹사이트 접속 과정에서 처리되는 기술적 정보(접속 일시, 요청 정보, 브라우저 정보)</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>이전 목적</PS.Td>
                        <PS.Td $align="left">웹사이트 호스팅, 콘텐츠 전송(CDN), 서비스 운영 및 보안 관리</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>이전 형태</PS.Td>
                        <PS.Td $align="left">웹사이트 제공에 필요한 국외 개인정보 처리위탁</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>이전 시기 및 방법</PS.Td>
                        <PS.Td $align="left">이용자가 웹사이트에 접속하거나 콘텐츠를 요청할 때 HTTPS 등 암호화된 통신을 통해 전송</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>보유 및 이용기간</PS.Td>
                        <PS.Td $align="left">서비스 제공에 필요한 기간 및 Vercel의 적용 계약·보관 정책에 따른 기간</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>법적 근거</PS.Td>
                        <PS.Td $align="left">개인정보 보호법 제28조의8 제1항 제3호 가목</PS.Td>
                    </PS.Tr>
                </PS.Table>
                <PS.Content>Linub는 개인정보의 국외이전 과정에서 관련 법령에 따른 보호조치를 적용하고, 개인정보가 이전 목적 외로 처리되지 않도록 필요한 조치를 취합니다.</PS.Content>
                <PS.Content>이용자는 개인정보의 국외이전과 관련하여 고객지원을 통해 문의할 수 있습니다. 해당 정보의 국외 처리에 동의하지 않거나 이전을 원하지 않는 경우 서비스 이용에 제한이 발생할 수 있습니다.</PS.Content>
                <PS.Content>국외이전 업체, 처리 국가, 이전 항목 또는 처리 목적 등이 변경되는 경우 관련 법령에 따라 개인정보처리방침을 개정하고 필요한 고지 또는 동의 절차를 진행합니다.</PS.Content>
            </section>
            <section>
                <PS.Title>8. 개인정보의 파기 절차와 방법</PS.Title>
                <PS.Content>보유기간 경과, 회원 탈퇴, 동의 철회 또는 처리 목적 달성으로 불필요해진 개인정보는 파기 대상으로 확인한 후 지체 없이 파기합니다. 법령에 따라 보존할 정보는 일반 서비스 정보와 분리하여 해당 목적에만 이용하고, 정해진 기간이 끝나면 파기합니다.</PS.Content>
                <PS.Content>전자적 정보는 복구 · 재생되지 않도록 삭제합니다. 출력한 자료가 있다면 분쇄 또는 소각합니다. DB의 연결 값만 제거하는 것으로 파기가 완료되었다고 처리하지 않고, 연결된 파일과 보관 사본을 포함하여 삭제 대상을 관리합니다.</PS.Content>
                <PS.Content>프로필 교체 · 삭제 시 이전 이미지, PDF 삭제 시 저장된 파일과 그 안의 개인정보, 자격증 증빙 삭제 시 원본 · 가공본 · 심사용 임시 사본도 함께 처리합니다. 백업은 제4절에 명시한 주기에 따라 접근을 제한하고 순환 삭제하며, 복구 시 이미 삭제된 개인정보가 다시 서비스에 나타나지 않도록 관리합니다.</PS.Content>
            </section>
            <section>
                <PS.Title>9. 개인정보 보호를 위한 조치</PS.Title>
                <PS.Content>Linub는 개인정보의 안전한 처리를 위하여 다음 조치를 시행합니다.</PS.Content>
                <PS.Ol>
                    <PS.Li>비밀번호를 복호화할 수 없는 해시 형태로 저장하고, 인터넷 전송 구간에 암호화 통신을 적용합니다.</PS.Li>
                    <PS.Li>개인정보 접근 권한을 업무에 필요한 범위로 제한하고, 관리자 권한의 부여 · 변경 · 회수를 관리합니다.</PS.Li>
                    <PS.Li>개인 학습 정보와 개인별 PDF에 접근하는 요청에서 이용자와 자료 소유자를 확인합니다.</PS.Li>
                    <PS.Li>공개 이미지와 자격증 증빙 · 개인별 PDF의 저장 · 접근 경로를 구분하고 비공개 자료의 직접 공개를 제한합니다.</PS.Li>
                    <PS.Li>개인정보취급자의 접근 기록을 적용 기준에 따라 보관 · 점검하고, 불필요한 개인정보 · 비밀번호 · 인증 토큰이 운영 로그에 남지 않도록 관리합니다.</PS.Li>
                    <PS.Li>서버와 DB에 대한 접근을 제한하고, 보안 업데이트 및 필요한 점검을 수행합니다.</PS.Li>
                    <PS.Li>보유기간 · 파기, 권리행사, 사고 대응 절차를 정하고, 서버 · 백업 매체의 물리적 접근을 제한합니다.</PS.Li>
                </PS.Ol>
            </section>
            <section>
                <PS.Title>10. 이용자와 대리인의 권리 및 행사 방법</PS.Title>
                <PS.Content>이용자는 언제든지 Linub가 처리하는 자신의 개인정보에 대해 열람, 정정·삭제, 처리정지 및 동의 철회를 요구할 수 있습니다.</PS.Content>
                <PS.Content>이러한 권리는 이용자 본인뿐 아니라 법정대리인 또는 적법하게 위임받은 대리인을 통해서도 행사할 수 있습니다.</PS.Content>
                <PS.SubTitle>10.1. 개인정보에 대한 권리 행사 방법</PS.SubTitle>
                <PS.Content>이용자는 다음과 같은 방법으로 개인정보 관련 권리를 행사할 수 있습니다.</PS.Content>
                <PS.Table>
                    <colgroup>
                        <col width="30%" />
                        <col width="70%" />
                    </colgroup>
                    <PS.Tr>
                        <PS.Th>요청 내용</PS.Th>
                        <PS.Th>요청 방법</PS.Th>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>회원정보 및 프로필 열람 · 정정</PS.Td>
                        <PS.Td $align="left">마이페이지에서 제공하는 정보 조회 · 수정 기능 또는 개인정보 보호 문의처</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>학습 기록 · 메모 · 북마크 확인 및 삭제</PS.Td>
                        <PS.Td $align="left">제공되는 해당 화면의 기능 또는 개인정보 문의 이메일</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>자격증 인증 자료 열람 및 삭제 · 인증 동의 철회</PS.Td>
                        <PS.Td $align="left">개인정보 문의 이메일. 인증 상태 · 심사 권한에 미치는 영향을 안내한 후 처리</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>회원 탈퇴</PS.Td>
                        <PS.Td $align="left">마이페이지 회원 탈퇴 기능 또는 개인정보 문의 이메일</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>비회원 고객지원 문의 관련 개인정보 열람 · 정정 · 삭제</PS.Td>
                        <PS.Td $align="left">개인정보 문의 이메일</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>개인정보 처리정지 및 동의 철회</PS.Td>
                        <PS.Td $align="left">개인정보 문의 이메일</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>기타 개인정보 관련 권리 행사</PS.Td>
                        <PS.Td $align="left">개인정보 문의 이메일</PS.Td>
                    </PS.Tr>
                </PS.Table>
                <PS.Content>요청 시에는 가입 이메일 주소와 원하는 처리 내용을 알려주시면 됩니다. 불필요한 주민등록번호나 신분증 전체 사본을 보내지 않도록 해 주세요. Linub는 본인 또는 정당한 대리인임을 확인하기 위해 필요한 최소한의 절차를 진행합니다.</PS.Content>
                <PS.Content>열람 요구는 법정 기한인 10일 이내에 처리하거나, 법정 연기 · 제한 · 거절 사유가 있으면 그 사유와 이의제기 방법을 안내합니다. 정정 · 삭제 · 처리정지 · 동의 철회 요청도 관련 법령에서 정한 절차와 기한에 따라 처리합니다. 삭제 요구를 법령상 보존의무 등으로 이행할 수 없는 경우에는 제한되는 항목과 근거를 구체적으로 안내합니다.</PS.Content>
                <PS.Content>개인정보 전송요구권은 Linub가 법령상 해당 의무의 적용 대상인 경우 그 범위와 절차를 별도로 안내합니다. 일반적인 자료 열람 · 사본 요청을 법정 전송요구권과 동일하게 표현하지 않습니다.</PS.Content>
                <PS.SubTitle>10.2. 본인 확인 및 대리인 요청</PS.SubTitle>
                <PS.Content>개인정보 관련 권리 행사 시 다음 정보를 요청할 수 있습니다.</PS.Content>
                <PS.Ol>
                    <PS.Li>회원: 가입 이메일 주소 및 요청 내용</PS.Li>
                    <PS.Li>비회원 고객지원 이용자: 문의 UUID, 문의 시 입력한 이메일 주소 및 요청 내용</PS.Li>
                    <PS.Li>대리인: 대리 권한을 확인하기 위해 필요한 위임장 등 증빙자료</PS.Li>
                </PS.Ol>
                <PS.Content>Linub는 개인정보 보호를 위해 요청자가 정보주체 본인 또는 적법한 대리인인지 확인할 수 있습니다.</PS.Content>
                <PS.Content>본인 확인에 필요한 최소한의 정보만 요청하며, 불필요한 주민등록번호나 신분증 전체 사본 등의 제출은 요구하지 않습니다.</PS.Content>
                <PS.Content>고객지원 문의 비밀번호 등 인증정보를 일반 이메일에 직접 기재하지 않도록 안내하며, 필요한 경우 별도의 안전한 확인 절차를 진행합니다.</PS.Content>
                <PS.SubTitle>10.3. 개인정보 관련 요청의 처리</PS.SubTitle>
                <PS.Content>Linub는 이용자의 개인정보 관련 요청을 접수하면 관계 법령에 따라 처리하고 그 결과를 안내합니다.</PS.Content>
                <PS.Ol>
                    <PS.Li>열람 요구: 요청을 받은 날부터 10일 이내에 열람할 수 있도록 조치하거나, 법령에 따른 연기·제한·거절 사유가 있는 경우 그 사유와 이의제기 방법을 안내합니다.</PS.Li>
                    <PS.Li>정정·삭제 요구: 관련 법령에 따라 필요한 조치를 진행하고, 요청을 받은 날부터 10일 이내에 조치 결과 또는 요청을 이행할 수 없는 사유와 이의제기 방법을 안내합니다.</PS.Li>
                    <PS.Li>처리정지 요구: 법령에 따라 필요한 조치를 진행하고, 요청을 받은 날부터 10일 이내에 조치 결과 또는 거절 사유와 이의제기 방법을 안내합니다.</PS.Li>
                    <PS.Li>동의 철회: 동의 철회 요청이 접수되면 법령에 따라 지체 없이 필요한 조치를 진행합니다.</PS.Li>
                </PS.Ol>
                <PS.Content>다른 법령에 따른 개인정보 보존 의무 또는 법령에서 정한 제한 사유가 있는 경우 요청의 전부 또는 일부를 이행하지 못할 수 있습니다. 이 경우 해당 사유와 관련 법적 근거를 안내합니다.</PS.Content>
            </section>
            <section>
                <PS.Title>11. 쿠키와 브라우저 저장 정보</PS.Title>
                <PS.Content>Linub는 로그인 유지와 인증 처리를 위하여 브라우저에 refresh_token 쿠키를 설정합니다. 이 쿠키에는 인증용 토큰이 담기며, 이메일이나 비밀번호 원문을 쿠키 값으로 저장하지 않습니다.</PS.Content>
                <PS.Table>
                    <colgroup>
                        <col width="25%" />
                        <col width="25%" />
                        <col width="50%" />
                    </colgroup>
                    <PS.Tr>
                        <PS.Th>구분</PS.Th>
                        <PS.Th>목적</PS.Th>
                        <PS.Th>보유 · 만료 기준</PS.Th>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>refresh_token 쿠키</PS.Td>
                        <PS.Td>로그인 유지, 접근 토큰 재발급 요청 인증</PS.Td>
                        <PS.Td $align="left">최대 24시간까지. 로그아웃 시 만료 쿠키 설정을 통해 삭제 조치</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>접근 토큰</PS.Td>
                        <PS.Td>로그인한 이용자의 API 요청 인증</PS.Td>
                        <PS.Td $align="left">최대 1시간까지</PS.Td>
                    </PS.Tr>
                </PS.Table>
                <PS.Content>이용자는 브라우저 설정의 개인정보 · 쿠키 · 사이트 데이터 관리 화면에서 쿠키를 차단하거나 삭제할 수 있습니다. 필수 인증 쿠키가 차단되면 로그인 유지와 일부 회원 기능이 제한될 수 있습니다. 브라우저마다 메뉴 명칭과 세부 절차가 다를 수 있습니다.</PS.Content>
                <PS.Content>Linub는 맞춤형 광고를 위한 추적 쿠키를 사용하지 않습니다.</PS.Content>
            </section>
            <section>
                <PS.Title>12. 자동 처리와 결과에 대한 문의</PS.Title>
                <PS.Content>Linub는 다음과 같은 자동 처리를 이용합니다.</PS.Content>
                <PS.Table>
                    <colgroup>
                        <col width="20%" />
                        <col width="30%" />
                        <col width="50%" />
                    </colgroup>
                    <PS.Tr>
                        <PS.Th>처리</PS.Th>
                        <PS.Th>사용하는 정보와 주요 기준</PS.Th>
                        <PS.Th>결과</PS.Th>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>모의시험 채점</PS.Td>
                        <PS.Td $align="left">제출한 답안과 등록된 정답 비교, 해당 시험의 문항 · 과목별 기준</PS.Td>
                        <PS.Td $align="left">정오 표시, 점수 및 모의 합격 여부, 오답 기록</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>학습 통계</PS.Td>
                        <PS.Td $align="left">저장된 시험 · 풀이 결과와 활동일</PS.Td>
                        <PS.Td $align="left">풀이 수, 정답률, 학습일 및 목표 현황</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>오답 복습 추천</PS.Td>
                        <PS.Td $align="left">본인의 오답 문제와 오답 횟수, 날짜별 선정 조건</PS.Td>
                        <PS.Td $align="left">복습할 문제 추천. 구체적인 우선순위: 많이 틀린 순서대로 내림차순 정렬한 뒤 3배수 길이만큼 잘라내고 그 중 무작위로 추천 문제를 선정합니다.</PS.Td>
                    </PS.Tr>
                </PS.Table>
                <PS.Content>모의시험의 결과는 Linub 안에서 제공하는 학습 결과이며, 실제 자격의 취득 · 상실을 결정하는 결과가 아닙니다. 자격증 인증은 관리자의 자료 확인을 거치며, 문제 심사는 사람의 심사 결과를 바탕으로 진행합니다.</PS.Content>
                <PS.Content>자동 채점이나 추천 결과에 관하여 설명 또는 검토를 원하면 시험 · 문제 식별정보, 발생 시각 및 요청 내용을 제14절의 문의 창구로 보내주세요. 운영자가 관련 기록과 기준을 확인하고 결과를 안내합니다.</PS.Content>
                <PS.Content>법 제37조의 2에 따른 자동화된 결정에 해당하는 처리를 하는 경우에는 그 기준 · 절차와 개인정보 처리 방식을 공개하고 설명 · 검토 요구를 처리합니다. 법에서 정한 중대한 영향이 있는 경우의 거부권과 그 예외를 구분하여 적용하며, 단순한 문의 접수만으로 법정 권리를 제한하지 않습니다.</PS.Content>
            </section>
            <section>
                <PS.Title>13. 만 14세 미만 아동의 개인정보</PS.Title>
                <PS.Content>Linub의 회원 서비스는 만 14세 이상을 대상으로 합니다. 가입 과정에서 이를 안내하고 확인하며, 만 14세 미만 아동의 개인정보를 고의로 수집하지 않습니다. 해당 아동의 가입 사실을 확인하면 필요한 보호조치를 취하고 관련 개인정보를 지체 없이 삭제합니다.</PS.Content>
                <PS.Content>만 14세 미만의 회원 가입을 허용하는 정책으로 변경하는 경우에는 법정대리인 동의 · 확인, 아동과 법정대리인의 권리행사 방법을 마련한 후 해당 내용을 안내합니다.</PS.Content>
            </section>
            <section>
                <PS.Title>14. 개인정보 보호책임자와 문의 창구</PS.Title>
                <PS.Table>
                    <colgroup>
                        <col width="20%" />
                        <col width="80%" />
                    </colgroup>
                    <PS.Tr>
                        <PS.Th>구분</PS.Th>
                        <PS.Th>내용</PS.Th>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>개인정보처리자</PS.Td>
                        <PS.Td $align="left">윤준수</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>개인정보 보호책임자</PS.Td>
                        <PS.Td $align="left">윤준수</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>담당 업무</PS.Td>
                        <PS.Td $align="left">개인정보 열람 · 정정 · 삭제 · 처리정지, 동의 철회, 침해 · 고충 접수</PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>이메일</PS.Td>
                        <PS.Td $align="left">junsu120202@gmail.com</PS.Td>
                    </PS.Tr>
                </PS.Table>
                <PS.Content>개인 운영 서비스인 경우 운영자가 개인정보 보호책임자와 요청 처리 업무를 함께 담당할 수 있습니다. Linub는 접수된 개인정보 관련 문의와 요청을 지체 없이 검토하여 안내합니다.</PS.Content>
            </section>
            <section>
                <PS.Title>15. 권익침해 구제 방법</PS.Title>
                <PS.Content>개인정보 침해로 인한 상담이나 분쟁 해결이 필요한 경우 다음 기관을 이용할 수 있습니다.</PS.Content>
                <PS.Table>
                    <colgroup>
                        <col width="40%" />
                        <col width="40%" />
                        <col width="20%" />
                    </colgroup>
                    <PS.Tr>
                        <PS.Th>기관</PS.Th>
                        <PS.Th>연락처</PS.Th>
                        <PS.Th>홈페이지</PS.Th>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>개인정보침해 신고센터</PS.Td>
                        <PS.Td>국번 없이 118</PS.Td>
                        <PS.Td><PS.Link href="https://privacy.kisa.or.kr" target="_blank">방문</PS.Link></PS.Td>
                    </PS.Tr>
                    <PS.Tr>
                        <PS.Td>개인정보분쟁조정위원회</PS.Td>
                        <PS.Td>1833-6972</PS.Td>
                        <PS.Td><PS.Link href="https://www.kopico.go.kr" target="_blank">방문</PS.Link></PS.Td>
                    </PS.Tr>
                </PS.Table>
                <PS.Content>Linub의 개인정보 관련 답변이나 처리 결과에 대한 이의는 제14절의 창구로 제기할 수 있습니다.</PS.Content>
            </section>
            <section>
                <PS.Title>16. 개인정보 처리방침의 변경과 이전 버전</PS.Title>
                <PS.Content>이 방침의 시행일은 {current.effectiveAt} 입니다.</PS.Content>
                <PS.Content>내용이 변경되면 변경일 · 시행일 · 주요 변경 내용과 이전 버전을 공개합니다. 수집 항목 · 목적 · 제공 · 보유기간처럼 이용자의 권리에 중요한 영향을 미치는 변경은 변경 전후를 비교할 수 있도록 별도로 안내하고, 새로운 동의가 필요한 변경은 개인정보 처리 전에 동의를 받습니다.</PS.Content>
                <PS.Table>
                    <colgroup>
                        <col width="10%" />
                        <col width="25%" />
                        <col width="25%" />
                        <col width="40%" />
                    </colgroup>
                    <PS.Tr>
                        <PS.Th>버전</PS.Th>
                        <PS.Th>공고일</PS.Th>
                        <PS.Th>적용기간</PS.Th>
                        <PS.Th>주요 변경 내용</PS.Th>
                    </PS.Tr>
                    {SNAPSHOT.map((snapshot, idx) => (
                        <PS.Tr key={idx} >
                            <PS.Td>{snapshot.label}</PS.Td>
                            <PS.Td>{snapshot.effectiveAt}</PS.Td>
                            <PS.Td>{snapshot.apply}</PS.Td>
                            <PS.Td>{snapshot.revision}</PS.Td>
                        </PS.Tr>
                    ))}
                </PS.Table>
            </section>
        </S.Container>
    );
}

export default Privacy_0_1;