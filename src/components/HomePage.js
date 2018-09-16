import React from 'react'
import BooksList from './BooksList'
import { Link } from 'react-router-dom'

const HomePage = ({ onShelves, books, onUpdate }) => {
   
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    { onShelves.map(shelf => (
                        <div key={shelf.value}>
                            <h2 className="bookshelf-title">
                                {shelf.value}
                            </h2>
                            <div className="bookshelf-books" >
                                <BooksList books={books.filter((book) => book.shelf === shelf.value)} onUpdate={onUpdate} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="open-search">
                <Link className="close-create-contact" to="/search" >Add a book</Link>
            </div>
        </div>
    )
}
export default HomePage