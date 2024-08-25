// src/app/blog/[slug]/page.tsx
import { getPostData } from '@/lib/posts';

type PostProps = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: PostProps) {
  const postData = await getPostData(params.slug);

  return (
    <article className="prose mx-auto">
      <h1 className="text-4xl font-bold mb-6">{postData.title}</h1>
      <p className="text-gray-600 mb-6">{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}

export async function generateMetadata({ params }: PostProps) {
  const postData = await getPostData(params.slug);
  return { title: postData.title };
}
