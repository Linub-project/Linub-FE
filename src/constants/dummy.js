export const DUMMY_POPULAR_DICTIONARY = [
    {
        id: 1,
        index: 1,
        keyword: "chmod",
        tag: "COMMAND",
        description: "파일이나 디렉터리의 접근 권한을 변경, 파일이나 디렉터리의 접근 권한을 변경aslkdfj",
    },
    {
        id: 2,
        index: 2,
        keyword: "find",
        tag: "COMMAND",
        description: "파일 또는 디렉터리를 조건에 맞게 검색",
    },
    {
        id: 3,
        index: 3,
        keyword: "grep",
        tag: "CONCEPT",
        description: "파일이나 입력 내용에서 특정 문자열을 검색",
    },
    {
        id: 4,
        index: 4,
        keyword: "ls",
        tag: "FILE",
        description: "디렉터리의 파일 및 디렉터리 목록을 출력",
    },
    {
        id: 5,
        index: 5,
        keyword: "cd",
        tag: "CONCEPT",
        description: "현재 작업 디렉터리를 변경",
    },
    {
        id: 6,
        index: 6,
        keyword: "mkdir",
        tag: "FILE",
        description: "새로운 디렉터리를 생성",
    },
    {
        id: 7,
        index: 7,
        keyword: "ps",
        tag: "CONCEPT",
        description: "현재 실행 중인 프로세스 정보를 출력",
    },
    {
        id: 8,
        index: 8,
        keyword: "kill",
        tag: "FILE",
        description: "프로세스에 시그널을 전송",
    },
];

export const DUMMY_RECENT_DICTIONARY = [
    {
        id: 1,
        keyword: "chmod",
        tag: "COMMAND",
        description: "파일이나 디렉터리의 접근 권한을 변경",
        time: "1분 전",
    },
    {
        id: 2,
        keyword: "find",
        tag: "COMMAND",
        description: "파일 또는 디렉터리를 조건에 맞게 검색",
        time: "23분 전",
    },
    {
        id: 3,
        keyword: "grep",
        tag: "COMMAND",
        description: "파일이나 입력 내용에서 특정 문자열을 검색",
        time: "5시간 전",
    },
    {
        id: 4,
        keyword: "passwd",
        tag: "FILE",
        description: "사용자 계정과 관련된 정보를 저장하는 파일",
        time: "23시간 전",
    },
    {
        id: 5,
        keyword: "process",
        tag: "CONCEPT",
        description: "현재 실행 중인 프로그램의 인스턴스",
        time: "어제",
    },
];

export const DUMMY_COMMUNITY = [
    {
        id: 1,
        tag: "notice",
        description: "리눅스마스터 시험 관련 문항 100개 추가 안내",
    },
    {
        id: 2,
        tag: "notice",
        description: "터미널 실습 환경 개선",
    },
    {
        id: 3,
        tag: "notice",
        description: "인증 가능한 자격증 추가 안내",
    },
    {
        id: 4,
        tag: "qna",
        description: "chmod 권한 설정 관련 질문",
    },
    {
        id: 5,
        tag: "free",
        description: "Linux Lab 사용 후기",
    },
];

