import React from "react";

class Errors extends React.Component {
  render() {
    let { errors } = this.props;
    return (
      <div>
        {errors.map((error, index) => (
          <li className="error-msg" key={index}>
            {error}
          </li>
        ))}
      </div>
    );
  }
}

export default Errors;
