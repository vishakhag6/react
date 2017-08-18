import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
           data:[
             {
               "id":1,
               "name":"Foo",
               "age":"20"
            },

            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },

            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
           ]
        };
    }

    render() {

        return (
          <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
        )
    }

};

export default Table;
