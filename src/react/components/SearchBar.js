import React, { Component } from "react";
import { Container } from "../components";
import './SearchBar.css';
class SearchBar extends Component {
  render() {
      return (
        <Container textAlign="center" className="conversation-search">
          <input
            style={{ width: "100%", marginBottom: "25px"  }}
            type="search"
            className="conversation-search-input"
            icon="search"
            placeholder="Search..."
          />
        </Container>
      );
    }
}

export default SearchBar;