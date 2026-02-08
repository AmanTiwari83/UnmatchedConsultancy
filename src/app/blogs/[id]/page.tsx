import { detailedBlogData } from "../../../data/detailedBlog-data";
import Link from "next/link";
import Image from "next/image";

type PageProps = {
  params: { id: string };
};

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const blog = detailedBlogData[id as keyof typeof detailedBlogData];

  if (!blog) {
    return <div className="text-center py-20 text-gray-600">Blog not found</div>;
  }

  return (
    <section className="py-12 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
    

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight max-w-4xl">
        {blog.title}
      </h1>

      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-4">
        <span className="font-medium text-gray-700">{blog.postedBy}</span>
        <span className="w-1 h-1 bg-gray-400 rounded-full" />
        <span>{blog.date}</span>
        <span className="w-1 h-1 bg-gray-400 rounded-full" />
        <span>{blog.readTime}</span>
      </div>

      {/* Featured Image */}
      {/* <div className="relative w-full h-[240px] sm:h-[360px] lg:h-[560px] rounded-2xl overflow-hidden mt-8 shadow-lg">
        <Image
          src={blog?.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div> */}
      <div className="relative w-full 
  aspect-[16/9] 
  sm:aspect-[3/1] 
  lg:aspect-[21/9]
  rounded-2xl overflow-hidden mt-8 shadow-lg"
>
  <Image
    src={blog?.image}
    alt={blog.title}
    fill
    className="object-cover"
    priority
  />
</div>


      {/* Content & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 mt-14">
        {/* Article */}
        <article className="prose prose-gray lg:prose-lg max-w-none">
          <p className="lead text-gray-700">
            Small and Medium Enterprises (SMEs) often face accounting challenges
            that can impact cash flow, compliance, and long-term growth.
          </p>

          <h2 id="cash-flow">Poor Cash Flow Management</h2>
          <p>
            Inconsistent invoicing, delayed payments, and poor expense tracking
            often result in cash shortages that slow down operations.
          </p>

          <h2 id="knowledge">Lack of Accounting Knowledge</h2>
          <p>
            Without proper accounting expertise, SMEs may file incorrect returns,
            miss deadlines, or overlook deductions.
          </p>

          <h2 id="compliance">Compliance Issues</h2>
          <p>
            Non-compliance with GST, income tax, or ROC filings can lead to heavy
            penalties and legal issues.
          </p>
        </article>

        {/* Table of Contents */}
        <aside className="hidden lg:block">
          <div className="border border-gray-200 rounded-xl p-5 sticky top-28 bg-white shadow-sm">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Table of Contents
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#cash-flow" className="hover:text-primary-600 transition">
                  Poor Cash Flow Management
                </a>
              </li>
              <li>
                <a href="#knowledge" className="hover:text-primary-600 transition">
                  Lack of Accounting Knowledge
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-primary-600 transition">
                  Compliance Issues
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Page;
