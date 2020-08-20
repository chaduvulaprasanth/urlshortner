import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="wrapper space-flex">
          <a className="logo" href="/">
            URL
          </a>
          <a className="logo fs-1 nav-item" href="/generate_reports/new">
            Get Report To Your Mail
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
