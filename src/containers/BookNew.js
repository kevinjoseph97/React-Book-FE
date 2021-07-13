import React, { Component } from 'react'

class BookNew extends Component {
    
    constructor(props) {
        super(props) 

        this.state = {
            title: '',
            author: '', 
            image: '', 
            
        }
    }



    render() {
        return (
          <form>
              <h1> Add A Book</h1>
              



              <input type="submit" value="Add Book" />
          </form>
        )
    }
}


export default BookNew
