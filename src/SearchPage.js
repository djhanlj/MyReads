import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'
import { Link } from 'react-router-dom'

class SearchBook extends Component{

    state = {
        query: '',
        booksQuery: []
    }

    updateQuery = (queryChange) => {
        this.setState({ query: queryChange }, () => {
            if (queryChange.length < 3 || queryChange.endsWith(' ')) {
                this.setState({ booksQuery: [] })
            }else{
                this.searchQuery(queryChange)
            }
        })
    }
    
    searchQuery = (queryChange) => {
        BooksAPI.search(queryChange).then((books) => {
            this.setState({ booksQuery: (typeof (books[0]) !== 'undefined') ? books : [] })
        })
    }

    render(){

        const { query, booksQuery } = this.state
        const { onUpdate, books } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                            value={query} 
                            placeholder="Search by title or author" 
                            onChange={(event) => this.updateQuery(event.target.value)} 
                            />
                    </div>
                </div>
                <div className="search-books-results">
                    {typeof(booksQuery[0]) !== 'undefined' && (
                        <BooksList booksPage={books} books={booksQuery} onUpdate={onUpdate} />
                    )}
                </div>
            </div>
        )
    }
}

export default SearchBook