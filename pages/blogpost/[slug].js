import Blogcontent from '@/components/Blogcontent';
import { useRouter } from 'next/router';
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Head from 'next/head';

export default function Slug({blogs}) {
  console.log(blogs);
  const router = useRouter();
  // if (!data) {
  //   router.replace('/404');
  //   return null;
  // }

  return (
    <>
    <Head>
        <title> Technitós: {blogs.title}</title>
        <meta name="description" content={blogs.BlogDescription}/>
        <meta property="og:image" content={blogs.imageUrl} />   
      </Head>
    <Blogcontent title={blogs.title} content={blogs.content} _createdAt={blogs._createdAt} imageUrl={blogs.imageUrl}/>
    
    </>
  );
}


export async function getServerSideProps(context) {
  const { slug } = context.query;
  const client = createClient({
    projectId: "7nf84oj6",
    dataset: "production",
    useCdn: true,
    apiVersion: '2023-08-14',
    token: process.env.SANITY_SECRET_TOKEN
  });

  const query = '*[_type == "blog" && slug.current == $slug][0]';

  const blog = await client.fetch(query, { slug });
  if (!blog || blog.length === 0) {
    return { notFound: true };
  }

  const builder = imageUrlBuilder({
    projectId: "7nf84oj6",
    dataset: "production",  
    useCdn: true,
  });
  const imageUrl = blog.BlogImage ? builder.image(blog.BlogImage).url() : null;
  const blogWithImageUrl = {
    ...blog,
    imageUrl,
  };

  return {
    props: {
        blogs: blogWithImageUrl,
    },
  };
}