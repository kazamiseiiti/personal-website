import { PostList } from "@/components/blog/post-list";
import { getSectionMetadata, type LocalizedPageProps } from "@/components/pages/section-page";
import { getDictionary, resolveLocale } from "@/i18n/get-dictionary";
import { listPosts } from "@/lib/blog/content";

export const generateMetadata = (props: LocalizedPageProps) => getSectionMetadata(props, "blog");

export default async function BlogPage(props: LocalizedPageProps) {
  const locale = await resolveLocale(props.params);
  const dictionary = await getDictionary(locale);
  const posts = await listPosts(locale);

  return (
    <section className="ambient-surface min-h-[70vh] border-b">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-7 h-1 w-12 rounded-full bg-accent" />
          <h1 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">{dictionary.pages.blog.title}</h1>
          <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">{dictionary.pages.blog.description}</p>
        </div>
        <div className="mt-12 max-w-4xl">
          <PostList locale={locale} posts={posts} />
        </div>
      </div>
    </section>
  );
}
