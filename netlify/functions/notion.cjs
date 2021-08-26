const { Client } = require('@notionhq/client')

const {
    NOTION_API_KEY,
    NOTION_PORTFOLIO_DB_ID,
    NOTION_TAGS_DB_ID
} = process.env

const notion = new Client({ auth: NOTION_API_KEY })

// const test = async (event, context) => {
exports.handler = async (event, context) => {
    try {
        const portfolioDb = await notion.databases.query({
            database_id: NOTION_PORTFOLIO_DB_ID,
            sorts: [
                {
                    property: 'last_update',
                    direction: 'descending',
                },
            ],
        });

        const formattedPortfolio = portfolioDb.results.map(formatPageProperties)

        const filter = crateFilterObjectArray(formattedPortfolio.map(p => p.id))

        const tagsDb = await notion.databases.query({
            database_id: NOTION_TAGS_DB_ID,
            filter,
        });

        const formattedTags = tagsDb.results
            .map(formatPageProperties, true)
            .map(tag => ({
                ...tag,
                Name: tag.Name.replace(/icon/gi, '').trim()
            }))

        const portifolioMergedWithTags = dataMerge(formattedPortfolio, formattedTags)

        return {
            statusCode: 200,
            body: JSON.stringify({ data: portifolioMergedWithTags })
        }
    } catch (e) {
        console.log(e)

        return {
            statusCode: 500,
            body: JSON.stringify({ error: String(e) })
        }
    }
}

const formatPageProperties = (page, grabIcon) => {
    const { properties, id, icon } = page

    let propsFormatted = {}

    Object.entries(properties).forEach(([k, v]) => {
        if (v.type === 'url') propsFormatted[k] = v.url
        if (v.type === 'rich_text') propsFormatted[k] = v.rich_text.length
            ? v.rich_text[0].plain_text
            : ''
        if (v.type === 'title') propsFormatted[k] = v.title[0].plain_text
        if (v.type === 'date') propsFormatted[k] = v.date.start
            ? v.date.start
            : ''
        if (v.type === 'relation') propsFormatted[k] = v.relation
        if (v.type === 'files') propsFormatted[k] = v.files
        propsFormatted.id = id
    })

    if (grabIcon && icon && icon.file && icon.file.url) propsFormatted.link = icon.file.url

    return propsFormatted
}

const crateFilterObjectArray = ids => {
    const or = ids.map(id => ({
        property: 'Portfolio',
        relation: {
            contains: id
        }
    }))

    return { or }
}

const dataMerge = (portfolio, tags) => {
    return portfolio.map(project => {
        const tagsToMerge = project.Tags.map(({ id }) => {
            return tags.find(tag => tag.id === id)
        })

        return {
            ...project,
            Tags: tagsToMerge.length ? [...tagsToMerge] : []
        }
    })
}

// (async () => {
//     console.log(
//         await test()
//     )
// })()
