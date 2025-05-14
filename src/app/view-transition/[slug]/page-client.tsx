"use client";

import type { POST } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function PageClient({ post }: { post: POST }) {
	const { slug, title, thumbnail, contents } = post;

	return (
		<div>
			<Link href="/view-transition">
				<span className="inline-block mb-10">← Back</span>
			</Link>
			<div className="grid gap-3">
				<ViewTransition name={`title-${slug}`}>
					<h1 className="text-6xl font-bold">{title}</h1>
				</ViewTransition>
				<ViewTransition name={`thumbnail-${slug}`}>
					<Image src={thumbnail} alt={title} width={600} height={400} />
				</ViewTransition>
				<p className="text-gray-600 whitespace-pre-wrap">{contents}</p>
			</div>
		</div>
	);
}
