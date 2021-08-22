const { Client } = require('@notionhq/client')

const { NOTION_API_KEY, NOTION_DB_ID } = process.env

const notion = new Client({ auth: NOTION_API_KEY })

// const test = async (event, context) => {
exports.handler = async (event, context) => {
    try {
        const response = await notion.databases.query({ database_id: NOTION_DB_ID });
        const data = response.results.map(formatPageProperties)

        return {
            statusCode: 200,
            body: JSON.stringify({ data })
        }
    } catch (e) {
        console.log(e)

        return {
            statusCode: 500,
            body: JSON.stringify({ error: String(e) })
        }
    }
}

const formatPageProperties = page => {
    const { properties } = page

    let propsFormatted = {}

    Object.entries(properties).forEach(([k, v]) => {
        if (v.type === 'url') propsFormatted[k] = v.url
        if (v.type === 'files') propsFormatted[k] = v.files
        if (v.type === 'rich_text') propsFormatted[k] = v.rich_text[0].plain_text
        if (v.type === 'title') propsFormatted[k] = v.title[0].plain_text
    })

    return propsFormatted
}

// (async () => {
//     console.log(await test())
// })()
