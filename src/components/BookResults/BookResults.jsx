import BookCard from "../BookCard/BookCard";

const BookResults = ({ bookData }) => {
    return (
        <>
            {bookData.forEach((book) => {
                try {
                    <BookCard
                        bookTitle={book.volumeInfo.title}
                        bookAuthor={book.volumeInfo.Authors}
                        //bookImage={book.volumeInfo.imageLinks.smallThumbnail}
                        bookDescription={book.volumeInfo.description}
                    />
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
// .volumeInfo.Authors
// .volumeInfo.description
// .volumeInfo.imageLinks.smallThumbnail