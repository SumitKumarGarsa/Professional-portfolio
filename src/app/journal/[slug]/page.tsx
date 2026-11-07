import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { postsData, BlogPost } from "@/data/posts";
import { siteConfig } from "@/data/site";
import Footer from "@/components/layout/Footer";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Calendar,
  Share2,
  Copy,
  Check,
  BookOpen,
} from "lucide-react";

interface ArticleProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: ArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const post = postsData.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} — Journal`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: `${post.title} | ${siteConfig.fullName}`,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [siteConfig.fullName],
      tags: post.tags,
    },
  };
}

export default async function ArticlePage({ params }: ArticleProps) {
  const { slug } = await params;
  const postIndex = postsData.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = postsData[postIndex];
  const relatedPosts = postsData.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
      <main id="main-content" className="pt-[88px] sm:pt-[98px] lg:pt-[108px] pb-20 sm:pb-32 px-6 sm:px-12 lg:px-[76px]">
        <div className="max-w-5xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-8 sm:mb-12">
            <Link
              href="/journal"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Journal</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12 sm:mb-16 pb-12 border-b border-[var(--border)]">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--muted)] mb-6">
              <span className="text-[var(--accent)] font-semibold uppercase">{post.category}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </span>
            </div>

            <h1 className="font-display text-[clamp(40px,6.5vw,96px)] uppercase tracking-tight text-[var(--text)] leading-[0.95] mb-6">
              {post.title}
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[var(--muted)] leading-relaxed">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-[var(--surface-card)] border border-[var(--border)] font-mono text-xs uppercase tracking-wider text-[var(--muted)]"
                >
                  #{t}
                </span>
              ))}
            </div>
          </header>

          {/* Main Layout: Table of Contents & Article Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Table of Contents Sticky Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-[140px] p-6 rounded-xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--text)] mb-4 font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Table of Contents</span>
              </div>
              <ul className="flex flex-col gap-2.5 font-sans text-xs text-[var(--muted)]">
                {post.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <a
                      href={`#${toc.id}`}
                      className="hover:text-[var(--accent)] transition-colors block py-0.5"
                    >
                      {toc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Article Body */}
            <article className="lg:col-span-8 font-sans text-[var(--text)]/90 text-base sm:text-lg leading-relaxed flex flex-col gap-8">
              <div
                className="prose-custom whitespace-pre-line leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/### (.*?)\n/g, '<h3 class="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[var(--text)] mt-10 mb-4 pt-6 border-t border-[var(--border)]">$1</h3>')
                    .replace(/```javascript([\s\S]*?)```/g, '<pre class="my-6 p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] font-mono text-xs sm:text-sm text-[var(--text)] overflow-x-auto leading-relaxed">$1</pre>')
                    .replace(/```typescript([\s\S]*?)```/g, '<pre class="my-6 p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] font-mono text-xs sm:text-sm text-[var(--text)] overflow-x-auto leading-relaxed">$1</pre>')
                    .replace(/```tsx([\s\S]*?)```/g, '<pre class="my-6 p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] font-mono text-xs sm:text-sm text-[var(--text)] overflow-x-auto leading-relaxed">$1</pre>'),
                }}
              />

              {/* Author Attribution Box */}
              <div className="mt-12 p-8 rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[var(--border)] bg-[var(--surface)] shrink-0 shadow-md">
                  <Image
                    src={siteConfig.profileImage}
                    alt={siteConfig.fullName}
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="font-display text-2xl uppercase tracking-tight text-[var(--text)]">
                    Written by {siteConfig.fullName}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[var(--muted)] mt-1.5 leading-relaxed">
                    Senior MERN Stack Architect & Creative Engineer building scalable web architectures and sub-100ms distributed systems globally.
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Related Technical Notes */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 sm:mt-28 pt-12 border-t border-[var(--border)]">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-6 block">
                Related Technical Notes
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    href={`/journal/${rPost.slug}`}
                    className="group p-8 rounded-xl bg-[var(--surface-card)] border border-[var(--border)] hover:border-[var(--text)]/30 transition-colors flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <span className="font-mono text-xs uppercase text-[var(--accent)] font-semibold mb-2 block">
                        {rPost.category}
                      </span>
                      <h4 className="font-display text-2xl uppercase tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors leading-none mb-3">
                        {rPost.title}
                      </h4>
                      <p className="font-sans text-xs text-[var(--muted)] line-clamp-2">
                        {rPost.excerpt}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between font-mono text-xs text-[var(--muted)] group-hover:text-[var(--text)]">
                      <span className="uppercase">Read Essay</span>
                      <ArrowUpRight className="w-4 h-4 text-[var(--accent)]" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
