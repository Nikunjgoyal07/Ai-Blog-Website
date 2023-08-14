import Link from "next/link";
import Image from "next/image";

export default function BlogItem({ blog }) {
  const date = new Date(blog._createdAt);
          const formattedDate = `${date.getDate()} ${date.toLocaleString("default", {
            month: "long",
          })} ${date.getFullYear()}`;
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">

          <Image
          src={blog.imageUrl}
          className="object-cover w-full h-64 rounded"
          width={1260}
          height={750}
          alt=""
        />
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              {formattedDate}
            </p>
            <Link
              href={`/blogpost/${blog.slug.current}`}
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">{blog.title}</p>
            </Link>
            <p className="mb-4 text-gray-700">
              {blog.BlogDescription}
            </p>
            <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
            <Link href={`/blogpost/${blog.slug.current}`}>
          Read More
        </Link>
            <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </p>
          </div>
        </div>
    );
}