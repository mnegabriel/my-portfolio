export const fetchPortifolioItems = async () => {
    try {
        const response = await fetch("/.netlify/functions/notion");

        if (!response.ok) throw new Error('error on fetching')

        const data = await response.json();


        return data.data
    } catch (e) {
        console.warn(e);
    }
};