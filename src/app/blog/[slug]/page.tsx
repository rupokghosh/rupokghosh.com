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
    <div className="min-h-screen flex flex-col items-center px-4">
      {" "}
      <div className="max-w-2xl w-full mt-10">
        <h1 className="text-2xl font-bold text-left mb-1">{postData.title}</h1>
        <p className="text-sm text-left mb-2">{formatDate(postData.date)}</p>
        <Link href="/" className=" text-blue-700 hover:underline ">
          ← By Rupok Ghosh
        </Link>
        <hr className="mb-8 mt-4" />
      </div>
      <div
        className="prose prose-md max-w-2xl w-full text-left mb-20" // Ensure prose is applied only to content
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
}

export async function generateMetadata({ params }: PostProps) {
  const postData = await getPostData(params.slug);
  return { title: postData.title };
}
