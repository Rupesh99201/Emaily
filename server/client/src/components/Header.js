import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="active">
            <a href="/auth/google"> Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 20px" }}>
            Counts:{this.props.auth.credits}
          </li>,
          <li key="2" className="active">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="brand-logo"
            >
              Emaily
            </Link>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
