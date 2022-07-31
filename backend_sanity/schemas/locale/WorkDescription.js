export default {
  name: "workDescription",
  title: "Work Description",
  type: "object",
  fieldsets: [
    {
      title: "Work",
      name: "work",
    },
  ],
  fields: [
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [{ name: "service", title: "Service", type: "string" }],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {name: 'technology', title: "Technology", type: 'string'}
      ]
    },
    { name: "date", title: "Date", type: "number" },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          name: "galleryItem",
          type: "object",
          fieldsets: [
            {
              title: "item",
              name: "Item",
            },
          ],
          fields: [
            {
              name: "imgUrl",
              title: "ImageUrl",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "details",
              title: "Details",
              type: "string",
              options: {
                maxLength: 96,
              },
            },
          ],
        },
      ],
    },
  ],
};
