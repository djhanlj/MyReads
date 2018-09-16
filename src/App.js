import React from 'react'
import * as BooksAPI from './BooksAPI'
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'

import './App.css'

class BooksApp extends React.Component {
  
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(this.state.books)
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((bookNew) => {
      book.shelf = shelf
      this.setState( (state) => ({
        books: state.books.filter((b) => b.id !== book.id).concat([book])
      }))
    })

  }

  render() {

    const shelves = [
      { value: 'currentlyReading', title: 'Currently Reading' },
      { value: 'wantToRead', title: 'Want to Read' },
      { value: 'read', title: 'Read' }
    ];

  return (
      <div>
            <Route exact path="/" render={() => (
              <HomePage onShelves={ shelves } books = { this.state.books } onUpdate = { this.updateBook }   />
            )} />
            
            <Route path="/search" render={() => (
              <SearchPage onUpdate={this.updateBook} />
            )} />
      </div>

  )}
}

export default BooksApp
