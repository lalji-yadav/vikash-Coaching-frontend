import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class admission extends Component {
    render() {
        return (
            <div>
                <h4>You know all about admission fee structure</h4>
              <div className="row">
                  <div className="m-3">

                  </div>
                  <Card className="col-sm-4">
                  <h4>School fee structure</h4>
                  </Card>

                  <Card className="col-sm-4">
                  <h4>Coaching fee structure</h4>
                  </Card>

                <Card className="col-sm-4">
                <h4>GYM fee structure</h4>
                </Card>
              </div>
            </div>
        );
    }
}

export default admission;
