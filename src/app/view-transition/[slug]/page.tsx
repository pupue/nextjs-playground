import { POSTS } from "@/constants";
import PageClient from "./page-client";

export default async function Page(props: { params: Promise<{ slug: string }> }) {
	const { slug } = await props.params;
	const post = POSTS.find((item) => item.slug === slug);

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<div className="max-w-[600px] mx-auto py-4">
			<PageClient post={post} />
		</div>
	);
}

export async function generateStaticParams() {
	return POSTS.map((post) => ({
		params: { slug: post.slug },
	}));
}

export const dynamic = "force-static";
