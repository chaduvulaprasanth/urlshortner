import React from "react";
import Header from "./Header";
import Main from "./Main";

class Home extends React.Component {
  render() {
    let { urls } = this.props;
    return (
      <div>
        <Header />
        <Main urls={urls} />
      </div>
    );
  }
}

export default Home;
