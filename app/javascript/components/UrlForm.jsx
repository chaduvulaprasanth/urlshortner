import React from "react";
import API from "../utils/API";
import Errors from "./shared/Errors";

class UrlForm extends React.Component {
  constructor() {
    super();
    this.state = {
      url: { original_url: "" },
      msg: "",
      errors: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ url: { ...this.state.url, [name]: value } });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { url } = this.state;
    if (url.original_url) {
      API.postNewTask("/urls", "POST", url)
        .then((response) => {
          window.location.href = "/";
        })
        .catch((error) => {
          error.json().then(({ errors }) => {
            this.setState({ ...this.state, errors });
          });
        });
    } else {
      this.setState({ msg: "Url should not be empty" });
    }
  };

  render() {
    let { url, msg, errors } = this.state;
    return (
      <div className="wrapper">
        <div className="portal">
          {errors ? <Errors errors={errors} /> : ""}
          <form onSubmit={this.handleSubmit} className="flex">
            <input
              className="portal-input"
              type="text"
              name="original_url"
              placeholder={msg ? msg : "Enter the URL you want to short..."}
              value={url.original_url}
              onChange={this.handleChange}
            />
            <input className="portal-input-btn" type="submit" value="Short" />
          </form>
        </div>
      </div>
    );
  }
}

export default UrlForm;
