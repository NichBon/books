import classes from "./Header.module.scss"

const Header = () => {
    return (
        <div className={classes.container}>
            <h1>Book Search</h1>
            <p>Powered by Google Books API</p>
        </div>
    )
}

export default Header;