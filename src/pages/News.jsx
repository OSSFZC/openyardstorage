import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { Link } from "react-router-dom";

export default function News() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);

  const blogsPerPage = 6;

  useEffect(() => {
    const start = (currentPage - 1) * blogsPerPage;
    const end = start + blogsPerPage;

    // ✅ Fetch blogs + total count together
    client
      .fetch(`
        {
          "blogs": *[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc) [${start}...${end}]{
            _id,
            title,
            slug,
            "publishedAt": coalesce(publishedAt, _createdAt),
            mainImage{
              asset->{url}
            }
          },
          "total": count(*[_type == "post"])
        }
      `)
      .then((data) => {
        setBlogs(data.blogs);
        setTotalBlogs(data.total);
      })
      .catch(console.error);
  }, [currentPage]);

  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  return (
    <main>
      {/* HERO */}
      <section className="bg-gray-700 py-32 text-center">
        <h1 className="text-4xl font-bold text-white/80">News & Blogs</h1>
        <p className="mt-2 text-sm opacity-80 text-white/80">
          Latest updates, insights & logistics trends
        </p>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">

          {blogs.length === 0 ? (
            <p className="text-center">No blogs found</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => {
                  const date = new Date(blog.publishedAt);

                  return (
                    <Link
                      key={blog._id}
                      to={`/blogs/${blog.slug?.current}`}
                      className="group"
                    >
                      <div className="rounded-xl overflow-hidden">
                        <img
                          src={blog.mainImage?.asset?.url || "/images/default.jpg"}
                          alt={blog.title}
                          className="h-[250px] w-full object-cover group-hover:scale-105 transition"
                        />
                      </div>

                      <div className="mt-4">
                        <p className="text-xs text-gray-400">
                          {date.toDateString()}
                        </p>

                        <h3 className="mt-2 font-semibold text-gray-800 group-hover:text-red-600">
                          {blog.title}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* ✅ Pagination */}
              <div className="flex justify-center mt-10 gap-2 flex-wrap">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-4 py-2 rounded ${
                      currentPage === index + 1
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              {/* ✅ Prev / Next */}
              <div className="flex justify-center mt-6 gap-4">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                  Prev
                </button>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}