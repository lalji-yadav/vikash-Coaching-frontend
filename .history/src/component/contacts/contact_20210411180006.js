import React, { Component } from "react";
import {Card} from '@material-ui/core';

class contact extends Component {
  render() {
    return (
      <div>
        <div className="row mt-4 border">
            <div className="col-sm-5 p-3">

                <Card className="p-5">
                    <h5> Vikash Kumar Singh </h5>
                    <p> B.sc, M.SC </p>
                    <p> Contsct No:- 1234567890 </p>
                </Card>

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
