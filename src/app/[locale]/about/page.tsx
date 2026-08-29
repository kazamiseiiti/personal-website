import { SectionPage, getSectionMetadata, type LocalizedPageProps } from "@/components/pages/section-page";

export const generateMetadata = (props: LocalizedPageProps) => getSectionMetadata(props, "about");

export default function AboutPage(props: LocalizedPageProps) {
  return <SectionPage {...props} pageKey="about" />;
}
