import { Client } from '@notionhq/client'

const { VITE_NOTION_API_KEY, VITE_NOTION_DB_ID } = process.env

const notion = new Client({ auth: VITE_NOTION_API_KEY })

exports.handler = async (event, context) => {
    try {
        const response = await notion.databases.retrieve({ database_id: VITE_NOTION_DB_ID });

        return {
            statusCode: 200,
            body: JSON.stringify({ data: response })
        }
    } catch (e) {
        console.log(e)

        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'error fetching data' })
        }
    }
}
