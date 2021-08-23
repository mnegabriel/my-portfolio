export const fetchPortifolioItems = async () => {
    try {
        const response = await fetch("/.netlify/functions/notion");
        const data = await response.json();

        console.log(data);
    } catch (e) {
        console.warn(e);
    }
};