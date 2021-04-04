import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';


class admission extends Component {
    render() {
        return (
            <div className="mt-4 mx-3">
                <h4>You know all about admission fee structure</h4>
              <div className="row mt-4">

                  <div className="col-sm-6">
                  <Card className="p-3">
                  <h4 >Coaching fee structure</h4>
                   <p> 250/ per month </p>
                   <p> 600/ three month </p>
                   <p> 1100/ six month </p>
                   <p> 2100/ per year </p>

                   <Button> Admission Form </Button>
                  </Card>
                  </div>

                  <div className="col-sm-6">
                  <Card className="p-3">
                 <h4 >GYM fee structure</h4>
                 <p> 250/ per month </p>
                   <p> 600/ three month </p>
                   <p> 1100/ six month </p>
                   <p> 2100/ per year </p>
                  </Card>    
                 </div>

              </div>
            </div>
        );
    }
}

export default admission;
