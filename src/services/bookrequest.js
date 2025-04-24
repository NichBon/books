const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'
const API_KEY = import.meta.env.VITE_API_KEY;

export const getBooks = async (query) => {
    try {
        const url = `${BASE_URL}?q=flowers+inauthor:keyes&key=${API_KEY}`
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data)
        return (data.items);
    } catch (error) {
        console.log('Error fetching data', error)
        return [];
    }
};