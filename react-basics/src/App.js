import logo from './logo.svg';
import './App.css';

import {books} from './Books';
import Book from './Book';

function App() {
  return (
    <div className="App">
    {books.map((book) => {
      return <Book key={book.id} {...book}/>
    })}
    </div>
  );
}


export default App;
