import { SkeletonBox } from "@/components/common/skeleton/style";
import * as INDEX from "@/components/item/itemIndex/styles";

import * as S from "@/components/item/styles";

const ItemPageSkeleton = () => {
    return (
        <S.Container>
            <S.SubContainer>
                <S.SectionArea
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        gap: "48px"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",

                            }}
                        >
                            <SkeletonBox $w="130px" $h="30px" />
                            <SkeletonBox $w="180px" $h="30px" />
                        </div>
                        <SkeletonBox $h="20px" />
                    </div>
                    {
                        Array.from({length: 8}).map((_, idx) => (
                            <SkeletonBox key={idx} $h="200px" />
                        ))
                    }
                </S.SectionArea>
                <INDEX.Container
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "220px"
                    }}
                >
                    <SkeletonBox $w="100%" $h="400px" />
                </INDEX.Container>
            </S.SubContainer>
        </S.Container>
    );
}

export default ItemPageSkeleton;