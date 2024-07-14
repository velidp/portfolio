export default {
    name: 'intro',
    title: 'Intro',
    type: 'document',
    fields: [
        {
            name: 'bio',
            title: 'Bio',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'Imageurl',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'cv',
            title: 'CV',
            type: 'file',
            options: {
                storeOriginalFilename: true
            }
        }
    ]
}