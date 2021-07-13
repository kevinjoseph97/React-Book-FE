import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'



class Navbar extends Component {
    render() {
        return (
            <div>
                 <h1>IM THE Navbar</h1>
                 <NavLink to="/" >Main Page</NavLink>
                 <br></br>
                 <NavLink to='/books/new'>ADD BOOK</NavLink>
                 <br></br>
                 <NavLink to="/books">ALL BOOKS</NavLink>
            </div>
        )
    }
}


export default Navbar