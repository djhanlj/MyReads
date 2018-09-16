import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Books'

class SearchBook extends Component{

    state = {
        query: '',
        booksQuery: []
    }

    updateQuery = (queryChange) => {
        this.setState({ query: queryChange }, () => {
            if (queryChange.length < 2 || queryChange.endsWith(' ')) {
                this.setState({ booksQuery: [] })
            }else{
                this.searchQuery(queryChange)
            }
        })
    }
    
    searchQuery = (queryChange) => {
        BooksAPI.search(queryChange).then((books) => {
            this.setState({ booksQuery: (typeof(books) !== 'undefined') ? books : [] })
            
        })
    }

    render(){

        const { query, booksQuery } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                            value={query} 
                            placeholder="Search by title or author" 
                            onChange={(event) => this.updateQuery(event.target.value)} 
                            />
                    </div>
                </div>
                <div className="search-books-results">
                    {typeof(booksQuery) !== 'undefined' && (
                        <Book books={booksQuery}  />
                    )}
                </div>
            </div>
        )
    }
}

export default SearchBook