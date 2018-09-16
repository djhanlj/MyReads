import React, { Component } from 'react'
import './App.css'

class BooksList extends Component {

    handleChange = (book, event) => {

         this.props.onUpdate(book, event.target.value)
        // console.log(JSON.stringify(book))
        //console.log('oi' + event.target.value)

     };


    render() {

        const options = [
            { value: 'move', label: 'move' },
            { value: 'currentlyReading', label: 'Currently Reading' },
            { value: 'wantToRead', label: 'Want to Read' },
            { value: 'read', label: 'Read' },
            { value: 'none', label: 'None' }
        ];

        return (
            <ol className="books-grid">
                {this.props.books.map(book => (
                    <li key={book.id}>
                        <div key={book.id} className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <select value={book.shelf} onChange={(e) => this.handleChange(book, e)}>
                                        {options.map(option => (
                                            <option object={book} key={option.value} value={option.value} >{option.label}</option>
                                        ))}
                                    </select>

                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.subtitle}</div>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default BooksList
