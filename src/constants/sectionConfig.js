import ArgumentSection from "@/components/item/command/argumentSection";
import OptionSection from "@/components/item/command/optionSection";
import SubcommandSection from "@/components/item/command/subcommandSection";
import SyntaxSection from "@/components/item/command/syntaxSection";
import ContentSection from "@/components/item/common/contentSection";
import ExampleSection from "@/components/item/common/exampleSection";
import HeaderSection from "@/components/item/common/headerSection";
import MemoSection from "@/components/item/common/memoSection";
import RelatedCommandSection from "@/components/item/common/relatedCommandSection";
import RelatedConceptSection from "@/components/item/common/relatedConceptSection";
import RelatedFileSection from "@/components/item/common/relatedFileSection";
import TagSection from "@/components/item/common/tagSection";
import FormatSection from "@/components/item/file/formatSection";
import PathSection from "@/components/item/file/pathSection";

const hasRelations = (item, type) => item.relations?.some(relation => relation.type === type);

export const SECTION_CONFIG = {
    CONCEPT: [
        {
            id: "header",
            label: "처음",
            component: HeaderSection
        },
        {
            id: "content",
            label: "개요",
            component: ContentSection
        },
        {
            id: "examples",
            label: "예시",
            component: ExampleSection,
            isVisible: item => item.examples?.length > 0
        },
        {
            id: "concept",
            label: "관련 개념",
            component: RelatedConceptSection,
            isVisible: item => hasRelations(item, "CONCEPT")
        },
        {
            id: "command",
            label: "관련 명령어",
            component: RelatedCommandSection,
            isVisible: item => hasRelations(item, "COMMAND")
        },
        {
            id: "file",
            label: "관련 파일",
            component: RelatedFileSection,
            isVisible: item => hasRelations(item, "FILE")
        },
        {
            id: "tag",
            label: "태그",
            component: TagSection,
            isVisible: item => item.tags?.length > 0
        },
        {
            id: "memo",
            label: "개인 메모",
            component: MemoSection
        },
    ],
    COMMAND: [
        {
            id: "header",
            label: "처음",
            component: HeaderSection
        },
        {
            id: "content",
            label: "개요",
            component: ContentSection
        },
        {
            id: "syntax",
            label: "문법",
            component: SyntaxSection,
            isVisible: item => item.data?.syntax?.length > 0
        },
        {
            id: "subcommands",
            label: "서브커맨드",
            component: SubcommandSection,
            isVisible: item => item.data?.subcommands?.length > 0
        },
        {
            id: "arguments",
            label: "인자",
            component: ArgumentSection,
            isVisible: item => item.data?.arguments?.length > 0
        },
        {
            id: "options",
            label: "옵션",
            component: OptionSection,
            isVisible: item => item.data?.options?.length > 0
        },
        {
            id: "examples",
            label: "예시",
            component: ExampleSection,
            isVisible: item => item.examples?.length > 0
        },
        {
            id: "concept",
            label: "관련 개념",
            component: RelatedConceptSection,
            isVisible: item => hasRelations(item, "CONCEPT")
        },
        {
            id: "command",
            label: "관련 명령어",
            component: RelatedCommandSection,
            isVisible: item => hasRelations(item, "COMMAND")
        },
        {
            id: "file",
            label: "관련 파일",
            component: RelatedFileSection,
            isVisible: item => hasRelations(item, "FILE")
        },
        {
            id: "tag",
            label: "태그",
            component: TagSection,
            isVisible: item => item.tags?.length > 0
        },
        {
            id: "memo",
            label: "개인 메모",
            component: MemoSection
        },
    ],
    FILE: [
        {
            id: "header",
            label: "처음",
            component: HeaderSection
        },
        {
            id: "content",
            label: "개요",
            component: ContentSection
        },
        {
            id: "path",
            label: "파일 경로",
            component: PathSection,
            isVisible: item => Boolean(item.data?.path?.trim())
        },
        {
            id: "format",
            label: "파일 형식",
            component: FormatSection,
            isVisible: item => Boolean(item.data?.format?.trim())
        },
        {
            id: "examples",
            label: "예시",
            component: ExampleSection,
            isVisible: item => item.examples?.length > 0
        },
        {
            id: "concept",
            label: "관련 개념",
            component: RelatedConceptSection,
            isVisible: item => hasRelations(item, "CONCEPT")
        },
        {
            id: "command",
            label: "관련 명령어",
            component: RelatedCommandSection,
            isVisible: item => hasRelations(item, "COMMAND")
        },
        {
            id: "file",
            label: "관련 파일",
            component: RelatedFileSection,
            isVisible: item => hasRelations(item, "FILE")
        },
        {
            id: "tag",
            label: "태그",
            component: TagSection,
            isVisible: item => item.tags?.length > 0
        },
        {
            id: "memo",
            label: "개인 메모",
            component: MemoSection
        },
    ],
};