import React, {Component} from 'react';

// const SearchBar = () => {
//   return <input/>
// };

class SearchBar extends Component {
  render() {
    // return <input onChange={this.onInputChange} />;

    // Error function can be write lie this
    return <input onChange= {(event) => console.log(event.target.value)} />
  }

  // onInputChange(event){
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
