import React, { Component } from "react";
import { Input, Container } from "../components";

class SearchBar extends Component {
  render() {
    return (
      <Container textAlign="left">
        <Input
          style={{ width: "90%", margin: "15px 0" }}
          className="icon"
          icon="search"
          placeholder="Search..."
        />
      </Container>
    );
  }
}

export default SearchBar;