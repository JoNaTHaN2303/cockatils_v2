export default {
    name: 'cocktail',
    title: 'Cocktail',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'taste',
            title: 'Taste',
            type: 'string',
        },
        {
            name: 'preparation',
            title: 'Preparation',
            type: 'string',
        },
        {
            name: 'strength',
            title: 'Strength',
            type: 'string',
        },
        {
            name: 'ingredients',
            title: 'Ingredients',
            type: 'string',
        },
        {
            name: 'plan',
            title: 'Step-by-step plan',
            type: 'text',
        }
    ]
}