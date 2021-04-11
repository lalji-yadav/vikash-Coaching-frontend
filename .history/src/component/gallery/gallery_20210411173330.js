import React, { Component } from "react";
import { Tab, Tabs, Carousel } from "react-bootstrap";

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
            defaultActiveKey="adminGroup"
            id="uncontrolled-tab-example"
            className="bg-light"
          >

            {/* admin carosal */}

            <Tab eventKey="adminGroup" title="Admin Group">
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={
                        process.env.PUBLIC_URL + "/image/gallery/Admin/0 (22) - Copy.jpg"
                      }
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
                    src={
                        process.env.PUBLIC_URL + "/image/gallery/Admin/0 (22) - Copy.jpg"
                      }
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
                    src={
                        process.env.PUBLIC_URL + "/image/gallery/Admin/0 (22) - Copy.jpg"
                      }
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

            {/* admin carosal */}

            <Tab eventKey="students" title="Students">
              <h3>profile </h3>
            </Tab>

            {/* admin carosal */}

            <Tab eventKey="gymGroup" title="Gym Group">
              <h3>vghtrh </h3>
            </Tab>

            {/* admin carosal */}

            <Tab eventKey="topperStudents" title="Topper Students">
              <h3>vghtrh </h3>
            </Tab>
            
             {/* admin carosal */}

            <Tab eventKey="gymWinners" title="Gym Winners">
              <h3>vghtrh </h3>
            </Tab>

          </Tabs>
        </div>
      </div>
    );
  }
}

export default gallery;
