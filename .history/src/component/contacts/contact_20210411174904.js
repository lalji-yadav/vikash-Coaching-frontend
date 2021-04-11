import React, { Component } from "react";

class contact extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <img
            style={{ width: "100%", height: "50vh" }}
            src={
              process.env.PUBLIC_URL + "/image/gallery/contacts/hero-img.png"
            }
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default contact;
