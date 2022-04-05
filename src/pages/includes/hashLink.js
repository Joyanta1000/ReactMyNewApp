import React from "react";

class HashLink extends React.Component {
  render() {
    return (
      <div>
        <li className="nav-item">
          <a className="nav-link" href="#features">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#pricing">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#review">
            Reviews
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </div>
    );
  }
}

export default HashLink;
