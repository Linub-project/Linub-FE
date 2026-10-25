import * as PR from "@/apis/problemRequest";
import Button from "@/components/common/button/default";
import Intro from "@/components/problemRequest/intro";
import ProblemRequestPreview from "@/components/problemRequest/preview";
import Progress from "@/components/problemRequest/progress";
import Sequence1 from "@/components/problemRequest/sequence1";
import Sequence2 from "@/components/problemRequest/sequence2";
import Sequence3 from "@/components/problemRequest/sequence3";
import Sequence4 from "@/components/problemRequest/sequence4";
import Sequence5 from "@/components/problemRequest/sequence5";
import { SHORT_ANSWER_TYPE } from "@/constants/shortAnswerType";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";

const sequence = [
    Intro,
    Sequence1,
    Sequence2,
    Sequence3,
    Sequence4,
    Sequence5,
]

const ProblemRequest = () => {
    const navigate = useNavigate();
    const { page } = useParams();
    const currentPage = page === "intro" ? 0 : Number(page);
    const CurrentComponent = sequence[currentPage];
    const [form, setForm] = useState({
        title: "",
        type: "MULTIPLE",
        question: "",
        options: [
            {content: "", isAnswer: false},
            {content: "", isAnswer: false},
            {content: "", isAnswer: false},
            {content: "", isAnswer: false}
        ],
        image: null,
        sourceCode: "",
        language: "",
        shortAnswers: {answer: "", ignoreCase: true, type: SHORT_ANSWER_TYPE[0].value},
        explanation: "",
        subjects: []
    });
    const [buttonText, setButtonText] = useState("제출하기");
    const [openPreview, setOpenPreview] = useState(false);

    if (!CurrentComponent || !["intro", "1", "2", "3", "4", "5"].includes(page)) {
        return <Navigate to="/guide/intro" replace />;
    }

    const handleFormChange = (key, value) => {
        setForm(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handlePageChange = (direction) => {
        const nextPage = currentPage + direction;

        if (nextPage < 0 || nextPage > 5) return;

        navigate(`/problem/request/${nextPage === 0 ? "intro" : nextPage}`);
    };

    const validate = () => {
        if(form.type === "MULTIPLE" && form.options.length < 4) return false;
        if(form.type === "SHORT" && form.shortAnswers.length === 0) return false;
        if(form.sourceCode && !form.language) return false;
        return form.title && form.question && form.explanation && form.subjects.length > 0;
    }

    const handleSubmit = async () => {
        setButtonText("제출 중");

        try {
            const formData = new FormData();

            formData.append("title", form.title);
            formData.append("question", form.question);
            formData.append("type", form.type);
            formData.append("explanation", form.explanation);

            if (form.image) {
                formData.append("image", form.image);
            }

            if (form.sourceCode) {
                formData.append("sourceCode", form.sourceCode);
            }

            if (form.language) {
                formData.append("language", form.language);
            }

            form.subjects.forEach((subjectId, idx) => {
                formData.append(`subjects[${idx}]`, subjectId);
            });

            if (form.type === "MULTIPLE") {
                form.options.forEach((option, idx) => {
                    formData.append(`options[${idx}].content`, option.content);
                    formData.append(`options[${idx}].isAnswer`, option.isAnswer);
                });
            }

            if (form.type === "SHORT") {
                const shortAnswers = Array.isArray(form.shortAnswers)
                    ? form.shortAnswers
                    : [form.shortAnswers];

                shortAnswers.forEach((answer, idx) => {
                    formData.append(`shortAnswers[${idx}].answer`, answer.answer);
                    formData.append(`shortAnswers[${idx}].ignoreCase`, answer.ignoreCase);
                    formData.append(`shortAnswers[${idx}].type`, answer.type);
                });
            }

            await PR.createProblemRequest(formData);

            navigate("/mypage/problem-requests");
        } catch (error) {
        }
    };

    return (
        <S.Container>
            {
                openPreview ? <ProblemRequestPreview form={form} setOpenPreview={setOpenPreview} />
                :
                <>
                    <S.SubHeader>
                        <span
                            className="typo-content-1"
                            style={{color: "var(--color-text-default)", cursor: "pointer"}}
                            onClick={() => navigate("/mypage/problem-requests")}
                        >← 돌아가기</span>
                        <div
                            style={{
                                display: "flex",
                                gap: "12px"
                            }}
                        >
                            <Button
                                text="미리보기"
                                size="small"
                                variant="octonary"
                                style={{fontSize: "12px"}}
                                onClick={() => setOpenPreview(prev => !prev)}
                            />
                            <Button
                                text={buttonText}
                                size="small"
                                style={{fontSize: "12px"}}
                                disabled={!validate()}
                                onClick={handleSubmit}
                            />
                        </div>
                    </S.SubHeader>
                    <S.SubContainer>
                        <div>
                            <p
                                className="typo-heading-1"
                                style={{color: "var(--color-text-primary)", marginBottom: "6px"}}
                            >문제 업로드</p>
                            <p
                                className="typo-content-1"
                                style={{color: "var(--color-text-default)"}}
                            >Linux 및 Unix에 관한 지식을 바탕으로 새로운 문제를 작성할 수 있습니다.
                            제출한 문제는 심사를 거쳐 등록되며,
                            다른 사용자들의 학습과 시험 준비에 활용됩니다.</p>
                        </div>
                        {
                            currentPage > 0 && <Progress currentPage={currentPage} />
                        }
                        <CurrentComponent
                            form={form}
                            onChange={handleFormChange}
                        />
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: currentPage === 0 ? "flex-end" : "space-between"
                            }}
                        >
                            <Button
                                text="이전"
                                size="small"
                                variant="tertiary"
                                disabled={currentPage === 0}
                                onClick={() => handlePageChange(-1)}
                                style={{ display: currentPage === 0 && "none" }}
                            />
                            <Button
                                text={currentPage === 0 ? "시작하기" : currentPage === sequence.length-1 ? "제출하기" : "다음"}
                                size="small"
                                variant={currentPage === sequence.length-1 ? "primary" : "tertiary"}
                                disabled={currentPage === sequence.length-1 && !validate()}
                                onClick={() => handlePageChange(1)}
                            />
                        </div>
                    </S.SubContainer>
                </>
            }
        </S.Container>
    );
}

export default ProblemRequest;