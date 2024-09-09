import { ReactNode } from "react";
import { getPostData } from "@/lib/posts";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // You can choose the weights you need
});

interface BlogPostLayoutProps {
  children: ReactNode;
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostLayoutProps) {
  const postData = await getPostData(params.slug);

  return {
    title: `${postData.title} - Rupok's Blog`,
    description:
      postData.description || postData.excerpt || "Read this amazing post!",
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      url: `https://rupokghosh.com/blog/${params.slug}`,
      type: "article",
      images: [
        {
          url: postData.coverImage || "https://rupokghosh.com/image.png", // Add coverImage if available in the markdown
          width: 1200,
          height: 630,
          alt: postData.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description: postData.excerpt,
      images: [
        postData.coverImage ||
          "https://rupokghosh.com/images/default-preview.png",
      ],
    },
  };
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
