import * as A from "@/apis/admin";
import { getErrorMessage } from "@/apis/error";
import Button from "@/components/common/button/default";
import { TopicChip } from "@/components/common/cardchip/CardChip";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { TextArea } from "@/components/common/input/textarea/styles";

const AddComparison = () => {
    const navigate = useNavigate();
    const [dictionaries, setDictionaries] = useState([]);
    const [buttonText, setButtonText] = useState("등록");
    const [isSend, setIsSend] = useState(false);
    const [leftId, setLeftId] = useState(0);
    const [rightId, setRightId] = useState(0);
    const [content, setContent] = useState("");

    const handleSelectedIdClick = (id) => {
        if(leftId === 0) {
            setLeftId(id);
        } else if(leftId === id) {
            setLeftId(rightId);
            setRightId(0);
        } else if(rightId === 0) {
            setRightId(id);
        } else if(rightId === id) {
            setRightId(0);
        } else {
            return;
        }
    }
    
    const fetchAllDictionary = async () => {
        try {
            const response = await A.getAllDictionary();
            setDictionaries(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchAllDictionary();
    }, []);

    const handleSubmit = async () => {
        setIsSend(true);
        try {
            const request = {
                leftId,
                rightId,
                content
            }

            await A.createDictionaryComparison(request);
            setTimeout(() => setButtonText("등록 완료"), 3000);
            setLeftId(0);
            setRightId(0);
            setContent("");
        } catch (error) {

        } finally {
            setButtonText("등록");
            setIsSend(false);
        }
    };

    return (
        <S.Container>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <Button
                    onClick={() => navigate(-1)}
                    text="← 뒤로가기"
                    variant="tertiary"
                    size="small"
                />
            </div>
            <div>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)", marginBottom: "8px"}}
                >개념 목록</p>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "4px"
                    }}
                >
                    {
                        dictionaries.filter(item => item.type === "CONCEPT").map((item) => (
                            <TopicChip key={item.id} $color="var(--color-secondary)"
                                style={{
                                    border: item.id === leftId || item.id === rightId ? "1px solid var(--color-secondary)" : ""
                                }}
                                onClick={() => handleSelectedIdClick(item.id)}
                            >{item.topic}</TopicChip>
                        ))
                    }
                </div>
            </div>
            <div>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)", marginBottom: "8px"}}
                >명령어 목록</p>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "4px"
                    }}
                >
                    {
                        dictionaries.filter(item => item.type === "COMMAND").map((item) => (
                            <TopicChip key={item.id} $color="var(--color-primary)"
                                style={{
                                    border: item.id === leftId || item.id === rightId ? "1px solid var(--color-primary)" : ""
                                }}
                                onClick={() => handleSelectedIdClick(item.id)}
                            >{item.topic}</TopicChip>
                        ))
                    }
                </div>
            </div>
            <div>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)", marginBottom: "8px"}}
                >파일 목록</p>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "4px"
                    }}
                >
                    {
                        dictionaries.filter(item => item.type === "FILE").map((item) => (
                            <TopicChip key={item.id} $color="var(--color-warning)"
                                style={{
                                    border: item.id === leftId || item.id === rightId ? "1px solid var(--color-warning)" : ""
                                }}
                                onClick={() => handleSelectedIdClick(item.id)}
                            >{item.topic}</TopicChip>
                        ))
                    }
                </div>
            </div>
            <div style={{width: "100%"}}>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)", marginBottom: "8px"}}
                >내용 입력</p>
                <TextArea 
                    placeholder="공통점/차이점 등에 대한 내용 작성"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <Button
                onClick={handleSubmit}
                text={buttonText}
                width="100%"
                loading={isSend}
            />
        </S.Container>
    );
}

export default AddComparison;
