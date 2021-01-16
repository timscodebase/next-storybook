export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Tag',
        },
      ],
    },
    {
      name: 'markdown',
      title: 'Markdown',
      type: 'markdown',
    },
    {
      name: 'page',
      title: 'Page Number',
      type: 'number',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],

  preview: {
    select: {
      title: 'page',
      media: 'mainImage',
    },
  },
}
