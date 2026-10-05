import { useEffect, useState } from "react";
import * as S from "./styles";
import * as ST from "@/apis/statistic";
import { SkeletonBox } from "@/components/common/skeleton/style";

const Statistic = () => {
    const [stat, setStat] = useState({});
    const [loading, setLoading] = useState(true);
    
    const fetchStatistic = async () => {
        try {
            const response = await ST.getHomeStatistics();
            setStat(response.data);
            setLoading(false);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchStatistic();
    }, []);

    return (
        <S.Container>
            <span
                className="typo-title-1"
                style={{
                    color: "var(--color-text-primary)"
                }}
            >플랫폼 학습 통계</span>
            {
                loading ?
                    (
                        <SkeletonBox $h="200px" />
                    )
                    :
                    (<S.TableArea>
                        <table>
                            <colgroup>
                                <col style={{ width: "60%" }} />
                                <col style={{ width: "40%" }} />
                            </colgroup>
                            <tbody>
                                <tr style={{cursor: "default"}}>
                                    <S.Category>등록된 개념</S.Category>
                                    <S.Value>{stat.concept.value}</S.Value>
                                </tr>
                                <tr style={{cursor: "default"}}>
                                    <S.Category>등록된 명령어</S.Category>
                                    <S.Value>{stat.command.value}</S.Value>
                                </tr>
                                <tr style={{cursor: "default"}}>
                                    <S.Category>등록된 파일 설명</S.Category>
                                    <S.Value>{stat.file.value}</S.Value>
                                </tr>
                                <tr style={{cursor: "default"}}>
                                    <S.Category>등록된 문제</S.Category>
                                    <S.Value>{stat.problem.value}</S.Value>
                                </tr>
                                <tr style={{cursor: "default"}}>
                                    <S.Category>응시 가능한 모의고사</S.Category>
                                    <S.Value>{stat.exam.value}</S.Value>
                                </tr>
                            </tbody>
                        </table>
                    </S.TableArea>)
            }
        </S.Container>
    );
}

export default Statistic;