export const DUMMY_DICTIONARY = [
    {
        id: 1,
        type: "CONCEPT",
        title: "파일 권한",
        description: "Linux 파일과 디렉터리에 적용되는 읽기, 쓰기, 실행 권한을 설명한다.",
        tags: ["파일", "권한", "보안"],
    },
    {
        id: 2,
        type: "CONCEPT",
        title: "심볼릭 링크",
        description: "다른 파일이나 디렉터리를 참조하는 특수한 형태의 파일을 설명한다.",
        tags: ["파일", "링크", "파일시스템"],
    },
    {
        id: 3,
        type: "COMMAND",
        title: "cd",
        description: "현재 작업 디렉터리를 다른 디렉터리로 변경한다.",
        tags: ["디렉터리", "경로", "이동"],
    },
    {
        id: 4,
        type: "COMMAND",
        title: "find",
        description: "지정한 조건에 따라 파일과 디렉터리를 검색한다.",
        tags: ["파일", "검색", "탐색"],
    },
    {
        id: 5,
        type: "COMMAND",
        title: "grep",
        description: "파일이나 표준 입력에서 특정 패턴과 일치하는 문자열을 검색한다.",
        tags: ["텍스트", "검색", "필터"],
    },
    {
        id: 6,
        type: "CONCEPT",
        title: "프로세스",
        description: "Linux 시스템에서 실행 중인 프로그램의 인스턴스를 설명한다.",
        tags: ["프로세스", "시스템", "실행"],
    },
    {
        id: 7,
        type: "COMMAND",
        title: "kill",
        description: "프로세스에 지정한 시그널을 전달한다.",
        tags: ["프로세스", "시그널", "종료"],
    },
    {
        id: 8,
        type: "FILE",
        title: "/etc/passwd",
        description: "시스템 사용자 계정의 기본 정보를 저장하는 파일이다.",
        tags: ["사용자", "계정", "설정파일"],
    },
    {
        id: 9,
        type: "FILE",
        title: "/etc/group",
        description: "시스템에 등록된 그룹 정보를 저장하는 파일이다.",
        tags: ["사용자", "그룹", "설정파일"],
    },
    {
        id: 10,
        type: "COMMAND",
        title: "ip",
        description: "네트워크 인터페이스, 주소, 라우팅 등의 정보를 조회하고 설정한다.",
        tags: ["네트워크", "인터페이스", "설정"],
    },
    {
        id: 11,
        type: "COMMAND",
        title: "ssh",
        description: "SSH 프로토콜을 이용해 원격 시스템에 안전하게 접속한다.",
        tags: ["네트워크", "SSH", "원격"],
    },
    {
        id: 12,
        type: "COMMAND",
        title: "tar",
        description: "여러 파일과 디렉터리를 하나의 아카이브 파일로 묶거나 해제한다.",
        tags: ["파일", "아카이브", "압축"],
    },
    {
        id: 13,
        type: "CONCEPT",
        title: "데몬",
        description: "백그라운드에서 지속적으로 실행되며 특정 작업을 수행하는 프로세스를 설명한다.",
        tags: ["시스템", "서비스", "프로세스"],
    },
    {
        id: 14,
        type: "FILE",
        title: "/etc/fstab",
        description: "시스템에서 사용할 파일 시스템과 마운트 정보를 정의하는 설정 파일이다.",
        tags: ["파일시스템", "마운트", "설정파일"],
    },
    {
        id: 15,
        type: "FILE",
        title: "/etc/hosts",
        description: "호스트 이름과 IP 주소의 정적 매핑 정보를 저장하는 파일이다.",
        tags: ["네트워크", "호스트", "설정파일"],
    },
    {
        id: 16,
        type: "CONCEPT",
        title: "마운트",
        description: "파일 시스템을 특정 디렉터리에 연결하여 접근할 수 있게 하는 개념이다.",
        tags: ["파일시스템", "마운트", "스토리지"],
    },
];

