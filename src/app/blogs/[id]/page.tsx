import Image from "next/image";
import { getBlogBySlug } from "@/lib/blogs";

type PageProps = {
  params: Promise<{ id: string }>;
};

const Page = async ({ params }: PageProps) => {
  const { id } = await params; // unwrap

  const blog = await getBlogBySlug(id);

  if (!blog) {
    return <div className="text-center py-20 text-gray-600">Blog not found</div>;
  }

  return (
    <section className="py-12 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
      <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight max-w-4xl">
        {blog.title}
      </h1>

      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-4">
        <span className="font-medium text-gray-700">{blog.publishedBy}</span>
        <span className="w-1 h-1 bg-gray-400 rounded-full" />
        <span>{blog.date}</span>
        <span className="w-1 h-1 bg-gray-400 rounded-full" />
        <span>{blog.readTime}</span>
      </div>

      <div className="relative w-full aspect-[16/9] sm:aspect-[3/1] lg:aspect-[21/9] rounded-2xl overflow-hidden mt-8 shadow-lg">
        <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[90%_10%] gap-10 mt-14">
        <article className="prose prose-gray lg:prose-lg max-w-none">
          <p className="lead text-gray-700 mb-2">{blog.excerpt}</p>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>
      </div>
    </section>
  );
};

export default Page;