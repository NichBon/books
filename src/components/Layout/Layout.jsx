import { useEffect, useRef, useState } from "react";
import BookForm from "../BookForm/BookForm";
import BookResults from "../BookResults/BookResults";
import Header from "../Header/Header";
import { getBooks } from "../../services/bookrequest";

function Layout() {
    const [bookData, setBookData] = useState([])
    const [fetchStatus, setFetchStatus] = useState('PENDING')
    const [query, setQuery] = useState('react mounting')
    const noFetchOnMount = useRef(false);

    useEffect(() => {
        if (noFetchOnMount.current) {
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
            noFetchOnMount.current = true;
        }
    }, [query])

    return (
        <>
            <Header />
            <form>
                <BookForm query={query} setQuery={setQuery} />
            </form>
            <div >

            </div>
            {fetchStatus === 'LOADING' && <p>Loading...</p>}
            {fetchStatus === 'FAILED' && (
                <p style={{ color: 'red' }}>{error.message}</p>
            )}
            {fetchStatus === 'SUCCESS' && <BookResults bookData={bookData} />}

        </>
    )
}

export default Layout;