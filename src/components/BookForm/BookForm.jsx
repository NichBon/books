import { useState } from "react";

function BookForm(onSearch) {

    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(query)
    }

    return (
        <>
            <h3>Search for a book</h3>
            <input type='text'
                value={query}
                placeholder='Enter search term here' />
            <button type='submit'>Search</button>
        </>
    )
}

export default BookForm;
