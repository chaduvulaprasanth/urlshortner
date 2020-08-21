import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="wrapper rwrapper space-flex">
          <a className="logo r-fs-1-2 " href="/">
            URL
          </a>
          <a className="logo fs-1 r-fs-1" href="/generate_reports/new">
            Get Report To Your Mail
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
