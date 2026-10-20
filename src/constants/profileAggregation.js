export const PROFILE_AGGREGATION = [
    {
        id: 1,
        title: "총 풀이 문제",
        key: "totalSolveCnt",
        unit: "문제",
        compare: "지난달 대비 증가",
        compareKey: "increaseSolveCnt",
        subunit: "문제"
    },
    {
        id: 2,
        title: "전체 정답률",
        key: "totalCorrectRate",
        unit: "%",
        compare: "최근 30일 정답률",
        compareKey: "latestCorrectRate",
        subunit: "%"
    },
    {
        id: 3,
        title: "완료한 모의시험",
        key: "totalExamSession",
        unit: "회",
        compare: "최근 점수",
        compareKey: "latestExamSessionScore",
        subunit: "점"
    },
    {
        id: 4,
        title: "총 학습 일수",
        key: "totalStudyDay",
        unit: "일",
        compare: "이번 달 학습 일수",
        compareKey: "thisMonthStudyDay",
        subunit: "일"
    }
];