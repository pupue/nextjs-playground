export const POSTS = [
	{
		id: "1",
		slug: "the-beauty-of-nature",
		title: "The Beauty of Nature",
		thumbnail: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&h=400&fit=crop",
		summary: "Discover the stunning landscapes and natural wonders of the world.",
		contents: `Nature offers some of the most breathtaking experiences on Earth. From towering mountains to endless oceans, and from dense forests to vast deserts, the variety of landscapes is truly incredible.

Whether you are seeking peace in a quiet forest, adventure on a rugged trail, or awe in front of a majestic waterfall, nature has something to offer everyone. 

In this article, we explore some of the world's most beautiful natural wonders, inviting you to reconnect with the Earth and find inspiration in its beauty.`,
	},
	{
		id: "2",
		slug: "urban-exploration",
		title: "Urban Exploration",
		thumbnail: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&h=400&fit=crop",
		summary: "Explore hidden gems and the vibrant life of modern cities.",
		contents: `Cities are more than just skyscrapers and busy streets. Behind every corner lies history, culture, and stories waiting to be uncovered.

Urban exploration takes you beyond the typical tourist attractions, guiding you through local markets, back alleys, historic neighborhoods, and hidden cafes.

This article highlights the unseen sides of city life, encouraging you to look deeper and experience the unique energy that each urban landscape has to offer.`,
	},
	{
		id: "3",
		slug: "culinary-adventures",
		title: "Culinary Adventures",
		thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
		summary: "Taste the world through diverse cuisines and food cultures.",
		contents: `Food is a universal language that brings people together. Every culture expresses its identity through unique ingredients, recipes, and dining traditions.

From street food stalls in bustling cities to family-run restaurants in small towns, culinary adventures introduce you to flavors you’ve never experienced before.

In this article, we dive into the world’s most beloved dishes and the stories behind them, inspiring you to expand your palate and explore the world one bite at a time.`,
	},
	{
		id: "4",
		slug: "wildlife-wonders",
		title: "Wildlife Wonders",
		thumbnail: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=400&fit=crop",
		summary: "Experience incredible moments in the animal kingdom up close.",
		contents: `Wildlife is full of surprises, from the smallest insects to the largest mammals. Observing animals in their natural habitats offers a sense of wonder that is hard to match.

Whether it’s watching a lion hunt on the African savanna, seeing a whale breach in the ocean, or simply noticing the birds in your own backyard, these moments connect us to nature in powerful ways.

This article showcases remarkable wildlife encounters and the importance of protecting these creatures and their environments for future generations.`,
	},
];

export type POST = {
	id: string;
	slug: string;
	title: string;
	thumbnail: string;
	contents: string;
	summary: string;
};
