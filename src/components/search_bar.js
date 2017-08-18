import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    render() {

      var i = 1;
      var myStyle = {
         fontSize: 12,
         color: 'blue'
      }

        return (
          <div>
            <input onChange = {
                (event) => this.setState({ term: event.target.value }) }
            type = "search"
            placeholder = "search" />
            <p> { this.state.term } </p>

            
            <h1 style={myStyle}>{i = 1 ? 'True!' : 'False'}</h1>
          </div>
        )
    }

};

export default SearchBar;
