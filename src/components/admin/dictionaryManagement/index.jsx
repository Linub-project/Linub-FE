import * as A from "@/apis/admin";
import DictionaryReconciliation from "@/components/admin/dictionaryManagement/dictionaryReconciliation";
import Button from "@/components/common/button/default";
import { TopicChip } from "@/components/common/cardchip/CardChip";
import Modal from "@/components/common/modal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const AdminDictionaryManagement = ({menu}) => {
    const navigate = useNavigate();
    const [dictionaries, setDictionaries] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    
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

    const handleDictionaryButtonClick = (item) => {
        setOpenModal(true);
        setSelectedItem(item);
    }

    const handleOpenModal = (value) => {
        setOpenModal(value);
        fetchAllDictionary();
    }

    return (
        <S.Container>
            {
                openModal && <Modal
                    title={`Reconciliation - ${selectedItem.topic}`}
                    width="100%"
                    onClick={() => handleOpenModal(false)}
                >
                    <DictionaryReconciliation
                        item={selectedItem}
                        onSuccess={() => handleOpenModal(false)}
                    />
                </Modal>
            }
            <span
                className="typo-heading-3"
                style={{color: "var(--color-text-primary)"}}
            >{menu?.label}</span>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px"
                }}
            >
                <Button
                    text="+ Concept"
                    size="small"
                    onClick={() => navigate("/admin/dictionary/addConcept")}
                />
                <Button
                    text="+ Command"
                    size="small"
                    onClick={() => navigate("/admin/dictionary/addCommand")}
                />
                <Button
                    text="+ File"
                    size="small"
                    onClick={() => navigate("/admin/dictionary/addFile")}
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
                                onClick={() => handleDictionaryButtonClick(item)}
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
                                onClick={() => handleDictionaryButtonClick(item)}
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
                                onClick={() => handleDictionaryButtonClick(item)}
                            >{item.topic}</TopicChip>
                        ))
                    }
                </div>
            </div>
        </S.Container>
    );
}

export default AdminDictionaryManagement;