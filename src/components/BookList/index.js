import React, { useContext, useState } from 'react'
import { BookContext } from '../../contexts/BookContext'
import './styles.css'

const BookList = () => {

    const { books, addBook } = useContext(BookContext)

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    function handleAddBook(e) {
        e.preventDefault()

        addBook({ title, author })
    }

    return (
        <div className="books-container">
            <button>Mudar o tema</button>

            <div className="books-list">
                <form onSubmit={handleAddBook}>
                    <input
                        type="text"
                        placeholder="title"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="author"
                        onChange={e => setAuthor(e.target.value)}
                    />
                    <button type="submit">ADD</button>
                </form>
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            <h3>{book.title}</h3>
                            <p><strong>Author: </strong>{book.author}</p>
                            <small><strong>ID: </strong>{book.id}</small>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default BookList
