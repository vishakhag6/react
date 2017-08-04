import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(prop){
    super(prop);

    this.state = {
      term: ''
    };
  }
  render() {
    return (
      <div>
        <input onChange= {(event) => this.setState({term:event.target.value})} />
        // <p>Value is: {this.state.term} </p>
      </div>
    )
  }
}

export default SearchBar;
