
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
                description: "리눅스를 이해하고, 직접 활용하며, 실력을 점검할 수 있는 통합 학습 플랫폼입니다.",
                relation: [
                    "ROADMAP",
                    "DICTIONARY",
                    "EXAM"
                ]
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
                description: "리눅스의 주요 개념과 명령어, 시스템 파일을 한곳에서 찾아보세요.",
                relation: [
                    "STUDY_METHOD",
                    "ROADMAP"
                ]
            },
            {
                key: "LINUX_LAB",
                label: "Linux Lab",
                description: "설치 없이 웹 브라우저에서 리눅스 명령어를 직접 실행하는 실습 환경입니다.",
                disabled: true,
                relation: [
                    "DICTIONARY",
                    "STUDY_METHOD"
                ]
            },
            {
                key: "EXAM",
                label: "시험 및 문제",
                description: "자유롭게 문제를 풀거나 실제 시험을 대비하면서 자신의 실력을 확인하세요.",
                relation: [
                    "CERTIFICATION",
                    "WRONG_PROBLEM",
                    "PDF"
                ]
            },
            {
                key: "COMMUNITY",
                label: "커뮤니티",
                description: "리눅스 지식을 나누고 궁금한 점을 질문하며 다른 학습자와 함께 성장하세요.",
                relation: [
                    "SERVICE_GUIDE",
                    "FAQ"
                ]
            },
            {
                key: "MYPAGE",
                label: "마이페이지",
                description: "지금까지의 학습 활동을 확인하고 자신의 학습 상태를 점검하세요.",
                relation: [
                    "STATISTICS",
                    "WRONG_PROBLEM",
                    "PDF"
                ]
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
                description: "현재 실력과 학습 목표에 맞는 경로를 선택해 보세요.",
                relation: [
                    "STUDY_METHOD",
                    "DICTIONARY",
                    "CERTIFICATION"
                ]
            },
            {
                key: "CERTIFICATION",
                label: "자격시험 준비",
                description: "Linub의 학습 기능을 연결해 리눅스 자격시험을 체계적으로 준비해 보세요.",
                relation: [
                    "ROADMAP",
                    "EXAM",
                    "WRONG_PROBLEM"
                ]
            },
            {
                key: "STUDY_METHOD",
                label: "학습 방법",
                description: "개념 이해부터 반복 복습까지 효율적인 학습 사이클을 확인하세요.",
                relation: [
                    "ROADMAP",
                    "DICTIONARY",
                    "WRONG_PROBLEM"
                ]
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
                description: "오답을 관련 개념과 연결하고 반복 학습하는 방법을 안내합니다.",
                relation: [
                    "EXAM",
                    "STUDY_METHOD",
                    "PDF"
                ]
            },
            {
                key: "PDF",
                label: "PDF 문제집",
                description: "웹에서 풀던 문제를 PDF로 생성하여 오프라인에서도 학습해 보세요.",
                relation: [
                    "EXAM",
                    "WRONG_PROBLEM",
                    "MYPAGE"
                ]
            },
            {
                key: "PROBLEM_CREATION",
                label: "문제 제작",
                description: "학습자가 문제를 제안하고 검토를 거쳐 공유하는 과정을 알아보세요.",
                relation: [
                    "EXAM",
                    "SERVICE_GUIDE"
                ]
            },
            {
                key: "STATISTICS",
                label: "학습 통계",
                description: "학습 통계를 다음 학습 행동으로 연결하는 방법을 알아보세요.",
                relation: [
                    "MYPAGE",
                    "EXAM",
                    "WRONG_PROBLEM"
                ]
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
                description: "Linub를 이용하면서 궁금할 수 있는 내용을 확인해 보세요.",
                relation: [
                    "SERVICE_GUIDE",
                    "INTRODUCTION"
                ]
            },
            {
                key: "SERVICE_GUIDE",
                label: "서비스 이용 안내",
                description: "콘텐츠, PDF, 커뮤니티 이용 시 알아두어야 할 내용을 안내합니다.",
                relation: [
                    "FAQ",
                    "COMMUNITY",
                    "PDF"
                ]
            }
        ]
    }
];
