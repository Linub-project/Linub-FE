import * as A from "@/apis/admin";
import { getErrorMessage } from "@/apis/error";
import Button from "@/components/common/button/default";
import Pagination from "@/components/common/pagination";
import { useToast } from "@/contexts/toastContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProblemReconciliation from "./problemReconciliation";
import * as S from "./styles";

const AdminProblemManagement = ({menu}) => {
    const { showToast } = useToast();
    const navigate = useNavigate();
    const [problems, setProblems] = useState([]);
    const [pageable, setPageable] = useState({
        page: 0,
        size: 20,
        sort: "id",
        direction: "asc"
    });
    const [openModal, setOpenModal] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const fetchAllProblems = async () => {
        try {
            const response = await A.getAllProblems(pageable);
            setProblems(response.data)
        } catch (error) {
            showToast(getErrorMessage(error));
        }
    }

    const handlePageChange = (page) => {
        setPageable(prev => ({...prev,page}));
        setSelectedItemId(null);
        setOpenModal(false);
    };

    useEffect(() => {
        fetchAllProblems();
    }, [pageable]);

    const handleProblemClick = (id) => {
        setOpenModal(true);
        setSelectedItemId(id);
    }

    const handleProblemUpdate = () => {
        setOpenModal(false);
        fetchAllProblems();
    }

    return (
        <S.Container>
            <span
                className="typo-heading-3"
                style={{color: "var(--color-text-primary)"}}
            >{menu?.label}</span>
            {
                openModal && <ProblemReconciliation 
                    problemId={selectedItemId}
                    onClose={handleProblemUpdate}
                />
            }
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px"
                }}
            >
                <Button
                    text="+ Problem"
                    size="small"
                    onClick={() => navigate("/admin/problem/addProblem")}
                />
                <Button
                    text="+ Problem(File)"
                    size="small"
                    onClick={() => navigate("/admin/problem/addProblemWithFile")}
                />
            </div>
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
                            <th>Question</th>
                            <th>Type</th>
                            <th>Solved Count</th>
                            <th>Correct Count</th>
                        </tr>
                        {
                            problems?.content?.map((item) => {
                                const isSelected = selectedItemId === item.id;
                                return (
                                    <tr key={item.id}
                                        className="typo-content-1"
                                        onClick={() => handleProblemClick(item.id)}
                                        style={{
                                            backgroundColor: isSelected ? "var(--color-primary-bg)" : ""
                                        }}
                                    >
                                        <S.Id style={{color: isSelected ? "var(--color-primary)" : ""}}>{item.id}</S.Id>
                                        <S.Question style={{color: isSelected ? "var(--color-primary)" : ""}}>{item.question}</S.Question>
                                        <S.Type style={{color: isSelected ? "var(--color-primary)" : ""}}>{item.type}</S.Type>
                                        <S.Cnt style={{color: isSelected ? "var(--color-primary)" : ""}}>{item.solvedCnt}</S.Cnt>
                                        <S.Cnt style={{color: isSelected ? "var(--color-primary)" : ""}}>{item.correctCnt}</S.Cnt>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </S.Table>
            </div>
            <Pagination
                page={problems}
                onChange={handlePageChange}
            />
        </S.Container>
    );
}

export default AdminProblemManagement;