const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'
const API_KEY = import.meta.env.VITE_API_KEY;

export const getBooks = async (query) => {
    try {
        const url = `${BASE_URL}?q=${query}&key=${API_KEY}`
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data)
        const cleanedData = data.items.map((book) => {
            return {
                bookId: book.id,
                bookTitle: book.volumeInfo.title ? book.volumeInfo.title : 'Unknown Title',
                bookAuthor: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author',
                bookImage: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://placecats.com/130/200',
                bookDescription: book.volumeInfo.description ? book.volumeInfo.description : 'Read the book to find out more',
            }
        })
        console.log(cleanedData)
        return (cleanedData);
    } catch (error) {
        console.log('Error fetching data', error)
        return [];
    }
};