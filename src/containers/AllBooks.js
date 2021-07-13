import React, { Component } from 'react'
import BookItem from "../components/BookItem.js"

class AllBooks extends Component {
    render() {

        const books = this.props.books.map(( book, i) => <BookItem key={i} book={book}/>)
        return (
            <div>
                <h1>All Books</h1>
                <ul className="collection">
                    { books }
                </ul>
            </div>
        )
    }
}


AllBooks.defaultProps = {
    books: []
}

export default AllBooks
