import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function BlogItem({ blog }) {
  const date = new Date(blog._createdAt);
          const formattedDate = `${date.getDate()} ${date.toLocaleString("default", {
            month: "long",
          })} ${date.getFullYear()}`;
    return (
      <motion.div
           whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: [1, 1.05],
            transition: {
              duration: .3
            }
          }}>
        <div className="overflow-hidden transition-shadow duration-300 dark:text-white rounded">

<Link href={`/blogpost/${blog.slug.current}`} aria-label="Article">
        
          <Image
            src={blog.imageUrl}
            className="object-cover w-full h-64 rounded"
            width={1260}
            height={750}
            alt=""
          />
        
      </Link>
          <div className="py-5 bg-white dark:bg-gray-900" >
            <p className="mb-2 text-xs font-semibold text-gray-400 uppercase">
              {formattedDate}
            </p>
            <Link
              href={`/blogpost/${blog.slug.current}`}
              aria-label="Article"
              className="inline-block mb-3 text-black dark:text-white transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-8 ">{blog.title}</p>
            </Link>
            <p className="mb-4 text-gray-400">
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
        </motion.div>
    );
}