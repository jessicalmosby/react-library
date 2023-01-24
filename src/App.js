import BookList from './components/book/BookList';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import BookDetail from './components/book/BookDetail.js';
import Main from './components/Main/Main.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/books" component={BookList} />
      </Switch>
    </>
  );
}

export default App;
