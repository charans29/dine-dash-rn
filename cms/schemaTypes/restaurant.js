// import {defineField, defineType} from 'sanity'

export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: 'image',
      title: 'Restaurant Image',
      type: 'image'
    },
    {
      name: 'lat',
      title: 'Restaurant Latitude',
      type: 'number'
    },
    {
      name: 'lon',
      title: 'Restaurant Longitude',
      type: 'number'
    },
    {
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'rating',
      title: 'Rate this Restaurant',
      type: 'number',
      validation: (Rule) => Rule.required().max(5).min(1).error("please rate between 1 & 5")
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{ type: "category"}],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{ type: "reference", to: [{ type: "dish" }] }]
    }
  ],
};
