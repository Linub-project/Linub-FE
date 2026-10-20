import * as C from "@/apis/certification";
import { getErrorMessage } from "@/apis/error";
import Button from "@/components/common/button/default";
import Image from "@/components/common/image";
import { TextArea } from "@/components/common/input/textarea/styles";
import Hr from "@/components/common/layout/hr";
import Pagination from "@/components/common/pagination";
import { useToast } from "@/contexts/toastContext";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { getCertificationStatusStyle } from "@/utils/certificationStatusStyler";
import { CERTIFICATION } from "@/constants/certification";

const AdminCertificationManagement = ({menu}) => {
    const { showToast } = useToast();
    const [requests, setRequests] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [pageable, setPageable] = useState({
        page: 0,
        size: 20,
        sort: "createdAt",
        direction: "desc"
    });
    const [reasonValue, setReasonValue] = useState("");
    const [isSend, setIsSend] = useState(false);

    const fetchAllRequests = async () => {
        try {
            const response = await C.getAllCertificationRequests(pageable);
            setRequests(response.data);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchAllRequests();
    }, []);

    const handlePageChange = (page) => {
        setPageable(prev => ({...prev,page}));
        setSelectedItem(null);
        setOpenModal(false);
    };

    const handleRequestClick = (item) => {
        if(selectedItem === item) {
            setSelectedItem(null);
            return;
        }
        setSelectedItem(item);
    }
    
    const handleSubmitJudge = async (status) => {
        try {
            setIsSend(true)
            const form = {
                reason: reasonValue,
                status: status
            }
            await C.updateCertificationRequest(form, selectedItem.id);
            setSelectedItem(null);
            fetchAllRequests();
            setReasonValue("");
        } catch (error) {
            showToast(getErrorMessage(error));
        } finally {
            setIsSend(false);
        }
    }

    return (
        <S.Container>
            <S.SubContainer>
                <span
                    className="typo-heading-3"
                    style={{color: "var(--color-text-primary)"}}
                >{menu?.label}</span>
                <div
                    style={{
                        backgroundColor: "var(--white)",
                        width: "100%",
                        border: "1px solid var(--color-border)",
                        borderRadius: "6px",
                        overflow: "hidden"
                    }}
                >
                    <S.Table
                        style={{
                            borderCollapse: "collapse",
                            width: "100%"
                        }}
                    >
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Certification</th>
                                <th>Status</th>
                                <th>Requested At</th>
                            </tr>
                            {
                                requests?.content?.map((item) => {
                                    const isSelected = selectedItem === item;
                                    const cert = CERTIFICATION.find(c => c.value === item.certification);
                                    const statusColor = item.status === "WAIT" ? "" : item.status === "ACCEPT" ? "var(--color-primary)" : "var(--color-danger)"
                                    return (
                                        <tr key={item.id}
                                            className="typo-content-1"
                                            onClick={() => handleRequestClick(item)}
                                            style={{
                                                backgroundColor: isSelected ? "var(--color-primary-bg)" : ""
                                            }}
                                        >
                                            <S.Id style={{color: isSelected ? "var(--color-primary)" : ""}}>{item.id}</S.Id>
                                            <S.Nickname style={{color: isSelected ? "var(--color-primary)" : ""}}>{item.username}</S.Nickname>
                                            <S.Certification style={{color: isSelected ? "var(--color-primary)" : ""}}>{cert.label}</S.Certification>
                                            <S.Status
                                                className="typo-title-2"
                                                style={{color: statusColor}}
                                            >{item.status}</S.Status>
                                            <S.Date style={{color: isSelected ? "var(--color-primary)" : ""}}>{formatDate(item.createdAt, DATE_FORMAT.DOT_DATE_TIME)}</S.Date>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </S.Table>
                </div>
                <Pagination
                    page={requests}
                    onChange={handlePageChange}
                />
            </S.SubContainer>
            {
                selectedItem && <S.ManagementArea>
                    <p
                        className="typo-title-1"
                        style={{
                            padding: "12px 16px",
                            color: "var(--color-text-primary)"
                        }}
                    >요청 상세</p>
                    <Hr />
                    <div
                        style={{
                            padding: "12px 16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px"
                        }}
                    >
                        <S.LabelArea>
                            <span style={{color: "var(--color-text-default)"}}>요청 ID</span>
                            <span>{selectedItem.id}</span>
                        </S.LabelArea>
                        <S.LabelArea>
                            <span style={{color: "var(--color-text-default)"}}>요청자 닉네임</span>
                            <span>{selectedItem.username}</span>
                        </S.LabelArea>
                        <S.LabelArea>
                            <span style={{color: "var(--color-text-default)"}}>자격 종류</span>
                            <span>{selectedItem.id}</span>
                        </S.LabelArea>
                        <S.LabelArea>
                            <span style={{color: "var(--color-text-default)"}}>요청 일시</span>
                            <span>{formatDate(selectedItem.createdAt, DATE_FORMAT.DOT_DATE_TIME)}</span>
                        </S.LabelArea>
                        <S.LabelArea>
                            <span style={{color: "var(--color-text-default)"}}>상태</span>
                            <span>{selectedItem.status}</span>
                        </S.LabelArea>
                        {
                            selectedItem.imageUrl !== "removed" && <div
                                className="typo-content-3"
                            >
                                <span style={{color: "var(--color-text-default)"}}>증빙 자료</span>
                                <Image src={selectedItem.imageUrl} width="100%"/>
                            </div>
                        }
                        {
                            selectedItem.status !== "WAIT" && <>
                                <Hr />
                                <S.LabelArea>
                                    <span style={{color: "var(--color-text-default)"}}>처리 일시</span>
                                    <span>{formatDate(selectedItem.updatedAt, DATE_FORMAT.DOT_DATE_TIME)}</span>
                                </S.LabelArea>
                                <S.LabelArea>
                                    <span style={{color: "var(--color-text-default)"}}>담당 관리자</span>
                                    <span>{selectedItem.admin.nickname || "없음"}</span>
                                </S.LabelArea>
                                <S.LabelArea>
                                    <span style={{color: "var(--color-text-default)"}}>사유</span>
                                    <span>{selectedItem.reason}</span>
                                </S.LabelArea>
                            </>
                        }
                        {
                            selectedItem.status === "WAIT" && <>
                                <Hr />
                                <span className="typo-content-3" style={{color: "var(--color-text-default)"}}>처리</span>
                                <TextArea
                                    placeholder="반려 시 사유를 입력하세요."
                                    value={reasonValue}
                                    onChange={(e) => setReasonValue(e.target.value)}
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        width: "100%",
                                        gap: "8px"
                                    }}
                                >
                                    <Button
                                        text="승인"
                                        loadingText="요청 중"
                                        loading={isSend}
                                        size="small"
                                        width="100%"
                                        onClick={() => handleSubmitJudge("ACCEPT")}
                                    />
                                    <Button
                                        text="반려"
                                        loadingText="요청 중"
                                        loading={isSend}
                                        size="small"
                                        variant="quinary"
                                        width="100%"
                                        disabled={reasonValue.length === 0}
                                        onClick={() => handleSubmitJudge("REJECT")}
                                    />
                                </div>
                            </>
                        }
                    </div>
                </S.ManagementArea>
            }
        </S.Container>
    );
}

export default AdminCertificationManagement;