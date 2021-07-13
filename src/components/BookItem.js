import React from 'react';
import { Link } from 'react-router-dom';

const BookItem =  ({ book }) => {
    return (
            <li className="book-item"> 
                Book Title: {book.title}<br/>
                Book Author: {book.author}<br/>
                {/* Book Cover: {book.image}<br/> */}

                <Link to={`books/${book.id}`}>Check This Book Out</Link>


            </li>
     
    )
    
}

export default BookItem
