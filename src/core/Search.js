import React, { Component } from "react";
import axios from "axios";
import Suggestions from "./Suggestions";

import { API } from "../config";

class Search extends Component {
  state = {
    query: "",
    results: [],
  };

  getInfo = () => {
    axios.get(`${API}/comments?postId=${this.state.query}`).then(({ data }) => {
      console.log("data ", data);
      this.setState({
        results: data,
      });
    });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        this.getInfo();
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
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default Search;
