import React from "react";

class UrlListBar extends React.Component {
  render() {
    return (
      <div className="space-flex bar-option-cont">
        {["Original", "Short"].map((option, index) => (
          <p className="flex bar-option r-fs-1" key={index}>
            {option}
          </p>
        ))}
      </div>
    );
  }
}
export default UrlListBar;
