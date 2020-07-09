import React, { createContext, useState } from 'react';
import crypto from 'crypto';

export const BookContext = createContext()

const BookContextProvider = props => {
    const [books, setBooks] = useState([
        {
            title: 'The pilgrim',
            author: 'John Miller',
            id: 1
        },
        {
            title: 'The earth',
            author: 'William Backster',
            id: 2
        }
    ]);

    const addBook = ({ title, author }) => {
        setBooks([...books, {
            title,
            author,
            id: crypto.randomBytes(6).toString('hex')
        }])
    }

    const removeBook = id => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;
