import React from "react";
import "./NavBar.css";
import { Button, ExpandingButton } from "./CustomNavButton.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default class ExpandedNavBar extends React.Component {
  render() {
    return (
      <div key="a" onMouseLeave={this.props.onMouseLeave} className="NavBar">
        <Button className="NavBar-onebutton">Link 1</Button>
        <Button className="NavBar-onebutton">Link 2</Button>
        <ExpandingButton redirect="https://github.com/PatrickBrown1">
          <FaGithub size={32} style={{ verticalAlign: "middle" }} />
          &thinsp; GitHub
        </ExpandingButton>
        <ExpandingButton redirect="https://www.linkedin.com/in/P-Brown">
          <FaLinkedin size={32} style={{ verticalAlign: "middle" }} />
          &thinsp; LinkedIn
        </ExpandingButton>
      </div>
    );
  }
}
