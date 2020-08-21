import React from "react";
import UrlForm from "./UrlForm";
import UrlListBar from "./UrlListBar";
import UrlList from "./UrlList";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <UrlForm />
        <div className="wrapper rwrapper">
          <section className="urls-cont ">
            <UrlListBar />
            <UrlList urls={this.props.urls} />
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
