export default {
	name: "skills",
	title: "Skills",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "bgColor",
			title: "BgColor",
			type: "string",
		},
		{
			name: "icon",
			title: "Icon",
			type: "image",
			options: {
				hotspot: true,
			},
		},

		{
			name: "works",
			title: "Works",
			type: "array",
			of: [{ type: "workExperience" }],
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
