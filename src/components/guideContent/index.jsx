import Hr from "@/components/common/layout/hr";
import WrongComponent from "@/components/common/wrong";
import Certification from "@/components/guideContent/certification";
import Community from "@/components/guideContent/community";
import Dictionary from "@/components/guideContent/dictionary";
import Exam from "@/components/guideContent/exam";
import Faq from "@/components/guideContent/faq";
import Introduction from "@/components/guideContent/introduction";
import Lab from "@/components/guideContent/lab";
import Mypage from "@/components/guideContent/mypage";
import Pdf from "@/components/guideContent/pdf";
import Problem from "@/components/guideContent/problem";
import Roadmap from "@/components/guideContent/roadmap";
import Service from "@/components/guideContent/service";
import GuideSidebar from "@/components/guideContent/sidebar";
import Statistic from "@/components/guideContent/statistic";
import Study from "@/components/guideContent/study";
import Wrong from "@/components/guideContent/wrong";
import { GUIDE_CATEGORY } from "@/constants/guideCategory";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";

const Guide = () => {
    const navigate = useNavigate();
    const { category = "INTRODUCTION" } = useParams();
    const parentCategory = GUIDE_CATEGORY.find(
        item => item.subCategory.some(sub => sub.key === category)
    );
    const categoryInfo = parentCategory?.subCategory.find(
        item => item.key === category
    );
    const allGuides = GUIDE_CATEGORY.flatMap(
        category => category.subCategory
    );
    const relatedGuides = (categoryInfo?.relation ?? [])
        .map(key => allGuides.find(item => item.key === key))
        .filter(Boolean);

    if(!categoryInfo) return <WrongComponent />

    const getComponent = () => {
        switch(category) {
            case "INTRODUCTION": return <Introduction />;
            case "DICTIONARY": return <Dictionary />;
            case "LINUX_LAB": return <Lab />;
            case "EXAM": return <Exam />;
            case "COMMUNITY": return <Community />;
            case "MYPAGE": return <Mypage />;
            case "ROADMAP": return <Roadmap />;
            case "CERTIFICATION": return <Certification />;
            case "STUDY_METHOD": return <Study />;
            case "WRONG_PROBLEM": return <Wrong />;
            case "PDF": return <Pdf />;
            case "PROBLEM_CREATION": return <Problem />;
            case "STATISTICS": return <Statistic />;
            case "FAQ": return <Faq />;
            case "SERVICE_GUIDE": return <Service />;
        }
    }

    return (
        <S.Container>
            <S.SubContainer>
                <GuideSidebar category={category} />
                <S.ContentArea>
                    <div
                        className="typo-content-3"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            color: "var(--color-text-default)"
                        }}
                    >
                        <span
                            style={{color: "var(--color-text-default)", cursor: "pointer"}}
                            onClick={() => navigate("/guide")}
                        >Linub 가이드</span>
                        /
                        <span
                            style={{color: "var(--color-text-default)", cursor: "default"}}
                        >{parentCategory.label}</span>
                        /
                        <span
                            style={{color: "var(--color-primary)", cursor: "default"}}
                        >{categoryInfo.label}</span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                        }}
                    >
                        <p
                            className="typo-heading-1"
                        >{categoryInfo.label}</p>
                        <p
                            className="typo-content-2"
                            style={{
                                color: "var(--color-text-default)"
                            }}
                        >{categoryInfo.description}</p>
                    </div>
                    <Hr />
                    {getComponent()}
                    {
                        categoryInfo.relation && <>
                            <Hr />
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "100%",
                                }}
                            >
                                <p
                                    className="typo-title-1"
                                    style={{color: "var(--color-text-primary)", marginBottom: "12px"}}
                                >관련 가이드</p>
                                <S.RelationArea>
                                    {
                                        relatedGuides.map((item, idx) => (
                                            <S.RelationItem key={idx}
                                                onClick={() => navigate(`/guide/${item.key}`)}
                                            >
                                                <span
                                                    className="typo-title-1"
                                                    style={{color: "var(--color-text-primary"}}
                                                >{item.label}</span>
                                                <span
                                                    className="typo-content-4"
                                                    style={{color: "var(--color-text-label"}}
                                                >{item.description}</span>
                                            </S.RelationItem>
                                        ))
                                    }
                                </S.RelationArea>
                            </div>
                        </>
                    }
                </S.ContentArea>
            </S.SubContainer>
        </S.Container>
    );
}

export default Guide;