import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class admission extends Component {
    render() {
        return (
            <div className="mt-4 mx-3">
                <h4>You know all about admission fee structure</h4>
              <div className="row mt-4">

                  <div className="col-sm-6">
                  <Card>
                  <h4 className="m-3">Coaching fee structure</h4>
                  </Card>
                  </div>

                  <div className="col-sm-6">
                  <Card>
                 <h4 className="m-3">GYM fee structure</h4>
                  </Card>    
                 </div>

              </div>
            </div>
        );
    }
}

export default admission;
