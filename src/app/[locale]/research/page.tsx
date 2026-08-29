import { SectionPage, getSectionMetadata, type LocalizedPageProps } from "@/components/pages/section-page";

export const generateMetadata = (props: LocalizedPageProps) => getSectionMetadata(props, "research");

export default function ResearchPage(props: LocalizedPageProps) {
  return <SectionPage {...props} pageKey="research" />;
}
