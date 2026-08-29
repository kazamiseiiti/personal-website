import { SectionPage, getSectionMetadata, type LocalizedPageProps } from "@/components/pages/section-page";

export const generateMetadata = (props: LocalizedPageProps) => getSectionMetadata(props, "contact");

export default function ContactPage(props: LocalizedPageProps) {
  return <SectionPage {...props} pageKey="contact" />;
}
