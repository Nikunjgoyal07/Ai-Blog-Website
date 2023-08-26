import { createClient } from "next-sanity";
import BlogItem from "@/components/BlogItem";
import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";

export default function Blogs({ blogs }) {
  return (
    <>
    <div class="max-w-[85rem] px-4 pt-14 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
      <Head>
        <title>Blog | The Next Big Thing</title>
      </Head>
  <div class="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">Read our latest news</h2>
    <p class="mt-1 text-gray-600">We&apos;ve helped some great companies brand, design and get to market.</p>
  </div>
  </div>
    <div className="px-7 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2 ">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {blogs.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              blog={blog}
              _createdAt={blog._createdAt}
              title={blog.title}
              imageUrl={blog.imageUrl}
              BlogDescription={blog.BlogDescription}
              slug={blog.slug.current}
            />
          );
        })}
      </div>
    </div>
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient({
    projectId: "7nf84oj6",
    dataset: "production",
    useCdn: true,
  });

  const query = '*[_type == "blog"]';

  const blogs = await client.fetch(query);

  const builder = imageUrlBuilder({
    projectId: "7nf84oj6",
    dataset: "production",  
    useCdn: true,
  });
  const blogsWithImageUrls = blogs.map((blog) => {
    const imageUrl = blog.BlogImage ? builder.image(blog.BlogImage).url() : null;
    return {
      ...blog,
      imageUrl,
    };
  });

  return {
    props: {
        blogs: blogsWithImageUrls,
    },
  };
}
