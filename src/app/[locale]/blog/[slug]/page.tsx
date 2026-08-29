import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Article } from "@/components/blog/article";
import { resolveLocale } from "@/i18n/get-dictionary";
import { getPost, getStaticPostParams } from "@/lib/blog/content";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getStaticPostParams();
}

export async function generateMetadata(
  props: PageProps<"/[locale]/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const locale = await resolveLocale(props.params);
  const post = await getPost(slug, locale);

  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage(props: PageProps<"/[locale]/blog/[slug]">) {
  const { slug } = await props.params;
  const locale = await resolveLocale(props.params);
  const post = await getPost(slug, locale);

  if (!post) notFound();
  return <Article locale={locale} post={post} />;
}
