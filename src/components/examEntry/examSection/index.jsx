import * as E from "@/apis/exam";
import clock from "@/assets/icon/icon_clock_neutral.svg";
import paper from "@/assets/icon/icon_paper.svg";
import { LevelChip } from "@/components/common/cardchip/CardChip";
import { SkeletonBox } from "@/components/common/skeleton/style";
import { useEffect, useState } from "react";
import * as S from "./styles";

const ExamSection = ({
    exam, 
    setExam, 
    setCount,
    setDuration
}) => {
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAllExamsWithSubjects = async () => {
        try {
            const response = await E.getAllExams();
            setExams(response.data);
            setLoading(false);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchAllExamsWithSubjects();
    }, []);

    const getLevel = (title) => {
        return title.split(" ")[2];
    }

    const handleExamItemClick = (e) => {
        setExam(e);
        setCount(e.problemCnt);
        setDuration(e.duration);
    }

    return (
        <S.Container>
            <p
                className="typo-title-1"
                style={{color: "var(--color-text-primary)"}}
            >시험 종류 선택</p>
            <p
                className="typo-content-2"
                style={{color: "var(--color-text-default)"}}
            >실제 Linux Master 시험 형식으로 진행됩니다. 문제 수와 제한 시간은 변경할 수 없습니다.</p>
            <S.ExamArea>
                {
                    loading ?
                    Array.from({length:4}).map((_, idx) => (
                        <SkeletonBox key={idx} $h="152px" />
                    ))
                    :
                    exams.map((e) => {
                        const isSelected = exam.id === e.id;
                        return (
                        <S.ExamItem key={e.id}
                            disabled={!e.isEligible}
                            onClick={() => handleExamItemClick(e)}
                            $isSelected={isSelected}
                            style={{
                                cursor: e.isEligible ? "pointer" : "not-allowed"
                            }}
                        >
                            <LevelChip $level={getLevel(e.title)}
                                className="typo-content-4"
                                style={{marginBottom: "8px"}}
                            >{getLevel(e.title)}</LevelChip>
                            <p
                                className="typo-title-1"
                                style={{textAlign: "left"}}
                            >{e.title}</p>
                            <p
                                className="typo-content-1"
                                style={{textAlign: "left", color: "var(--color-text-default)"}}
                            >{e.description}</p>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "16px",
                                    marginTop: "auto",
                                    width: "100%"
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "4px",
                                        width: "fit-content",
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    <img src={paper} height="12px" />
                                    <span style={{color: "var(--color-text-default)"}}>{e.problemCnt} 문제</span>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "4px",
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    <img src={clock} height="12px" />
                                    <span style={{color: "var(--color-text-default)"}}>{e.duration} 분</span>
                                </div>
                            </div>
                        </S.ExamItem>
                        );
                    })
                }
            </S.ExamArea>
        </S.Container>
    );
}

export default ExamSection;