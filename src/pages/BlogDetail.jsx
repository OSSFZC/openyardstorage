import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../sanityClient";
import useMeta from "../hooks/useMeta";
import { PortableText } from "@portabletext/react";

export default function BlogDetail() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  // ✅ Fetch Blog
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          _id,
          title,
          publishedAt,
          body[]{
            ...,
            _type == "image" => { ..., asset->{url} }
          },
          mainImage{
            alt,
            asset->{url}
          }
        }`,
        { slug }
      )
       .then((data) => {
      console.log("BLOG DATA:", data); // ✅ ADD HERE
      setBlog(data);
    })
      .catch(console.error);
  }, [slug]);

  // ✅ Fetch Related Blogs
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(publishedAt desc)[0...3]{
          _id,
          title,
          slug,
          mainImage{
            asset->{url}
          }
        }`
      )
      .then((data) => setRelatedBlogs(data))
      .catch(console.error);
  }, []);

  // ✅ SEO
  useMeta(
    blog?.title || "Blog",
    blog?.title
      ? blog.title + " | OSS Logistics Blog"
      : "OSS Logistics Blog"
  );

  if (!blog) return <p className="text-center py-20">Loading...</p>;

  // ✅ PortableText Styling
  const components = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold mt-6 mb-3">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-semibold mt-5 mb-2">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-lg font-semibold mt-4 mb-2">{children}</h4>
      ),
      normal: ({ children }) => (
        <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">{children}</ul>
      ),
    },
    marks: {
      link: ({ value, children }) => (
        <a href={value?.href} className="text-red-600 underline hover:text-red-700">
          {children}
        </a>
      ),
    },
    types: {
      image: ({ value }) =>
        value?.asset?.url ? (
          <img
            src={value.asset.url}
            alt={value.alt || blog.title}
            loading="lazy"
            className="w-full rounded-lg my-6"
          />
        ) : null,
    },
  };

  return (
    <main>
      {/* HERO / BANNER */}
      <section
        className="relative h-[450px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${blog.mainImage?.asset?.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold">
            {blog.title}
          </h1>

          <p className="mt-3 text-sm opacity-80">
            {new Date(blog.publishedAt).toDateString()}
          </p>
        </div>
      </section>

      {/* 🔴 BLOG CONTENT */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <PortableText value={blog.body} components={components} />
      </section>

      {/* 🔴 RELATED BLOGS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Related Blogs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBlogs.map((item) => (
              <Link
                key={item._id}
                to={`/blogs/${item.slug?.current}`}
                className="group"
              >
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={item.mainImage?.asset?.url}
                    alt={item.title}
                    className="h-[200px] w-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                <h3 className="mt-4 font-medium text-gray-800 group-hover:text-red-600">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}