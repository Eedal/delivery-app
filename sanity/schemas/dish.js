import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of dish',
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(20),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of dish',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of dish',
    },
  ],
})