export const DUMMY_CONCEPT = [
    {
        id: 1,
        type: "COMMAND",
        topic: "chmod",
        summary: "파일과 디렉터리의 접근 권한을 변경하는 명령어입니다.",
        content:
            "chmod는 Linux에서 파일이나 디렉터리의 읽기, 쓰기, 실행 권한을 변경할 때 사용하는 명령어입니다.",
        dictionaryCategory: "USER_PERMISSION",
        syntax: "chmod [OPTION] MODE FILE|DIRECTORY",
        dictionaryType: "COMMAND",
        updatedAt: "2026-09-26T14:32:00",
        viewCnt: 1284,
        compareCnt: 96,

        examples: [
            {
                id: 1,
                content: "chmod 755 script.sh",
                description: "숫자 모드를 사용하여 파일 권한을 변경합니다.",
            },
            {
                id: 2,
                content: "chmod u+x deploy.sh",
                description: "파일 소유자에게 실행 권한을 추가합니다.",
            },
            {
                id: 3,
                content: "chmod g-w config.txt",
                description: "그룹의 쓰기 권한을 제거합니다.",
            },
        ],

        options: [
            {
                id: 1,
                name: "-R",
                longName: "--recursive-recursive-recursive",
                description: "디렉터리와 그 하위 파일 및 디렉터리의 권한을 재귀적으로 변경합니다.",
            },
            {
                id: 2,
                name: "-c",
                longName: "--changes",
                description: "권한이 실제로 변경된 파일에 대해서만 결과를 출력합니다.",
            },
            {
                id: 3,
                name: "-f",
                longName: "--silent",
                description: "대부분의 오류 메시지를 출력하지 않습니다.",
            },
            {
                id: 4,
                name: "-v",
                longName: "--verbose",
                description: "처리되는 각 파일에 대한 정보를 출력합니다.",
            },
            {
                id: 5,
                name: "",
                longName: "--reference",
                description: "지정한 참조 파일과 동일한 권한으로 설정합니다.",
            },
        ],

        relatedConcepts: [
            {
                id: 10,
                topic: "파일 권한",
            },
            {
                id: 11,
                topic: "소유권",
            },
            {
                id: 12,
                topic: "퍼미션 비트",
            },
        ],

        relatedCommands: [
            {
                id: 20,
                topic: "chown",
            },
            {
                id: 21,
                topic: "chgrp",
            },
            {
                id: 22,
                topic: "umask",
            },
        ],

        relatedFiles: [
            {
                id: 30,
                topic: "/etc/passwd",
            },
            {
                id: 31,
                topic: "/etc/group",
            },
        ],

        relatedTags: [
            {
                id: 1,
                name: "권한",
            },
            {
                id: 2,
                name: "파일",
            },
            {
                id: 3,
                name: "보안",
            },
            {
                id: 4,
                name: "사용자",
            },
        ],

        subcommands: [
            {
                subcommand: 1,
                name: "clone",
                description: "원격 저장소를 로컬에 복제합니다.",
                syntax: "git clone [OPTION] REPOSITORY [DIRECTORY]",

                arguments: [
                    {
                        id: 1,
                        name: "REPOSITORY",
                        description: "복제할 원격 저장소의 URL 또는 경로입니다.",
                    },
                    {
                        id: 2,
                        name: "DIRECTORY",
                        description: "저장소를 복제할 로컬 디렉터리 이름입니다.",
                    },
                ],

                options: [
                    {
                        id: 1,
                        name: "-b",
                        longName: "--branch",
                        description: "복제 후 체크아웃할 브랜치를 지정합니다.",
                    },
                    {
                        id: 2,
                        name: "-q",
                        longName: "--quiet",
                        description: "진행 상황 출력을 최소화합니다.",
                    },
                    {
                        id: 3,
                        name: "-n",
                        longName: "--no-checkout",
                        description: "복제 후 HEAD를 체크아웃하지 않습니다.",
                    },
                ],
            },

            {
                subcommand: 2,
                name: "commit",
                description: "스테이징된 변경 사항을 저장소에 커밋합니다.",
                syntax: "git commit [OPTION]",

                arguments: [],

                options: [
                    {
                        id: 4,
                        name: "-m",
                        longName: "--message",
                        description: "커밋 메시지를 직접 지정합니다.",
                    },
                    {
                        id: 5,
                        name: "-a",
                        longName: "--all",
                        description: "추적 중인 변경 파일을 자동으로 스테이징하여 커밋합니다.",
                    },
                    {
                        id: 6,
                        name: "",
                        longName: "--amend",
                        description: "직전 커밋을 수정합니다.",
                    },
                ],
            },

            {
                subcommand: 3,
                name: "run",
                description: "이미지를 기반으로 새로운 컨테이너를 생성하고 실행합니다.",
                syntax: "docker run [OPTION] IMAGE [COMMAND] [ARG...]",

                arguments: [
                    {
                        id: 3,
                        name: "IMAGE",
                        description: "컨테이너를 생성할 Docker 이미지입니다.",
                    },
                    {
                        id: 4,
                        name: "COMMAND",
                        description: "컨테이너에서 실행할 명령어입니다.",
                    },
                    {
                        id: 5,
                        name: "ARG",
                        description: "실행 명령어에 전달할 인수입니다.",
                    },
                ],

                options: [
                    {
                        id: 7,
                        name: "-d",
                        longName: "--detach",
                        description: "컨테이너를 백그라운드에서 실행합니다.",
                    },
                    {
                        id: 8,
                        name: "-p",
                        longName: "--publish",
                        description: "호스트와 컨테이너의 포트를 연결합니다.",
                    },
                    {
                        id: 9,
                        name: "-v",
                        longName: "--volume",
                        description: "호스트와 컨테이너 사이에 볼륨을 마운트합니다.",
                    },
                    {
                        id: 10,
                        name: "",
                        longName: "--name",
                        description: "생성할 컨테이너의 이름을 지정합니다.",
                    },
                ],
            },

            {
                subcommand: 4,
                name: "exec",
                description: "실행 중인 컨테이너 내부에서 명령어를 실행합니다.",
                syntax: "docker exec [OPTION] CONTAINER COMMAND [ARG...]",

                arguments: [
                    {
                        id: 6,
                        name: "CONTAINER",
                        description: "명령을 실행할 컨테이너의 이름 또는 ID입니다.",
                    },
                    {
                        id: 7,
                        name: "COMMAND",
                        description: "컨테이너 내부에서 실행할 명령어입니다.",
                    },
                ],

                options: [
                    {
                        id: 11,
                        name: "-i",
                        longName: "--interactive",
                        description: "표준 입력을 열린 상태로 유지합니다.",
                    },
                    {
                        id: 12,
                        name: "-t",
                        longName: "--tty",
                        description: "가상 터미널을 할당합니다.",
                    },
                    {
                        id: 13,
                        name: "-d",
                        longName: "--detach",
                        description: "명령어를 백그라운드에서 실행합니다.",
                    },
                ],
            },

            {
                subcommand: 5,
                name: "start",
                description: "지정한 systemd 서비스를 시작합니다.",
                syntax: "systemctl start UNIT...",

                arguments: [
                    {
                        id: 8,
                        name: "UNIT",
                        description: "시작할 systemd 유닛의 이름입니다.",
                    },
                ],

                options: [],
            },

            {
                subcommand: 6,
                name: "status",
                description: "지정한 systemd 유닛의 현재 상태를 확인합니다.",
                syntax: "systemctl status [OPTION] UNIT...",

                arguments: [
                    {
                        id: 9,
                        name: "UNIT",
                        description: "상태를 확인할 systemd 유닛의 이름입니다.",
                    },
                ],

                options: [
                    {
                        id: 14,
                        name: "-n",
                        longName: "--lines",
                        description: "출력할 최근 로그 줄 수를 지정합니다.",
                    },
                    {
                        id: 15,
                        name: "-l",
                        longName: "--full",
                        description: "출력 내용을 생략하지 않고 전체 내용을 표시합니다.",
                    },
                ],
            },
        ],
    },

    {
        id: 2,
        type: "FILE",
        topic: "/etc/passwd",
        summary: "Linux 시스템의 사용자 계정 정보를 저장하는 파일입니다.",
        content:
            "/etc/passwd 파일에는 시스템에 등록된 사용자 계정의 이름, UID, GID, 홈 디렉터리, 로그인 셸 등의 정보가 저장됩니다.",
        dictionaryCategory: "USER_ACCOUNT",
        dictionaryType: "FILE",
        updatedAt: "2026-09-25T19:15:00",
        viewCnt: 843,
        compareCnt: 21,

        examples: [
            {
                id: 3,
                content: "cat /etc/passwd",
                description: "등록된 사용자 계정 정보를 출력합니다.",
            },
            {
                id: 4,
                content: "grep root /etc/passwd",
                description: "root 사용자 정보를 검색합니다.",
            },
        ],

        relatedConcepts: [
            {
                id: 13,
                topic: "사용자 계정",
            },
            {
                id: 14,
                topic: "UID",
            },
            {
                id: 15,
                topic: "GID",
            },
        ],

        relatedCommands: [
            {
                id: 23,
                topic: "useradd",
            },
            {
                id: 24,
                topic: "usermod",
            },
            {
                id: 25,
                topic: "passwd",
            },
        ],

        relatedFiles: [
            {
                id: 32,
                topic: "/etc/shadow",
            },
            {
                id: 33,
                topic: "/etc/group",
            },
            {
                id: 34,
                topic: "/etc/gshadow",
            },
        ],

        relatedTags: [
            {
                id: 5,
                name: "사용자",
            },
            {
                id: 6,
                name: "계정",
            },
            {
                id: 7,
                name: "인증",
            },
            {
                id: 8,
                name: "설정 파일",
            },
        ],
    },

    {
        id: 3,
        type: "CONCEPT",
        topic: "프로세스",
        summary: "실행 중인 프로그램의 인스턴스를 의미합니다.",
        content:
            "프로세스는 Linux에서 현재 실행되고 있는 프로그램을 의미합니다. 각 프로세스는 고유한 PID를 가지며 운영체제에 의해 관리됩니다.",
        dictionaryCategory: "PROCESS",
        dictionaryType: "CONCEPT",
        updatedAt: "2026-09-24T09:40:00",
        viewCnt: 2176,
        compareCnt: 38,

        examples: [
            {
                id: 5,
                content: "ps aux",
                description: "현재 실행 중인 프로세스 목록을 확인합니다.",
            },
            {
                id: 6,
                content: "ps -ef",
                description: "전체 프로세스를 상세 형식으로 출력합니다.",
            },
        ],

        relatedConcepts: [
            {
                id: 16,
                topic: "PID",
            },
            {
                id: 17,
                topic: "시그널",
            },
            {
                id: 18,
                topic: "데몬",
            },
        ],

        relatedCommands: [
            {
                id: 26,
                topic: "ps",
            },
            {
                id: 27,
                topic: "top",
            },
            {
                id: 28,
                topic: "kill",
            },
        ],

        relatedFiles: [
            {
                id: 35,
                topic: "/proc",
            },
            {
                id: 36,
                topic: "/proc/[pid]/status",
            },
        ],

        relatedTags: [
            {
                id: 9,
                name: "프로세스",
            },
            {
                id: 10,
                name: "PID",
            },
            {
                id: 11,
                name: "시스템",
            },
            {
                id: 12,
                name: "시그널",
            },
        ],
    },
];