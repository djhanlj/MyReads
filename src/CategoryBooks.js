import React from 'react'
import Book from './Books'

const CategoryBooks = ({ category, books, onUpdate }) => {
   
      return (
            <div>
                <h2 className="bookshelf-title">
                    { category }
                </h2>
                <div className="bookshelf-books">
                  <Book books={books} onUpdate={ onUpdate} />
                </div>
            </div>
        )
  
}
export default CategoryBooks