import { useState } from "react";

function BookForm({ query, setQuery }) {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(document.getElementById('searchForm').value)
        setQuery(document.getElementById('searchForm').value)
    }

    return (
        <>
            <h3>Search for a book</h3>
            <input type='text'
                id='searchForm'
                placeholder='Enter search term here' />
            <button type='submit' onClick={handleSubmit}>Search</button>
        </>
    )
}

export default BookForm;
