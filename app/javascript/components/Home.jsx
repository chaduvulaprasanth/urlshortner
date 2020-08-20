import React from "react";
import Header from "./Header";
import Main from "./Main";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: this.props.urls,
    };
  }

  render() {
    let { urls } = this.state;
    return (
      <div>
        <Main urls={urls} />
      </div>
    );
  }
}

export default Home;
