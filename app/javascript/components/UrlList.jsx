import React from "react";
import API from "../utils/API";
import Errors from "./shared/Errors";

class UrlList extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: "",
    };
  }

  handlePin = (id) => {
    API.postNewTask(`/urls/${id}`, "PATCH")
      .then((response) => {
        window.location.href = "/";
      })
      .catch((error) => {
        error.json().then(({ errors }) => {
          this.setState({ ...this.state, errors });
        });
      });
  };

  handleClick = (id) => {
    API.postNewTask(`/urls/${id}`, "GET")
      .then((response) => {
        window.open(response.url.original_url);
        window.location.href = "/";
      })
      .catch((error) => {
        error.json().then(({ errors }) => {
          this.setState({ ...this.state, errors });
        });
      });
  };

  render() {
    let { urls } = this.props;
    let { errors } = this.state;
    console.log(urls);
    if (urls.length == 0) {
      return <div>No Url's added</div>;
    }
    return (
      <div className="url-list-cont">
        {errors ? <Errors errors={errors} /> : ""}
        {urls.map((url) => (
          <div className="url-card space-flex" key={url.id}>
            <button
              onClick={() => this.handlePin(url.id)}
              className={`pin ${url.pinned ? "pinned" : "nopin"}`}
            >
              <svg
                width="16px"
                height="16px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="thumbtack"
                className="svg-inline--fa fa-thumbtack fa-w-12"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z"
                />
              </svg>
            </button>
            <div className="url-holder space-flex">
              <a
                href={url.original_url}
                target="_blank"
                rel="noopener noreferrer"
                className="url-item url-item1"
              >
                {url.original_url}
              </a>
              <button
                onClick={() => this.handleClick(url.id)}
                className="url-item"
              >
                {window.location.href + url.slug}
              </button>
            </div>
            <button className="pin clicked">{url.clicked}</button>
          </div>
        ))}
      </div>
    );
  }
}

export default UrlList;
