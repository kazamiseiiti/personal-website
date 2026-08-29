import { SectionPage, getSectionMetadata, type LocalizedPageProps } from "@/components/pages/section-page";

export const generateMetadata = (props: LocalizedPageProps) => getSectionMetadata(props, "blog");

export default function BlogPage(props: LocalizedPageProps) {
  return <SectionPage {...props} pageKey="blog" />;
}
