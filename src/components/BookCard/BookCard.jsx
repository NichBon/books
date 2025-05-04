import classes from './BookCard.module.scss';

const BookCard = ({ bookId, bookTitle, bookAuthor, bookImage = 'https://picsum.photos/200', bookDescription }) => {
    return (
        <article className={classes.container} key={bookId}>
            <h3>{bookTitle}</h3>
            <p>{bookAuthor}</p>
            <img src={bookImage}></img>
            <details>
                <summary>Book Description</summary>
                <p>{bookDescription}</p>
            </details>
        </article>
    )
}

export default BookCard;