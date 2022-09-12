export default {
	name: "experiences",
	title: "Experiences",
	type: "document",
	fields: [
		{
			name: "year",
			title: "Year",
			type: "string",
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
