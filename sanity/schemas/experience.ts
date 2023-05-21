import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'jobtitle',
            title: 'Job Title',
            type: 'string',
        }),
        defineField({
            name: 'start',
            title: 'Start date',
            type: 'string',
        }),
        defineField({
            name: 'end',
            title: 'End date',
            type: 'string',
        }),
        defineField({
            name: 'experience',
            title: 'Gained experience',
            type: 'array',
            of: [{type: 'string'}]
        }),
        defineField({
            name: 'languages',
            title: 'Programming Languages',
            type: 'array',
            of: [{type: 'string'}]
        })
    ]
})
