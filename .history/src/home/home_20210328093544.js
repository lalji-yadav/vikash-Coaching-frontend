import React, { Component } from "react";
import { Card, CardHeader } from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import { Public } from "@material-ui/icons";

class home extends Component {
  render() {
    return (
      <div className="row p-4">
        <div className="row p-4">
        <div className=" offset-sm-1 col-sm-10">
          <Carousel style={{ height: "60vh" }}>
            <Carousel.Item>
              <img
                style={{ height: "60vh" }}
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/image/1.jpeg"}
                alt="First slide"
              />
              {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
              <img
                style={{ height: "60vh" }}
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/image/2.jpeg"}
                alt="Third slide"
              />

              {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
              <img
                style={{ height: "60vh" }}
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/image/3.jpeg"}
                alt="Third slide"
              />

              {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
              <img
                style={{ height: "60vh" }}
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/image/4.jpeg"}
                alt="Third slide"
              />

              {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </div>
        {/* <div className="col-sm-6">
                    <Card className="pl-3 pt-3 bg-light" style={{height:"60vh"}}>
                      <h3 className="text-success">
                          Welcome to divine family
                      </h3>

                      <card>
                          <h5 className="text-success"> Important notice </h5>
                          <ul>
                              <li> A </li>
                              <li> B </li>
                              <li> C </li>
                              <li> D </li>
                              <li> E </li>
                          </ul>
                      </card>
                    </Card>

                </div> */}
        </div>  
        
      </div>
    );
  }
}

export default home;
