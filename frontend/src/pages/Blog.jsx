import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "../components/common/SEO";
import PageHeader from "../components/common/PageHeader";
import { BLOG_POSTS, findPost } from "../data/site";
import CTA from "../components/common/CTA";

export function Blog() {
  return (
    <>
      <SEO title="Rubber Industry Blog — Sonam Rubber Works" description="Practical, honest articles on rubber materials, gaskets, moulded parts and how to specify the right rubber component for your application." keywords="rubber blog, rubber material guide, rubber gasket selection, rubber moulding" path="/blog" />
      <PageHeader title="Insights & Articles" subtitle="Technical guides, comparisons and how-to's from our engineering team." breadcrumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]} />
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((b) => (
            <article key={b.slug} className="rt-card overflow-hidden group" data-testid={`post-${b.slug}`}>
              <div className="aspect-[16/10] overflow-hidden bg-[#eef1f6]">
                <img src={b.image} alt={b.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted2 mb-2">
                  <span className="bg-gold/20 text-navy px-2 py-0.5 rounded font-semibold uppercase">{b.category}</span>
                  <span><i className="fa-regular fa-calendar mr-1"></i>{new Date(b.date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span><i className="fa-regular fa-clock mr-1"></i>{b.read}</span>
                </div>
                <h3 className="font-heading font-semibold text-navy text-lg clamp-2">{b.title}</h3>
                <p className="text-muted2 text-sm mt-2 clamp-3">{b.excerpt}</p>
                <Link to={`/blog/${b.slug}`} className="text-brand font-semibold text-sm mt-3 inline-flex items-center gap-1 hover:text-navy">Read Article <i className="fa-solid fa-arrow-right text-xs"></i></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = findPost(slug);
  if (!post) return <Navigate to="/404" replace />;
  return (
    <>
      <SEO title={`${post.title} — Sonam Rubber Works`} description={post.excerpt} keywords={`${post.category.toLowerCase()}, rubber ${post.category.toLowerCase()}, ${post.title.toLowerCase()}`} path={`/blog/${post.slug}`} image={post.image} />
      <PageHeader title={post.title} subtitle={post.excerpt} breadcrumbs={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: post.title }]} />
      <section className="py-16 bg-white">
        <div className="container-x max-w-3xl">
          <img src={post.image} alt={post.title} width="1400" height="380" className="rounded-xl w-full h-[380px] object-cover" loading="eager" decoding="async" />
          <div className="flex items-center gap-3 text-sm text-muted2 mt-6">
            <span className="bg-gold/20 text-navy px-2 py-0.5 rounded text-xs font-semibold uppercase">{post.category}</span>
            <span><i className="fa-regular fa-calendar mr-1"></i>{new Date(post.date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
            <span><i className="fa-regular fa-clock mr-1"></i>{post.read}</span>
          </div>
          <div className="prose prose-slate max-w-none mt-6">
            <p className="text-navy text-lg leading-relaxed">{post.excerpt}</p>
            <p className="text-muted2 leading-relaxed mt-4">{post.body}</p>
            <p className="text-muted2 leading-relaxed mt-4">
              Need help selecting the right compound for your application? Our engineering team offers complimentary material selection consultations. Share your operating parameters and we will recommend the optimal elastomer, hardness range and construction.
            </p>
          </div>
          <Link to="/blog" className="btn-dark mt-8"><i className="fa-solid fa-arrow-left"></i> Back to Blog</Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
