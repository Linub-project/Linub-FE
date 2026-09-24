export const DICTIONARY_CATEGORY = [
    {
        key: "ARCHIVE",
        label: "Archive",
        description: "파일 및 디렉터리의 압축, 해제, 묶음과 관련된 항목",
        subCategory: []
    },
    {
        key: "COMMUNICATION",
        label: "Communication",
        description: "사용자 간 메시지 전달 및 통신과 관련된 항목",
        subCategory: []
    },
    {
        key: "DEVELOPMENT",
        label: "Development",
        description: "소프트웨어 개발, 빌드, 컴파일 및 개발 도구와 관련된 항목",
        subCategory: []
    },
    {
        key: "DEVICE",
        label: "Device",
        description: "프린터, 사운드, 입력 장치 등 개별 장치의 사용/제어와 관련된 항목",
        subCategory: [
            {
                key: "DEVICE_PRINTER",
                label: "Print",
                description: "프린터 및 인쇄 작업과 관련된 항목"
            },
            {
                key: "DEVICE_SCAN",
                label: "Scan",
                description: "스캐너 및 이미지 스캔과 관련된 항목"
            },
            {
                key: "DEVICE_SOUND",
                label: "Sound",
                description: "오디오 장치 및 사운드 설정과 관련된 항목"
            },
        ]
    },
    {
        key: "EDITOR",
        label: "Editor",
        description: "텍스트 및 파일 편집 도구와 관련된 항목",
        subCategory: []
    },
    {
        key: "FILE",
        label: "File",
        description: "파일과 디렉터리의 조회, 관리 및 처리와 관련된 항목",
        subCategory: [
            {
                key: "FILE_INFORMATION",
                label: "Information",
                description: "파일 및 디렉터리의 속성, 크기, 종류 등의 정보 조회와 관련된 항목"
            },
            {
                key: "FILE_MANAGEMENT",
                label: "Management",
                description: "파일 및 디렉터리의 생성, 복사, 이동, 삭제와 관련된 항목"
            },
            {
                key: "FILE_NAVIGATION",
                label: "Navigation",
                description: "디렉터리 이동 및 현재 위치 확인과 관련된 항목"
            },
            {
                key: "FILE_SEARCH",
                label: "Search",
                description: "파일 및 디렉터리를 검색하고 탐색하는 기능과 관련된 항목"
            },
            {
                key: "FILE_TEXTPROCESSING",
                label: "Text Processing",
                description: "텍스트 검색, 변환, 정렬, 필터링 및 가공과 관련된 항목"
            },
            {
                key: "FILE_VIEW",
                label: "View",
                description: "파일 내용을 출력하고 확인하는 기능과 관련된 항목"
            },
        ]
    },
    {
        key: "FILESYSTEM",
        label: "File System",
        description: "파일 시스템의 생성, 검사, 관리 및 사용과 관련된 항목",
        subCategory: [
            {
                key: "FILESYSTEM_LVM",
                label: "LVM",
                description: "논리 볼륨 생성 및 관리와 관련된 항목"
            },
            {
                key: "FILESYSTEM_MOUNT",
                label: "Mount",
                description: "파일 시스템의 마운트 및 언마운트와 관련된 항목"
            },
            {
                key: "FILESYSTEM_QUOTA",
                label: "Quota",
                description: "사용자 및 그룹의 디스크 사용량 제한과 관련된 항목"
            },
        ]
    },
    {
        key: "HELP",
        label: "Help",
        description: "명령어 사용법, 매뉴얼 및 도움말 조회와 관련된 항목",
        subCategory: []
    },
    {
        key: "NETWORK",
        label: "Network",
        description: "네트워크 설정, 통신, 진단 및 서비스와 관련된 항목",
        subCategory: [
            {
                key: "NETWORK_CONFIGURATION",
                label: "Configuration",
                description: "네트워크 인터페이스, 주소 및 라우팅 설정과 관련된 항목"
            },
            {
                key: "NETWORK_DATATRANSFER",
                label: "Data Transfer",
                description: "네트워크를 통한 파일 및 데이터 전송과 관련된 항목"
            },
            {
                key: "NETWORK_DIAGNOSTICS",
                label: "Diagnostics",
                description: "네트워크 연결 상태와 통신 문제 진단에 관련된 항목"
            },
            {
                key: "NETWORK_DNS",
                label: "DNS",
                description: "도메인 이름 해석 및 DNS 조회와 관련된 항목"
            },
            {
                key: "NETWORK_FIREWALL",
                label: "Firewall",
                description: "네트워크 접근 제어 및 방화벽 설정과 관련된 항목"
            },
            {
                key: "NETWORK_NFS",
                label: "NFS",
                description: "NFS를 이용한 네트워크 파일 시스템 공유와 관련된 항목"
            },
            {
                key: "NETWORK_REMOTE",
                label: "Remote",
                description: "원격 시스템 접속 및 제어와 관련된 항목"
            },
        ]
    },
    {
        key: "PACKAGE",
        label: "Package",
        description: "소프트웨어 패키지의 설치, 삭제, 조회 및 관리와 관련된 항목",
        subCategory: []
    },
    {
        key: "PROCESS",
        label: "Process",
        description: "프로세스의 조회, 실행, 제어 및 작업 관리와 관련된 항목",
        subCategory: []
    },
    {
        key: "SHELL",
        label: "Shell",
        description: "셸의 동작, 환경 설정, 변수 및 스크립트와 관련된 항목",
        subCategory: []
    },
    {
        key: "SYSTEM",
        label: "System",
        description: "운영체제의 전반적인 설정, 상태 및 시스템 관리와 관련된 항목",
        subCategory: [
            {
                key: "SYSTEM_BOOT",
                label: "Boot",
                description: "시스템 부팅 과정과 부팅 설정에 관련된 항목"
            },
            {
                key: "SYSTEM_HARDWARE",
                label: "Hardware",
                description: "CPU, RAM, PCI, 시스템 전체 하드웨어 정보와 관련된 항목"
            },
            {
                key: "SYSTEM_LOG",
                label: "Log",
                description: "시스템 및 서비스 로그의 조회와 관리에 관련된 항목"
            },
            {
                key: "SYSTEM_MODULE",
                label: "Module",
                description: "커널 모듈의 조회, 로드 및 관리와 관련된 항목"
            },
            {
                key: "SYSTEM_POWER",
                label: "Power",
                description: "시스템 종료, 재부팅 및 전원 관리와 관련된 항목"
            },
            {
                key: "SYSTEM_SERVICE",
                label: "Service",
                description: "시스템 서비스 및 데몬의 실행과 관리에 관련된 항목"
            },
            {
                key: "SYSTEM_SOFTWARE",
                label: "Software",
                description: "설치된 소프트웨어 및 시스템 프로그램 정보와 관련된 항목"
            },
            {
                key: "SYSTEM_TIME",
                label: "Time",
                description: "시스템 시간, 날짜 및 시간대 설정과 관련된 항목"
            },
        ]
    },
    {
        key: "STORAGE",
        label: "Storage",
        description: "디스크, 파티션 및 저장 장치의 조회와 관리에 관련된 항목",
        subCategory: []
    },
    {
        key: "USER",
        label: "User",
        description: "사용자, 그룹, 권한 및 로그인 환경 관리와 관련된 항목",
        subCategory: [
            {
                key: "USER_ACCOUNT",
                label: "Account",
                description: "사용자 계정의 생성, 수정, 삭제 및 정보 관리와 관련된 항목"
            },
                        {
                key: "USER_GROUP",
                label: "Group",
                description: "사용자 그룹의 생성, 구성 및 관리와 관련된 항목"
            },
                        {
                key: "USER_PERMISSION",
                label: "Permission",
                description: "파일 및 시스템 자원에 대한 권한과 소유권 관리에 관련된 항목"
            },
                        {
                key: "USER_SESSION",
                label: "Session",
                description: "로그인 사용자 및 사용자 세션 관리와 관련된 항목"
            },
        ]
    },
];