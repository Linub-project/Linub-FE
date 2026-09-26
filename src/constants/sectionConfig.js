import ArgumentSection from "@/components/item/command/argumentSection";
import ContentSection from "@/components/item/common/contentSection";
import ExampleSection from "@/components/item/common/exampleSection";
import FormatSection from "@/components/item/file/formatSection";
import MemoSection from "@/components/item/common/memoSection";
import OptionSection from "@/components/item/command/optionSection";
import PathSection from "@/components/item/file/pathSection";
import RelationSection from "@/components/item/common/relationSection";
import SubcommandSection from "@/components/item/command/subcommandSection";
import SyntaxSection from "@/components/item/command/syntaxSection";

export const SECTION_CONFIG = {
  CONCEPT: [
    { id: "content", label: "개요", component: ContentSection },
    { id: "examples", label: "예시", component: ExampleSection },
    { id: "relation", label: "관련 사전", component: RelationSection },
    { id: "memo", label: "개인 메모", component: MemoSection },
  ],
  
  COMMAND: [
    { id: "content", label: "개요", component: ContentSection },
    { id: "syntax", label: "사용법", component: SyntaxSection },
    { id: "subcommands", label: "서브커맨드", component: SubcommandSection },
    { id: "arguments", label: "인자", component: ArgumentSection },
    { id: "options", label: "옵션", component: OptionSection },
    { id: "examples", label: "예제", component: ExampleSection },
    { id: "relation", label: "관련 사전", component: RelationSection },
    { id: "memo", label: "개인 메모", component: MemoSection },
  ],
  
  FILE: [
    { id: "content", label: "개요", component: ContentSection },
    { id: "path", label: "파일 경로", component: PathSection },
    { id: "format", label: "파일 형식", component: FormatSection },
    { id: "examples", label: "예시", component: ExampleSection },
    { id: "relation", label: "관련 사전", component: RelationSection },
    { id: "memo", label: "개인 메모", component: MemoSection },
  ],
};