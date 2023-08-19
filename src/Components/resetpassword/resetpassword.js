import React, { Component } from "react";
import "./resetpassword.css";
import RESETPASSWORD from "./assets/ResetPassword.png";

export default class resetpassword extends Component {
  render() {
    return (
      <div className="ResetPDiv">
        <img src={RESETPASSWORD} alt="Reset Password" />
        <div className="FormContainer">
          <form method="POST" className="resetForm">
            <p>Enter New Password</p>
            <div className="passcontainer">
              <label htmlFor="npass">New Password</label>
              <br />
              <input type="password" name="npass" id="npass" />
              <br />
              <label htmlFor="cnpass">Confirm New Password</label>
              <br />
              <input type="password" name="cnpass" id="cnpass" />
              <br />
            </div>
            <button type="submit">NEXT</button>
          </form>
        </div>
      </div>
    );
  }
}
