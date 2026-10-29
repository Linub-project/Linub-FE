import CountSection from "@/components/examEntry/countSection";
import ExamSection from "@/components/examEntry/examSection";
import HeaderSection from "@/components/examEntry/headerSection";
import ModeSection from "@/components/examEntry/modeSection";
import PdfSection from "@/components/examEntry/pdfSection";
import ScopeSection from "@/components/examEntry/scopeSection";
import SummarySection from "@/components/examEntry/summarySection";
import { useState } from "react";
import * as S from "./styles";

const ExamEntry = () => {
    const [mode, setMode] = useState("FREE");
    const [scope, setScope] = useState("");
    const [selectedSubjectIds, setSelectedSubjectIds] = useState([]);
    const [exam, setExam] = useState({});
    const [count, setCount] = useState(30);
    const [duration, setDuration] = useState("무제한");
    const [isSend, setIsSend] = useState(false);

    return (
        <S.Container>
            <S.SubContainer>
                <HeaderSection />
                <ModeSection mode={mode} setMode={setMode}  />
                {
                    mode === "FREE" ?
                        <ScopeSection
                            scope={scope} setScope={setScope} 
                            selectedSubjectIds={selectedSubjectIds} setSelectedSubjectIds={setSelectedSubjectIds}
                        />
                    :
                        <ExamSection exam={exam} setExam={setExam}
                            count={count} setCount={setCount}
                            setDuration={setDuration}
                        />
                }
                {
                    mode === "FREE" && <CountSection count={count} setCount={setCount} />
                }
                <S.BottomArea>
                    <SummarySection
                        mode={mode}
                        scope={scope}
                        selectedSubjectIds={selectedSubjectIds}
                        exam={exam}
                        count={count}
                        duration={duration}
                        isSend={isSend}
                        setIsSend={setIsSend}
                    />
                    <PdfSection
                        mode={mode}
                        scope={scope}
                        selectedSubjectIds={selectedSubjectIds}
                        exam={exam}
                        count={count}
                        duration={duration}
                        isSend={isSend}
                        setIsSend={setIsSend}
                    />
                </S.BottomArea>
            </S.SubContainer>
        </S.Container>
    );
}

export default ExamEntry;