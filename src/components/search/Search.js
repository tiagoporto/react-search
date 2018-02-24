import React, { Component } from 'react';
import { SimpleSelect } from 'react-selectize'
import 'react-selectize/dist/index.css'
import data from './data.json'

class Search extends Component {
  constructor(props) {
    super(props)
    this.books = [],
    this.data = data.books
  }

  render() {
    return (
      <SimpleSelect
        placeholder="Search for best sellers"
        transitionEnter = {true}
        transitionLeave = {true}
        options = {this.books}
        onSearchChange={(search) => {
          if (search.length > 0) {
            const books = this.data.map(book => {return {label: book, value: book}})

            setTimeout(function () {
              this.setState({books})
            }.bind(this), 1000);

              // if (!!self.req)
              //     self.req.abort();
              // self.req = $.getJSON("http://api.cdnjs.com/libraries?fields=version,homepage&search=" + search)
              //   .done(function(result){
              //       self.setState({libraries: take(50, result.results)}, function(){
              //           self.refs.select.highlightFirstSelectableOption();
              //       })
              //       delete self.req;
              //   });
            }
        }}
      />
    );
  }
}

export default Search;
