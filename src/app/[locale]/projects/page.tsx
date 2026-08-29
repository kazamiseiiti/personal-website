import { SectionPage, getSectionMetadata, type LocalizedPageProps } from "@/components/pages/section-page";

export const generateMetadata = (props: LocalizedPageProps) => getSectionMetadata(props, "projects");

export default function ProjectsPage(props: LocalizedPageProps) {
  return <SectionPage {...props} pageKey="projects" />;
}
