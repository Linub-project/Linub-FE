import { useState } from "react";
import * as PS from "../styles";
import * as S from "./styles";

const TARGET = [
    {
        key: "BEGINNER",
        title: "리눅스 입문",
        method: "기본 개념부터 명령어 활용까지 순서대로 학습합니다."
    },
    {
        key: "SECOND",
        title: "리눅스마스터 2급 준비",
        method: "기초 이론을 정리한 뒤 과목별 문제풀이와 오답 복습을 반복합니다."
    },
    {
        key: "FIRST",
        title: "리눅스마스터 1급 준비",
        method: "시스템 관리와 네트워크 등 심화 주제를 연결해 학습합니다."
    },
    {
        key: "REVIEW",
        title: "개념 및 명령어 복습",
        method: "필요한 개념과 명령어를 빠르게 찾고 문제로 확인합니다."
    },
];

const ROADMAP = [
    {
        key: "BEGINNER",
        sub: [
            {
                key: "리눅스 기본 개념 이해하기",
                desc: "Linux와 Unix, 커널과 셸, 배포판과 운영체제 구조를 먼저 이해합니다."
            },
            {
                key: "파일과 디렉터리 이해하기",
                desc: "디렉터리 구조와 절대·상대 경로, 파일과 디렉터리의 차이를 학습합니다."
            },
            {
                key: "기본 명령어 익히기",
                desc: "pwd, ls, cd, mkdir, cp, mv, rm의 용도와 기본 사용법을 확인합니다."
            },
            {
                key: "파일과 권한 관리하기",
                desc: "사용자와 그룹, 파일 권한을 이해하고 chmod와 chown을 학습합니다."
            },
            {
                key: "문제로 이해도 확인하기",
                desc: "기초 문제를 풀고 해설을 확인하며 부족한 개념을 찾습니다."
            },
            {
                key: "틀린 문제 복습하기",
                desc: "오답과 관련 개념을 다시 학습하고 일정 시간이 지난 뒤 반복해서 풉니다."
            },
        ]
    },
    {
        key: "SECOND",
        sub: [
            {
                key: "파일과 디렉터리 이해하기",
                desc: "디렉터리 구조와 절대·상대 경로, 파일과 디렉터리의 차이를 학습합니다."
            },
            {
                key: "기본 명령어 익히기",
                desc: "pwd, ls, cd, mkdir, cp, mv, rm의 용도와 기본 사용법을 확인합니다."
            },
            {
                key: "파일과 권한 관리하기",
                desc: "사용자와 그룹, 파일 권한을 이해하고 chmod와 chown을 학습합니다."
            },
            {
                key: "문제로 이해도 확인하기",
                desc: "기초 문제를 풀고 해설을 확인하며 부족한 개념을 찾습니다."
            },
            {
                key: "틀린 문제 복습하기",
                desc: "오답과 관련 개념을 다시 학습하고 일정 시간이 지난 뒤 반복해서 풉니다."
            },
            {
                key: "시험 모드로 종합 점검",
                desc: "여러 과목을 함께 풀며 실전 감각을 확인합니다."
            },
        ]
    },
    {
        key: "FIRST",
        sub: [
            {
                key: "기본 명령어 익히기",
                desc: "pwd, ls, cd, mkdir, cp, mv, rm의 용도와 기본 사용법을 확인합니다."
            },
            {
                key: "파일과 권한 관리하기",
                desc: "사용자와 그룹, 파일 권한을 이해하고 chmod와 chown을 학습합니다."
            },
            {
                key: "문제로 이해도 확인하기",
                desc: "기초 문제를 풀고 해설을 확인하며 부족한 개념을 찾습니다."
            },
            {
                key: "틀린 문제 복습하기",
                desc: "오답과 관련 개념을 다시 학습하고 일정 시간이 지난 뒤 반복해서 풉니다."
            },
            {
                key: "취약 영역 집중 복습",
                desc: "시험 기록에서 부족한 주제를 찾아 다시 학습합니다."
            },
        ]
    },
    {
        key: "REVIEW",
        sub: [
            {
                key: "리눅스 기본 개념 이해하기",
                desc: "Linux와 Unix, 커널과 셸, 배포판과 운영체제 구조를 먼저 이해합니다."
            },
            {
                key: "파일과 디렉터리 이해하기",
                desc: "디렉터리 구조와 절대·상대 경로, 파일과 디렉터리의 차이를 학습합니다."
            },
            {
                key: "기본 명령어 익히기",
                desc: "pwd, ls, cd, mkdir, cp, mv, rm의 용도와 기본 사용법을 확인합니다."
            },
            {
                key: "파일과 권한 관리하기",
                desc: "사용자와 그룹, 파일 권한을 이해하고 chmod와 chown을 학습합니다."
            },
        ]
    },
];

const Roadmap = () => {
    const [selectedTarget, setSelectedTarget] = useState("BEGINNER");

    const roadmap = ROADMAP.find(
        item => item.key === selectedTarget
    );

    const target = TARGET.find(
        item => item.key === selectedTarget
    );

    return (
        <PS.ContentContainer>
            <PS.Section>
                <p
                    className="typo-content-3"
                    style={{color: "var(--color-text-default)"}}
                >학습 목표 선택</p>
                <S.TargetArea>
                    {
                        TARGET.map((item, idx) => {
                            const isSelected = item.key === selectedTarget;

                            return <S.TargetItem key={idx}
                                className="typo-content-1"
                                $isSelected={isSelected}
                                onClick={() => setSelectedTarget(item.key)}
                            >
                                {item.title}
                            </S.TargetItem>
                        })
                    }
                </S.TargetArea>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>{target.title} 로드맵</PS.TitleText>
                <PS.ContentText>{target.method}</PS.ContentText>
                <S.StartArea>
                    {
                        roadmap.sub.map((item, idx) => (
                            <S.StepItem key={idx}>
                                <S.StepCircle
                                    className="terminal typo-content-3"
                                >{String(idx + 1).padStart(2, "0")}</S.StepCircle>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "12px",
                                        padding: "16px 24px",
                                        border: "1px solid var(--color-border)",
                                        flex: 1
                                    }}
                                >
                                    <p
                                        className="typo-title-1"
                                        style={{color: "var(--color-text-primary)"}}
                                    >{item.key}</p>
                                    <p
                                        className="typo-content-2"
                                        style={{color: "var(--color-text-default)"}}
                                    >{item.desc}</p>
                                </div>
                            </S.StepItem>
                        ))
                    }
                </S.StartArea>
                <p
                    className="typo-content-3"
                    style={{color: "var(--color-text-label)"}}
                >이 로드맵은 추천 순서를 안내하며 실제 학습 완료 여부를 저장하거나 추적하지 않습니다.</p>
            </PS.Section>
        </PS.ContentContainer>
    );
}

export default Roadmap;