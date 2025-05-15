import { useState } from "react";
import classes from './BookForm.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function BookForm({ query, setQuery }) {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(document.getElementById('searchForm').value)
        setQuery(document.getElementById('searchForm').value)
        console.log('ran handle submit')
    }

    return (
        <div className={classes.container}>
            <h2>Search for a book</h2>
            <form onSubmit={handleSubmit} className={classes.form}>
                <input type='text'
                    id='searchForm'
                    placeholder='Enter search term here' />
                <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
        </div>
    )
}

export default BookForm;
