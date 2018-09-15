import React, { Component } from 'react'
import SelectBook from './SelectBook'
import './App.css'

class Books extends Component {

    render() {
        return (
            <ol className="books-grid">
                {this.props.books.map(book => (
                    <li key={ book.id }>
                        <div key={book.id} className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <select>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
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

export default Books
