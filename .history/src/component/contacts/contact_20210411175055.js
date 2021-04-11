import React, { Component } from "react";

class contact extends Component {
  render() {
    return (
      <div>
        <div className="row mt-4 border-danger">
            <div className="col-sm-5">

            </div>

            <div className="col-sm-5">
             <img
            style={{ width: "100%", height: "50vh" }}
            src={
              process.env.PUBLIC_URL + "/image/gallery/contacts/hero-img.png"
            }
            alt=""
          />
            </div>
          
        </div>
      </div>
    );
  }
}

export default contact;
