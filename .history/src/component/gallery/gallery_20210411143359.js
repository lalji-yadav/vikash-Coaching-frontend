import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";

class gallery extends Component {

  render() {
    return (

      <div>
        <div className="col-sm-12 mt-2 p-0">
          <img
            style={{ width: "100%", height: "50%" }}
            src={
              process.env.PUBLIC_URL + "/image/gallery/Admin/0 (22) - Copy.jpg"
            }
            alt=""
          />
        </div>

        <div className="mt-5 rounded" style={{ width: "100%", marginLeft: "5%", border:"1px solid red" }}>
          <Tabs defaultActiveKey="Home" id="uncontrolled-tab-example">
            <Tab className="text-danger" eventKey="Home" title="Home">
              <h3>hiii </h3>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <h3>profile </h3>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <h3>vghtrh </h3>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default gallery;
