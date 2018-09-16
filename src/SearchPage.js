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
                console.log('valores menores: ' + this.state.query )
                this.setState({ booksQuery: [] })
            }else{
                this.searchQuery(queryChange)
            }
        })
    }
    
    searchQuery = (queryChange) => {
        BooksAPI.search(queryChange).then((books) => {
            console.log("livros da consulta: " + books[0])
            this.setState({ booksQuery: (typeof (books[0]) !== 'undefined') ? books : [] })
            console.log(this.state.booksQuery)
            
        })
    }

    render(){

        const { query, booksQuery } = this.state
        const { onUpdate } = this.props

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
                        <BooksList books={booksQuery} onUpdate={onUpdate} />
                    )}
                </div>
            </div>
        )
    }
}

export default SearchBook