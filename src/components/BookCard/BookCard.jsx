import classes from './BookCard.module.scss';

const BookCard = ({ bookId, bookTitle, bookAuthor, bookImage = 'https://picsum.photos/200', bookDescription, onClick }) => {
    return (
        <article className={classes.container} key={bookId} onClick={() => onClick(bookId)}>
            <h3>{(bookTitle.length > 100) && (bookTitle.substring(0, 100) + '...') || bookTitle}</h3>
            <p className={classes.authors}>{(bookAuthor.length > 100) && (bookAuthor.substring(0, 100) + '...') || bookAuthor}</p>
            <img src={bookImage}></img>
            <p>{(bookDescription.length > 100) && (bookDescription.substring(0, 100) + '...') || bookDescription}</p>
        </article>
    )
}

export default BookCard;