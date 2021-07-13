import React, { Component } from 'react'


class BookNew extends Component {
    
    constructor(props) {
        super(props) 

        this.state = {
            title: '',
            author: '', 
            // image: '', 
            
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault(); 
        this.props.addBook(this.state)
        this.props.history.push('/books')
    }



    render() {
        return (
          <form>
              <h1> Add A Book</h1>
              <div className="input-field"> 
                <label htmlFor="name">Book Title:</label>
                <input type='text' name='title' id='title' value={this.state.name} onChange={this.handleChange}/> 
              </div>
              <div>
                <label htmlFor="author">Author:</label>
                <input type="text" name="author" id="author" value={this.state.author} onChange={this.handleChange}/>
              </div>
              {/* <div>
                  <label htmlFor="image">Image URL</label>
                  <input type="text" name="image" id="image" value={this.state.image} onChange={this.handleChange}/>
              </div> */}
              



              <input type="submit" value="Add Book" />
          </form>
        )
    }
}


export default BookNew
