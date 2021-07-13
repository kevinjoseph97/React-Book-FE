import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './containers/Main';
import BookNew from './containers/BookNew';
import AllBooks from './containers/AllBooks';


class App extends Component {
  
  constructor() {
    super()

    this.state = {
      id: 0, 
      books: []
    }
  }

  addBook = book => {
    book.id = this.state.id + 1

    this.setState({
      books: [...this.setState.books, book],
      id: this.state.id + 1
    });

  }
  

  render() {
    return (
      <Router>
      <Navbar />
      <div className= "container">
        <switch>
          <Route exact path='/' component={ Main }/>
          <Route exact path="/books/new" render={ props => <BookNew {...props} addBook={this.addBook} /> } />
          <Route exact path='/books' render= { props => <AllBooks {...props} books={this.state.books} />} />
        </switch>

      </div>

      </Router>
    )
  }
  
  
  
}

export default App;
