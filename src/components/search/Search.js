import React, { Component } from 'react';
import { SimpleSelect } from 'react-selectize'
import 'react-selectize/dist/index.css'
import data from './data.json'
import Loading from './loading.svg'
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      searched: [],
      loading: false
    }
    this.data = data.books
  }

  render() {
    return (
      <div>
        <SimpleSelect
          placeholder="Search for best sellers"
          transitionEnter = {true}
          transitionLeave = {true}
          options = {this.state.books}
          onSearchChange={(search) => {
            if (search.length > 1) {
              const books = this.data.filter(book => book.toLowerCase().includes(search.toLowerCase()) && book)

              this.setState({
                loading: true,
                books: this.state.searched
              })

              setTimeout(function () {
                this.setState({
                  books: books.map(book => {return {label: book, value: book}}),
                  searched: books.map(book => {return {label: book, value: book}}),
                  loading: false
                })
              }.bind(this), 1500)
            } else {
              this.setState({
                loading: false,
                books: []
              })
            }
          }}
        />
        <div className={this.state.loading ? 'search-info search-info--active' : 'search-info' }><img src={Loading} alt="loading" /> Loading...</div>
      </div>
    )
  }
}

export default Search;
