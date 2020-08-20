import React from "react";
import API from "../../utils/API";
import Errors from "./Errors";

class NewReport extends React.Component {
  constructor() {
    super();
    this.state = {
      generate_report: { email: "" },
      msg: "",
      loading: "",
      btn_value: "Generate",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      generate_report: { ...this.state.generate_report, [name]: value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { generate_report } = this.state;
    if (generate_report.email) {
      this.setState({
        loading: "Generating Report",
        btn_value: "Generating...",
      });
      API.postNewTask("/generate_reports", "POST", generate_report)
        .then((response) => {
          this.setState({ loading: "Report sent to your mail successfully" });
          setTimeout(function () {
            window.location.href = "/";
          }, 2000);
        })
        .catch((error) => {
          this.state({ loading: "Generating report failed" });
        });
    } else {
      this.setState({ msg: "Email should not be empty" });
    }
  };

  render() {
    let { generate_report, msg, loading, btn_value } = this.state;
    return (
      <div className="main">
        <div className="wrapper portal">
          <form onSubmit={loading ? "" : this.handleSubmit} className="flex">
            <input
              className="portal-input report-input"
              type="email"
              name="email"
              placeholder={msg ? msg : "Enter the Email to recieve report"}
              value={generate_report.email}
              onChange={this.handleChange}
            />
            <input
              className="portal-input-btn"
              type="submit"
              value={btn_value}
            />
          </form>
          <div>
            {loading ? <p className="flex report-loading">{loading}</p> : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default NewReport;
