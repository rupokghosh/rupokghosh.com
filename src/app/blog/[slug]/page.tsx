import { getPostData } from "@/lib/posts";
import { format } from "date-fns";
import Link from "next/link";
type PostProps = {
  params: {
    slug: string;
  };
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return format(date, "do MMMM yyyy");
}

export default async function PostPage({ params }: PostProps) {
  const postData = await getPostData(params.slug);

  return (
    <div className="min-h-screen flex flex-col items-center px-8">
      <div className="max-w-2xl w-full py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">{postData.title}</h1>
        <p className="text-base mb-4 text-gray-600">{formatDate(postData.date)}</p>
        <Link href="/" className="underline decoration-1 underline-offset-2 hover:text-gray-600 transition-colors">
          ← Back
        </Link>
        <hr className="my-8 border-gray-300" />
      </div>
      <div
        className="prose prose-lg max-w-2xl w-full text-left mb-20 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
}

export async function generateMetadata({ params }: PostProps) {
  const postData = await getPostData(params.slug);
  return { title: postData.title };
}
