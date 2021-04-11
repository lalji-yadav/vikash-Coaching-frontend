// import { Height } from '@material-ui/icons';
import React, { Component } from "react";
// import {AppBTabs, Tab} from '@material-ui/core';
import {Tab, Tabs} from 'react-bootstrap'

class gallery extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-11 mt-2" style={{ marginLeft: "4.3%" }}>
            <img
              style={{ width: "100%", height: "70%" }}
              src={
                process.env.PUBLIC_URL +
                "/image/gallery/Admin/0 (22) - Copy.jpg"
              }
              alt=""
            />
          </div>
          <div className="col-md-5"></div>
        </div>

        <div className="rowf">
          <Tabs defaultActiveKey="Home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
              <h3>hiii </h3>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <h3>profile </h3>
            </Tab>
            <Tab eventKey="contact" title="Contact" >
              <h3>vghtrh </h3>
            </Tab>
          </Tabs>

          
        </div>
      </div>
    );
  }
}

export default gallery;
