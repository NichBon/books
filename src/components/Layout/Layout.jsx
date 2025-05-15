import { useEffect, useRef, useState } from "react";
import BookForm from "../BookForm/BookForm";
import BookResults from "../BookResults/BookResults";
import Header from "../Header/Header";
import { getBooks } from "../../services/bookrequest";
import classes from "./Layout.module.scss"

function Layout() {
    const [bookData, setBookData] = useState([])
    const [fetchStatus, setFetchStatus] = useState('PENDING')
    const [query, setQuery] = useState('react mounting')
    const noFetchOnMount = useRef(0);

    useEffect(() => {
        if (noFetchOnMount.current >= 2) {
            setFetchStatus('LOADING')
            getBooks(query)
                .then((bookDataFromFetch) => {
                    setBookData(bookDataFromFetch)
                    setFetchStatus('SUCCESS')
                })
                .catch((e) => {
                    setFetchStatus('FAILED')
                    console.log('error', e)
                })
        } else {
            noFetchOnMount.current += 1;
        }
    }, [query])

    return (
        <div className={classes.container}>
            <div className={`classes.search-container ${bookData != [] ? "classes.results" : ""}`}>
                <Header />
                <BookForm query={query} setQuery={setQuery} />
            </div>

            {fetchStatus === 'LOADING' && <p className={classes.p_loading}>Loading...</p>}
            {fetchStatus === 'FAILED' && (
                <p style={{ color: 'red' }}>{error.message}</p>
            )}
            {fetchStatus === 'SUCCESS' && <BookResults bookData={bookData} />}
            {bookData != [] && <div className={classes.padding} />}

        </div>
    )
}

export default Layout;