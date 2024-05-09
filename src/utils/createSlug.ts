export default function (title: string, staticSlug: string) {
    return (
        staticSlug ? staticSlug : title
            // remove leading & trailing whitespace
            .trim()
            // output lowercase
            .toLowerCase()
            // replace spaces
            .replace(/\s+/g, '-')
            // remove leading & trailing separtors
            .replace(/^-+|-+$/g, '')
    )
}