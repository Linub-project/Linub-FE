import { EXAM_SUBJECT } from "@/constants/examSubject";
import * as PS from "../styles";
import * as S from "./styles";

const Sequence4 = ({
    form,
    onChange
}) => {

    const handleSubjectToggle = (id) => {
        const subjects = form.subjects.includes(id)
            ? form.subjects.filter(item => item !== id)
            : [...form.subjects, id];

        onChange("subjects", subjects);
    };

    return (
        <S.Container>
            <PS.InputArea>
                <div>
                    <PS.LabelText $required>과목</PS.LabelText>
                    <PS.LabelDescription>리눅스마스터 시험과 관련 있는 과목을 모두 선택해주세요.</PS.LabelDescription>
                </div>
                <S.SubjectArea>
                    {
                        EXAM_SUBJECT.map((subject) => {
                            const isSelected = form.subjects.includes(subject.id);
                            
                            return (
                                <S.SubjectItem key={subject.id}
                                    $selected={isSelected}
                                    onClick={() => handleSubjectToggle(subject.id)}
                                >
                                    <span
                                        className="typo-title-2"
                                        style={{color: "var(--color-text-label)", marginBottom: "4px"}}
                                    >{subject.label}</span>
                                    <span
                                        className="typo-content-1"
                                        style={{color: "var(--color-text-primary)", marginBottom: "12px"}}
                                    >{subject.title}</span>
                                    <S.TopicList>
                                        {subject.topics.map((t, idx) => (
                                            <S.TopicItem key={idx} className="typo-content-3">
                                                {t}
                                            </S.TopicItem>
                                        ))}
                                    </S.TopicList>
                                </S.SubjectItem>
                            );
                        })
                    }
                </S.SubjectArea>
            </PS.InputArea>
        </S.Container>
    );
}

export default Sequence4;