// import { Height } from '@material-ui/icons';
import React, { Component } from "react";
import {AppBar, Tabs, Tab} from '@material-ui/core';

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

        <div className="row">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
              <Sonnet />
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <Sonnet />
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              <Sonnet />
            </Tab>
          </Tabs>

          {/* <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel> */}
        </div>
      </div>
    );
  }
}

export default gallery;
