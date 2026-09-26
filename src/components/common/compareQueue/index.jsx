import down from "@/assets/icon/icon_down.svg";
import Button from "@/components/common/button/default";
import Hr from "@/components/common/layout/hr";
import { useCompareQueue } from "@/contexts/compareQueueContext";
import { useState } from "react";
import * as S from "./styles";

const CompareQueue = () => {
    const [isQueueOpen, setIsQueueOpen] = useState(false);
    const { queue, remove } = useCompareQueue();

    return (
        <>
            {
                isQueueOpen
                    ? 
                        <S.OpenContainer>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "100%",
                                    padding: "12px 16px"
                                }}
                                onClick={() => setIsQueueOpen(false)}
                            >
                                <span
                                    className="typo-title-1"
                                    style={{
                                        color: "var(--color-text-primary)"
                                    }}
                                >사전 비교</span>
                                <img src={down}/>
                            </div>
                            <Hr />
                            <div
                                style={{
                                    width: "100%"
                                }}
                            >
                                {queue.length === 0 ? (
                                    <div
                                        className="typo-content-2"
                                        style={{
                                            padding: "12px 16px"
                                        }}
                                    >비교할 사전을 추가해주세요.</div>
                                ) : (
                                    queue.map((item) => (
                                        <S.QueueItem key={item.id}>
                                            <span
                                                className="typo-content-1"
                                                style={{color: "var(--color-text-primary)"}}
                                            >{item.title}</span>
                                            <span
                                                className="typo-content-3"
                                                style={{color: "var(--neutral-300)", cursor: "pointer"}}
                                                onClick={() => remove(item.id)}
                                            >제거</span>
                                        </S.QueueItem>
                                    ))
                                )}
                            </div>
                            <Hr />
                            <div style={{padding: "12px 16px", width: "100%"}}>
                                <Button
                                    size={"small"}
                                    text={"비교 시작"}
                                    width={"100%"}
                                    disabled={queue.length < 2}
                                />
                            </div>
                        </S.OpenContainer>
                    :
                        <S.CloseContainer onClick={() => setIsQueueOpen(true)}>
                            <div
                                className="typo-content-1"
                                style={{
                                    display: "flex",
                                    width: "24px",
                                    height: "24px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: queue.length === 2 ? "var(--color-primary)" : "var(--neutral-500)",
                                    borderRadius: "50%",
                                    marginRight: "8px",
                                    color: "var(--white)"
                                }}
                            >{queue.length}</div>
                            <div
                                className="typo-title-1"
                                style={{
                                    color: queue.length === 2 ? "var(--color-primary)" : "var(--color-text-primary)"
                                }}
                            >사전 비교</div>
                        </S.CloseContainer>
            }
        </>
    );
}

export default CompareQueue;