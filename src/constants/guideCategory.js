
export const GUIDE_CATEGORY = [
    {
        key: "GETTING_STARTED",
        label: "시작하기",
        description: "Linub가 어떤 서비스인지 알아보고 주요 특징과 처음 사용하는 방법을 확인하세요.",
        selectable: false,
        subCategory: [
            {
                key: "INTRODUCTION",
                label: "Linub 소개",
                description: "Linub 서비스의 소개와 학습 목표 및 제공 기능 안내"
            },
        ]
    },
    {
        key: "FEATURES",
        label: "주요 기능",
        description: "사전, Linux Lab, 시험, 커뮤니티 등 주요 서비스의 사용 방법을 확인하세요.",
        selectable: false,
        subCategory: [
            {
                key: "DICTIONARY",
                label: "사전",
                description: "리눅스 명령어와 개념을 검색하고 학습하는 방법"
            },
            {
                key: "LINUX_LAB",
                label: "Linux Lab",
                description: "웹 터미널을 활용한 리눅스 실습 기능 안내",
                disabled: true
            },
            {
                key: "EXAM",
                label: "시험",
                description: "자유 시험과 모의시험을 이용하는 방법"
            },
            {
                key: "COMMUNITY",
                label: "커뮤니티",
                description: "게시글과 댓글을 통한 질문 및 정보 공유 방법"
            },
            {
                key: "MYPAGE",
                label: "마이페이지",
                description: "학습 기록과 개인 정보를 관리하는 방법"
            }
        ]
    },
    {
        key: "LEARNING",
        label: "학습 가이드",
        description: "리눅스 입문부터 자격시험 준비까지 수준과 목표에 맞는 방법을 찾아보세요.",
        selectable: false,
        subCategory: [
            {
                key: "ROADMAP",
                label: "학습 로드맵",
                description: "리눅스 학습 단계와 수준별 학습 순서 안내"
            },
            {
                key: "CERTIFICATION",
                label: "자격시험 준비",
                description: "리눅스 관련 자격시험의 준비 과정과 학습 범위 안내"
            },
            {
                key: "STUDY_METHOD",
                label: "학습 방법",
                description: "효율적인 개념 학습과 실습 및 복습 방법 안내"
            }
        ]
    },
    {
        key: "UTILIZATION",
        label: "활용 가이드",
        description: "오답 관리, PDF 문제집, 문제 제작 기능을 효과적으로 조합해 보세요.",
        selectable: false,
        subCategory: [
            {
                key: "WRONG_PROBLEM",
                label: "오답 학습",
                description: "틀린 문제를 관리하고 다시 풀이하는 방법"
            },
            {
                key: "PDF",
                label: "PDF 문제집",
                description: "PDF 시험지를 생성하고 다운로드하는 방법"
            },
            {
                key: "PROBLEM_CREATION",
                label: "문제 제작",
                description: "사용자 문제 작성 및 심사 과정 안내"
            },
            {
                key: "STATISTICS",
                label: "학습 통계",
                description: "학습 기록과 정답률 등 통계 정보를 확인하는 방법"
            }
        ]
    },
    {
        key: "SUPPORT",
        label: "FAQ 및 이용 안내",
        description: "서비스 이용 중 궁금한 점과 자주 발생하는 문제의 해결 방법을 확인하세요.",
        selectable: false,
        subCategory: [
            {
                key: "FAQ",
                label: "자주 묻는 질문",
                description: "서비스 이용 중 자주 발생하는 질문과 답변"
            },
            {
                key: "SERVICE_GUIDE",
                label: "서비스 이용 안내",
                description: "서비스 이용 정책과 주요 유의사항 안내"
            }
        ]
    }
];
