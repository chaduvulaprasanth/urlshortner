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
      btn_value: "Short",
      short: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ url: { ...this.state.url, [name]: value } });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { url } = this.state;
    if (url.original_url) {
      this.setState({ btn_value: "Shorting...", short: false });
      API.postNewTask("/urls", "POST", url)
        .then((response) => {
          this.setState({ btn_value: "Shorted!", short: false });
          window.location.href = "/";
        })
        .catch((error) => {
          error.json().then(({ errors }) => {
            this.setState({
              ...this.state,
              errors,
              msg: "",
              short: true,
              btn_value: "Short",
            });
          });
        });
    } else {
      this.setState({ msg: "Url should not be empty" });
    }
  };

  render() {
    let { url, msg, errors, btn_value, short } = this.state;
    return (
      <div className="wrapper rwrapper">
        <div className="portal">
          {errors ? <Errors errors={errors} /> : ""}
          {msg && <p className="error-msg">{msg}</p>}
          <form
            onSubmit={short ? this.handleSubmit : ""}
            className="flex r-d-block"
          >
            <input
              className="portal-input r-d-block width-full"
              type="text"
              name="original_url"
              placeholder="Enter the URL you want to short..."
              value={url.original_url}
              onChange={this.handleChange}
            />
            <input
              className={`portal-input-btn r-d-block width-full ${
                short ? "" : "curs-not-allowed"
              }`}
              type="submit"
              value={btn_value}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default UrlForm;
