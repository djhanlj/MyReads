import React, { Component } from 'react'

class BooksList extends Component {

    handleChange = (book, event) => {
         this.props.onUpdate(book, event.target.value)
     };

    
    /**
     * Método criado para listar os livros da pesquisa com a estante definida,
     * Isso é necessário porque na pesquisa não é retornado a estante que o livro está
     */
     selectedShelf = (book) => {
        let newBook = ''
        if (this.props.booksPage){
            newBook = this.props.booksPage.find( (b) => {
                return b.id === book.id
            })
            return (typeof newBook !== 'undefined') ? newBook.shelf : 'none'     
        }else{
          return book.shelf
        }
     }


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
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: (typeof book.imageLinks !== 'undefined' ) ? `url(${book.imageLinks.thumbnail})` : '' }}></div>
                                <div className="book-shelf-changer">
                                    <select value={this.selectedShelf(book) } onChange={(e) => this.handleChange(book, e)}>
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
