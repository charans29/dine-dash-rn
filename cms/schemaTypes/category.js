// import {defineField, defineType} from 'sanity'

export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
   {
      name: 'name',
      title: 'Category Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
    },
  ],
}
