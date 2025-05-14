import { POSTS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function Page() {
	return (
		<div className="p-24">
			<div className="grid grid-cols-4 gap-4">
				{POSTS.map((post) => (
					<div key={post.slug} className="grid gap-2 p-4 border rounded-lg">
						<ViewTransition name={`title-${post.slug}`}>
							<h2 className="text-lg font-bold">{post.title}</h2>
						</ViewTransition>
						<ViewTransition name={`thumbnail-${post.slug}`}>
							<Image src={post.thumbnail} width={300} height={200} objectFit="cover" alt={post.title} />
						</ViewTransition>
						<p className="text-gray-600">{post.summary}</p>
						<Link href={`/view-transition/${post.slug}`} className="text-blue-500 hover:underline mt-2 block">
							Read More
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
