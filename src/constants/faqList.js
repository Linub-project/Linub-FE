export const FAQ_LIST = [
    {
        id: 1,
        category: "GETTING_STARTED",
        question: "Linub는 어떤 서비스인가요?",
        description: "Linub는 리눅스 개념과 명령어 학습, 문제풀이, 오답 복습 등을 지원하는 학습 플랫폼입니다. 사용자가 직접 리눅스 명령어를 실행할 수 있는 웹 기반 Linux Lab 기능도 준비하고 있습니다.",
        link: [
            { label: "Linub 소개", path: "/guide/INTRODUCTION" }
        ]
    },
    {
        id: 2,
        category: "GETTING_STARTED",
        question: "리눅스를 처음 배우는데 무엇부터 시작해야 하나요?",
        description: "먼저 리눅스의 기본 개념과 파일·디렉터리 구조를 학습하는 것을 추천합니다. 이후 기본 명령어를 익히고 자유 시험에서 문제를 풀며 이해도를 점검해보세요.",
        link: [
            { label: "학습 로드맵", path: "/guide/ROADMAP" },
            { label: "사전 바로가기", path: "/dictionary" }
        ]
    },
    {
        id: 3,
        category: "GETTING_STARTED",
        question: "Linub를 효과적으로 활용하려면 어떻게 해야 하나요?",
        description: "사전에서 개념과 명령어를 학습한 뒤 시험을 통해 이해도를 확인하고, 틀린 문제를 반복해서 복습하는 방식을 추천합니다. 학습 기록과 메모를 함께 활용하면 학습 내용을 체계적으로 관리할 수 있습니다.",
        link: [
            { label: "학습 방법", path: "/guide/STUDY_METHOD" },
            { label: "시험 바로가기", path: "/exam" }
        ]
    },

    // 사전
    {
        id: 4,
        category: "DICTIONARY",
        question: "개념 사전과 명령어 사전은 무엇이 다른가요?",
        description: "개념 사전은 리눅스의 원리와 주요 개념을 설명하며, 명령어 사전은 실제 리눅스 명령어의 사용법과 옵션 등을 안내합니다. 학습 목적에 맞게 두 사전을 함께 활용할 수 있습니다.",
        link: [
            { label: "사전 바로가기", path: "/dictionary" }
        ]
    },
    {
        id: 5,
        category: "DICTIONARY",
        question: "명령어를 직접 실행하면서 학습할 수 있나요?",
        description: "Linub는 명령어를 직접 실행하며 학습할 수 있는 Linux Lab 기능을 준비하고 있습니다. 해당 기능이 제공되기 전까지는 명령어 사전에서 사용법과 옵션을 확인할 수 있습니다.",
        link: [
            { label: "명령어 사전", path: "/dictionary" }
        ]
    },
    {
        id: 6,
        category: "DICTIONARY",
        question: "사전에서 학습한 내용을 따로 기록할 수 있나요?",
        description: "사전에서 학습한 내용을 메모로 기록하고, 마이페이지에서 작성한 메모를 다시 확인하며 복습할 수 있습니다.",
        link: [
            { label: "내 메모", path: "/mypage/memo" }
        ]
    },

    // 시험
    {
        id: 7,
        category: "EXAM",
        question: "자유 모드와 시험 모드는 무엇이 다른가요?",
        description: "자유 모드는 사용자가 원하는 학습 범위와 문제 수를 선택하여 집중적으로 학습하는 방식입니다. 시험 모드는 정해진 시험 출제 조건에 따라 문제를 풀고 자신의 실력을 점검하는 방식입니다.",
        link: [
            { label: "시험 바로가기", path: "/exam" }
        ]
    },
    {
        id: 8,
        category: "EXAM",
        question: "Linub의 시험 문제는 실제 자격시험 기출문제인가요?",
        description: "Linub의 시험은 리눅스 관련 개념과 자격시험 출제 범위를 바탕으로 학습 및 실력 점검을 목적으로 제공됩니다. 실제 자격시험의 기출문제와 동일하지 않을 수 있으며, 시험 결과가 실제 자격시험의 합격을 보장하지는 않습니다.",
        link: [
            { label: "자격시험 준비 가이드", path: "/guide/CERTIFICATION" }
        ]
    },
    {
        id: 9,
        category: "EXAM",
        question: "시험을 완료하면 결과를 확인할 수 있나요?",
        description: "시험을 완료하면 제공되는 결과를 통해 자신의 학습 성과를 확인할 수 있습니다. 완료한 시험의 기록은 마이페이지에서도 확인할 수 있습니다.",
        link: [
            { label: "시험 기록", path: "/mypage/exam-history" }
        ]
    },
    {
        id: 10,
        category: "EXAM",
        question: "틀린 문제를 다시 풀 수 있나요?",
        description: "시험에서 틀린 문제는 오답 목록에 기록됩니다. 마이페이지에서 틀린 문제를 확인하고 원하는 문제를 선택해 다시 풀 수 있습니다.",
        link: [
            { label: "틀린 문제", path: "/mypage/wrong-problems" },
            { label: "오답 학습 가이드", path: "/guide/WRONG_PROBLEM" }
        ]
    },
    {
        id: 11,
        category: "EXAM",
        question: "관심 있는 문제를 따로 저장할 수 있나요?",
        description: "복습하고 싶은 문제를 북마크하여 별도로 관리할 수 있습니다. 저장한 문제는 마이페이지의 북마크한 문제 메뉴에서 확인할 수 있습니다.",
        link: [
            { label: "북마크한 문제", path: "/mypage/bookmark-problems" }
        ]
    },

    // PDF
    {
        id: 12,
        category: "PDF",
        question: "PDF 문제집은 어떻게 생성하나요?",
        description: "PDF 생성을 지원하는 화면에서 문제지 유형과 출제 조건을 설정한 뒤 PDF를 생성할 수 있습니다. 틀린 문제 중 원하는 문제를 선택하여 PDF 시험지로 생성하는 것도 가능합니다.",
        link: [
            { label: "시험 바로가기", path: "/exam" },
            { label: "틀린 문제", path: "/mypage/wrong-problems" },
            { label: "PDF 활용 가이드", path: "/guide/PDF" }
        ]
    },
    {
        id: 13,
        category: "PDF",
        question: "생성했던 PDF를 다시 다운로드할 수 있나요?",
        description: "생성한 PDF 시험지는 마이페이지의 내 시험지 메뉴에서 확인하고 다시 다운로드할 수 있습니다. 단, 보관 기간이 지난 파일은 다운로드할 수 없습니다.",
        link: [
            { label: "내 시험지", path: "/mypage/pdfs" }
        ]
    },
    {
        id: 14,
        category: "PDF",
        question: "PDF 파일은 얼마나 보관되나요?",
        description: "생성된 PDF 파일은 7일간 보관되며, 보관 기간이 지나면 자동으로 영구 삭제됩니다. 장기간 보관이 필요한 파일은 삭제되기 전에 다운로드해주세요.",
        link: [
            { label: "내 시험지", path: "/mypage/pdfs" }
        ]
    },
    {
        id: 15,
        category: "PDF",
        question: "PDF 시험지는 하루에 몇 번 생성할 수 있나요?",
        description: "PDF 시험지는 하루 최대 10회까지 생성할 수 있습니다. 생성 횟수가 제한되어 있으므로 필요한 문제와 출제 조건을 확인한 후 생성하는 것을 추천합니다.",
        link: [
            { label: "PDF 활용 가이드", path: "/guide/PDF" }
        ]
    },
    {
        id: 16,
        category: "PDF",
        question: "PDF를 다운로드하면 시험 응시 기록에 포함되나요?",
        description: "아니요. PDF 생성 및 다운로드는 웹에서 실제 문제를 풀고 제출하는 과정과 구분됩니다. 따라서 PDF 시험지를 다운로드하는 것만으로 시험 응시 기록이 생성되지는 않습니다.",
        link: []
    },
    {
        id: 17,
        category: "PDF",
        question: "PDF 문제집을 다른 사람에게 공유해도 되나요?",
        description: "PDF에 포함된 콘텐츠의 저작권과 이용 조건에 따라 공유 가능 여부가 달라질 수 있습니다. Linub가 제작한 자료와 제3자가 권리를 가진 자료의 이용 조건은 다를 수 있으므로, 외부 공유 또는 재배포 전에 관련 이용 조건을 확인해주세요.",
        link: [
            { label: "서비스 이용 안내", path: "/guide/SERVICE_GUIDE" }
        ]
    },

    // Linux Lab
    {
        id: 18,
        category: "LINUX_LAB",
        question: "Linux Lab은 어떤 기능인가요?",
        description: "Linux Lab은 웹 브라우저에서 리눅스 명령어를 직접 실행하고 실습할 수 있도록 준비 중인 기능입니다. 별도의 실습 환경을 직접 구축하지 않고도 리눅스를 학습할 수 있도록 개발하고 있습니다.",
        link: []
    },
    {
        id: 19,
        category: "LINUX_LAB",
        question: "Linux Lab은 현재 이용할 수 있나요?",
        description: "Linux Lab은 현재 준비 중인 기능입니다. 기능이 제공되기 전까지는 사전과 시험 기능을 활용하여 리눅스 개념과 명령어를 학습할 수 있습니다.",
        link: [
            { label: "사전 바로가기", path: "/dictionary" }
        ]
    },

    // 계정 및 인증
    {
        id: 20,
        category: "ACCOUNT",
        question: "자격증 인증은 왜 필요한가요?",
        description: "Linub는 자격증 인증 정보를 활용하여 일부 기능의 사용자 권한을 구분합니다. 특히 문제 심사 기능은 사용자의 자격 인증 수준과 심사 조건에 따라 이용 권한이 달라질 수 있습니다.",
        link: [
            { label: "자격 인증 요청", path: "/mypage/certification" }
        ]
    },
    {
        id: 21,
        category: "ACCOUNT",
        question: "자격증은 어떻게 인증하나요?",
        description: "마이페이지의 자격 인증 요청 메뉴에서 보유한 자격증 종류를 선택하고 증빙자료를 제출할 수 있습니다. 제출한 인증 요청은 검토 과정을 거쳐 처리됩니다.",
        link: [
            { label: "자격 인증 요청", path: "/mypage/certification" }
        ]
    },
    {
        id: 22,
        category: "ACCOUNT",
        question: "닉네임이나 프로필 사진을 변경할 수 있나요?",
        description: "마이페이지의 개요 화면에서 프로필 수정 기능을 이용하면 닉네임, 프로필 사진, 자기소개를 변경할 수 있습니다.",
        link: [
            { label: "마이페이지", path: "/mypage/intro" }
        ]
    },

    // 커뮤니티
    {
        id: 23,
        category: "COMMUNITY",
        question: "커뮤니티에서는 어떤 활동을 할 수 있나요?",
        description: "커뮤니티에서는 공지사항을 확인하고, 자유게시판과 질문게시판 등을 통해 다른 사용자들과 리눅스 관련 정보와 의견을 공유할 수 있습니다. 건의 및 신고를 위한 게시판도 제공됩니다.",
        link: [
            { label: "커뮤니티 바로가기", path: "/community" }
        ]
    },
    {
        id: 24,
        category: "COMMUNITY",
        question: "서비스에 건의하거나 문제를 신고하려면 어떻게 해야 하나요?",
        description: "커뮤니티의 건의/신고 게시판을 이용할 수 있습니다. 서비스 이용 중 발생한 문제나 개선 의견을 구체적으로 작성해주세요.",
        link: [
            { label: "커뮤니티 바로가기", path: "/community" }
        ]
    },
    {
        id: 25,
        category: "COMMUNITY",
        question: "내가 작성한 게시글과 댓글은 어디에서 확인하나요?",
        description: "마이페이지에서 직접 작성한 게시글과 댓글을 각각 확인할 수 있습니다.",
        link: [
            { label: "내가 쓴 글", path: "/mypage/posts" },
            { label: "내가 쓴 댓글", path: "/mypage/comments" }
        ]
    },

    // 문제 제작 및 심사
    {
        id: 26,
        category: "PROBLEM",
        question: "직접 문제를 제작할 수 있나요?",
        description: "사용자는 직접 문제를 작성하여 등록을 요청할 수 있습니다. 등록 요청된 문제는 검토 및 승인 과정을 거쳐 실제 문제 데이터에 반영될 수 있습니다.",
        link: [
            { label: "문제 작성하기", path: "/problem/request/intro" },
            { label: "문제 제작 가이드", path: "/guide/PROBLEM_CREATION" }
        ]
    },
    {
        id: 27,
        category: "PROBLEM",
        question: "내가 요청한 문제의 심사 결과는 어디에서 확인하나요?",
        description: "마이페이지의 문제 업로드 요청 메뉴에서 직접 작성한 문제의 등록 요청 내역과 심사 상태를 확인할 수 있습니다.",
        link: [
            { label: "문제 업로드 요청", path: "/mypage/problem-requests" }
        ]
    },
    {
        id: 28,
        category: "PROBLEM",
        question: "다른 사용자가 작성한 문제를 심사할 수 있나요?",
        description: "문제 심사 권한이 있는 사용자는 다른 사용자가 등록 요청한 문제를 검토할 수 있습니다. 심사 가능 여부는 자격 인증 상태와 권한 조건에 따라 결정됩니다.",
        link: [
            { label: "자격 인증 요청", path: "/mypage/certification" },
            { label: "문제 심사", path: "/mypage/judge" }
        ]
    },

    // 학습 기록 및 관리
    {
        id: 29,
        category: "LEARNING",
        question: "내 학습 기록은 어디에서 확인할 수 있나요?",
        description: "마이페이지에서 총 풀이 문제 수, 정답률, 시험 기록, 누적 학습 일수 등의 정보를 확인할 수 있습니다. 학습 결과를 활용하여 자신의 학습 현황을 점검해보세요.",
        link: [
            { label: "마이페이지", path: "/mypage/intro" },
            { label: "학습 통계 가이드", path: "/guide/STATISTICS" }
        ]
    },
    {
        id: 30,
        category: "LEARNING",
        question: "틀린 문제와 북마크한 문제는 어떻게 다른가요?",
        description: "틀린 문제는 시험에서 오답으로 처리된 문제를 기록하는 기능이며, 북마크는 사용자가 다시 학습하고 싶은 문제를 직접 저장하는 기능입니다. 두 기능을 함께 활용하면 복습할 문제를 효율적으로 관리할 수 있습니다.",
        link: [
            { label: "틀린 문제", path: "/mypage/wrong-problems" },
            { label: "북마크한 문제", path: "/mypage/bookmark-problems" }
        ]
    }
];
