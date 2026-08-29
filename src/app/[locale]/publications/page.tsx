import { SectionPage, getSectionMetadata, type LocalizedPageProps } from "@/components/pages/section-page";

export const generateMetadata = (props: LocalizedPageProps) => getSectionMetadata(props, "publications");

export default function PublicationsPage(props: LocalizedPageProps) {
  return <SectionPage {...props} pageKey="publications" />;
}
