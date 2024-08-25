// src/app/blog/[slug]/page.tsx
import Nav from "@/components/navigation";
import { getPostData } from "@/lib/posts";

type PostProps = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: PostProps) {
  const postData = await getPostData(params.slug);

  return (
    <div>
      <Nav />

      <div className="flex flex-col items-center">
        <hr className="w-full max-w-4xl border-gray-400 my-8" />
        <div className="prose mx-auto max-w-4xl">
          <h1 className="text-4xl text-gray-400 font-bold my-8">
            {postData.title}
          </h1>

          <p className="text-gray-300 text-sm mb-8">{postData.date}</p>

          <div
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            className="text-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: PostProps) {
  const postData = await getPostData(params.slug);
  return { title: postData.title };
}
