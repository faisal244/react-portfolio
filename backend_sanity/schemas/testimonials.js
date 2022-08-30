export default {
	name: "testimonials",
	title: "Testimonials",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "company",
			title: "Company",
			type: "string",
		},
		{
			name: "imgurl",
			title: "ImgUrl",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "feedback",
			title: "Feedback",
			type: "string",
		},
		{
			name: "order",
			title: "Order",
			type: "number",
			hidden: true,
		},
	],
	orderings: [
		{
			title: "Manual order",
			name: "manualOrder",
			by: [{ field: "order", direction: "asc" }],
		},
	],
};
