// 1. create a component > will produce the HTML
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCrjMfKtfXEboGKZkStAqs-rNQxqRCe6pI';

// const App = () => {
//   return <h1>Hey!!</h1>;
// }

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  )
}

// 2. Take this component generated HTML and put it on the page(IN DOM)
ReactDOM.render(<App></App>, document.querySelector('.container'));
