import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import SearchBar from './components/search_bar';
import Header from './components/table';

const API_KEY = "AIzaSyCrjMfKtfXEboGKZkStAqs-rNQxqRCe6pI";

// Create a component and thst should produce some HTML
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <Table />
      </div>
    )
  }
}


//take this components HTML  and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
