import board_disable from "@/assets/icon/icon_board_disable.svg";
import board_enable from "@/assets/icon/icon_board_enable.svg";
import book_disable from "@/assets/icon/icon_book_disable.svg";
import book_enable from "@/assets/icon/icon_book_enable.svg";
import link_disable from "@/assets/icon/icon_link_disable.svg";
import link_enable from "@/assets/icon/icon_link_enable.svg";

export const START_MENU = [
    {
        enableIcon: book_enable,
        disableIcon: book_disable,
        title: "리눅스가 처음이에요",
        description: "기본 개념부터 명령어 사용법까지 차근차근 학습하고 싶어요.",
        link: "입문자 학습 로드맵",
        path: "/guide/ROADMAP"
    },
    {
        enableIcon: board_enable,
        disableIcon: board_disable,
        title: "자격시험을 준비하고 있어요",
        description: "리눅스마스터 시험을 준비하며 이론과 문제풀이를 함께 공부하고 싶어요.",
        link: "자격시험 학습 가이드",
        path: "/guide/CERTIFICATION"
    },
    {
        enableIcon: link_enable,
        disableIcon: link_disable,
        title: "Linub 기능을 알아보고 싶어요",
        description: "사전, 시험, 오답 관리, PDF 등 제공 기능을 살펴보고 싶어요.",
        link: "주요 기능 안내",
        path: "/guide/DICTIONARY"
    },
]