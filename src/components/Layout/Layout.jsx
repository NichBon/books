import { useEffect, useState } from "react";
import BookForm from "../BookForm/BookForm";
import BookResults from "../BookResults/BookResults";
import Header from "../Header/Header";
import { getBooks } from "../../services/bookrequest";

function Layout() {
    const [bookData, setBookData] = useState('')
    const [fetchStatus, setFetchStatus] = useState('PENDING')

    useEffect(() => {
        setFetchStatus('LOADING')
        getBooks('query')
            .then((bookList) => {
                setBookData(bookList)
                setFetchStatus('SUCCESS')
                console.log(bookList)

            })
            .catch((e) => {
                setFetchStatus('FAILED')
                console.log('error', e)
            })

    }, [])

    return (
        <>
            <Header />
            {/* <form>
                <BookForm />
            </form> */}
            {fetchStatus === 'LOADING' && <p>Loading...</p>}
            {fetchStatus === 'FAILED' && (
                <p style={{ color: 'red' }}>{error.message}</p>
            )}
            {fetchStatus === 'SUCCESS' && <BookResults bookData={bookData} />}


        </>
    )
}

export default Layout;
