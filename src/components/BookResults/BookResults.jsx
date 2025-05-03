import BookCard from "../BookCard/BookCard";

const BookResults = ({ bookData }) => {
    return (
        <>
            {bookData.map((book) => {
                try {
                    return (
                        <BookCard
                            bookTitle={book.volumeInfo.title ? book.volumeInfo.title : 'Unknown Title'}
                            bookAuthor={book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}
                            bookImage={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://placecats.com/130/200'}
                            bookDescription={book.volumeInfo.description ? book.volumeInfo.description : 'Read the book to find out more'}
                        />
                    )
                } catch (error) {
                    console.log('error in book card generation', error)
                }

            })}

        </>
    )
}

export default BookResults;

//image, author, title and (optional) description (abridged)
// .volumeInfo.title
// .volumeInfo.Authors - authors is an array if multiple authors, how can I deal?
// .volumeInfo.description
// .volumeInfo.imageLinks.smallThumbnail

//'https://placekeanu.com/130/200'
//'https://placecats.com/130/200'