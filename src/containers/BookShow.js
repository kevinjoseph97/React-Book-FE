import React, { Component } from 'react'

class BookShow extends Component {

    constructor(props) {
        super(props);

        let paramsId = parseInt(this.props.match.params.id, 10)
        let book = props.books.find( book => book.id === paramsId)

        this.state = {
            book: book ? book : {title: 'NOPE', author: 'NOPE'}
        }
    }




    render() {
        const {title, author} = this.state.book;
        return (
            <div>
                <h1> title: {title}</h1>
                <h1> author: {author}</h1>
                
                
            </div>
        )
    }
}
export default BookShow
