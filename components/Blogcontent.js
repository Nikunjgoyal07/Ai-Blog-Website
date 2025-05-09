import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function Blogcontent(props) {
  const date = new Date(props._createdAt);
  const formattedDate = `${date.getDate()} ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`;
  // console.log(props.content);
  const components = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => (
        <h1 className="text-4xl md:my-8 font-semibold my-4 font-sans">{children}</h1>
      ),
      h2: ({ children }) => (
        <h1 className="text-2xl my-4 font-semibold">{children}</h1>
      ),
      h3: ({ children }) => <h3 className="text-xl my-4">{children}</h3>,
      normal: ({ children }) => (
        <p className="mb-4 my-6  text-lg font-sans">{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-purple-500">{children}</blockquote>
      ),

      // Ex. 2: rendering custom styles
      customHeading: ({ children }) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
    list: {
      number: ({ children }) => (
        <ol className="list-decimal pl-4">{children}</ol>
      ),
      bullet: ({ children }) => <ul className="md:list-disc pl-4">{children}</ul>,
    },
    listItem: ({ children }) => <li className="mb-2">{children}</li>,
    span: {
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      underline: ({ children }) => <u>{children}</u>,
      strike: ({ children }) => <s>{children}</s>,
      code: ({ children }) => (
        // <code className="bg-gray-200 p-1 rounded">{children}</code>
        <code className="bg-gray-200 p-1 rounded">{children}</code>
        
      ),
    },
  };
  return (
    <>
    <article className="max-w-4xl px-6 py-24 mx-auto space-y-12 ">
      <div className="w-full mx-auto space-y-4 text-center">
        <h1 className="text-4xl font-bold leadi md:text-5xl font-sans mb-3">{props.title}</h1>
        <time dateTime="2021-02-12 15:34:18-0200">{formattedDate}</time>
      </div>
      
	  <Image
          src={props.imageUrl}
          className="object-cover w-full rounded "
          width={1260}
          height={2000}
          alt=""/>
      <div >
        <PortableText value={props.content} components={components} />
      </div>
    <div>OUR MORE BLOGS</div>
    </article>
    </>
  );
}
