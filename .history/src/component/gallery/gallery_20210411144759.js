import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";

class gallery extends Component {

  render() {
    return (
      <div>
        <div className="col-sm-12 mt-2 p-0">
          <img
            style={{ width: "100%", height: "10%" }}
            src={
              process.env.PUBLIC_URL + "/image/gallery/Admin/0 (22) - Copy.jpg"
            }
            alt=""
          />
        </div>

        <div
          className="mt-5 rounded"
          style={{
            width: "95%",
            marginLeft: "2.5%",
            border: "1px solid rgb(63, 81, 181)",
          }}
        >
          <Tabs
            defaultActiveKey="Home"
            id="uncontrolled-tab-example"
            className="bg-light"
          >

            {/* first carosal */}

            <Tab eventKey="Home" title="Home">
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
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
