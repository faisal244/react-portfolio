export default {
	name: "brands",
	title: "Brands",
	type: "document",
	fields: [
		{
			name: "imgUrl",
			title: "ImgUrl",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "name",
			title: "Name",
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
