import React, { Component } from "react";
import axios from "axios";
import { API } from "../config";

class Search extends Component {
  state = {
    query: "",
    results: [],
  };

  getInfo = () => {
    axios.get(`${API}/posts`).then(({ data }) => {
      this.setState({
        results: data.data,
      });
    });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        }
      }
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={(input) => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default Search;
