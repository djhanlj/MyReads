import React from 'react'
import * as BooksAPI from './BooksAPI'
import CategoryBooks from './CategoryBooks'

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
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
        { shelves.map( shelf => (
          <CategoryBooks key = { shelf.value } category = { shelf.title } books = { this.state.books.filter((book) => book.shelf === shelf.value)} onUpdate = { this.updateBook }   />
        )) }
      </div>
      </div>
      <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      </div>
    </div>

  )}
}

export default BooksApp
