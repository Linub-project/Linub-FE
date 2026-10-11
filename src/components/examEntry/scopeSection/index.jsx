import * as E from "@/apis/exam";
import Checkbox from "@/components/common/input/checkbox";
import { useEffect, useState } from "react";
import * as S from "./styles";

const ScopeSection = ({ scope, setScope, selectedSubjectIds, setSelectedSubjectIds }) => {
    const [exams, setExams] = useState([]);

    const fetchAllExamsWithSubjects = async () => {
        try {
            const response = await E.getAllExamsWithSubjects();
            setExams(response.data);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchAllExamsWithSubjects();
    }, []);

    const handleResetScope = () => {
        setScope("");
        setSelectedSubjectIds([]);
    }

    const handleExamToggle = (subjects) => {
        const subjectIds = subjects.map(subject => subject.id);

        setSelectedSubjectIds(prev => {
            const isAllSelected = subjectIds.every(id => prev.includes(id));

            if (isAllSelected) {
                return prev.filter(id => !subjectIds.includes(id));
            }

            return [...new Set([...prev, ...subjectIds])];
        });
    };

    const handleSubjectToggle = (id) => {
        setSelectedSubjectIds(prev =>
            prev.includes(id)
                ? prev.filter(subjectId => subjectId !== id)
                : [...prev, id]
        );
    };

    return (
        <S.Container>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between"
                }}
            >
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-primary)"}}
                >문제 범위 선택</p>
                <p className="typo-content-1" 
                    style={{color: "var(--color-primary)", cursor: "pointer"}}
                    onClick={handleResetScope}
                >초기화</p>
            </div>
            <p
                className="typo-content-2"
                style={{color: "var(--color-text-default)"}}
            >과목 · 카테고리 · 범주 중 하나만 선택할 수 있습니다.</p>
            <S.ScopeArea>
                <S.ScopeItem className="typo-content-1" onClick={() => setScope("SUBJECT")} $isSelected={scope === "SUBJECT"} >과목</S.ScopeItem>
                <S.ScopeItem className="typo-content-1" onClick={() => setScope("CATEGORY")} $isSelected={scope === "CATEGORY"} disabled >카테고리(예정)</S.ScopeItem>
                <S.ScopeItem className="typo-content-1" onClick={() => setScope("LEGEND")} $isSelected={scope === "LEGEND"} disabled >사전(예정)</S.ScopeItem>
            </S.ScopeArea>
            {scope === "SUBJECT" && (
                <S.SelectArea>
                    {exams.map(({ exam, subjects }) => {
                        const isAllSelected =
                            subjects.length > 0 &&
                            subjects.every(subject => selectedSubjectIds.includes(subject.id));

                        const isPartialSelected =
                            !isAllSelected &&
                            subjects.some(subject => selectedSubjectIds.includes(subject.id));

                        return (
                            <S.ExamArea key={exam.id}>
                                <S.ExamItem
                                    $isSelected={isAllSelected}
                                    $isPartial={isPartialSelected}
                                >
                                    <Checkbox
                                        id={`exam-${exam.id}`}
                                        label={exam.title}
                                        checked={isAllSelected}
                                        onChange={() => handleExamToggle(subjects)}
                                    />
                                </S.ExamItem>

                                <S.SubjectArea>
                                    {subjects.map((subject, idx) => (
                                        <S.SubjectItem
                                            key={subject.id}
                                            $isSelected={selectedSubjectIds.includes(subject.id)}
                                        >
                                            <Checkbox
                                                id={`${subject.id}`}
                                                label={subject.subject}
                                                checked={selectedSubjectIds.includes(subject.id)}
                                                onChange={() => handleSubjectToggle(subject.id)}
                                            />
                                        </S.SubjectItem>
                                    ))}
                                </S.SubjectArea>
                            </S.ExamArea>
                        );
                    })}
                </S.SelectArea>
            )}
        </S.Container>
    );
}

export default ScopeSection;