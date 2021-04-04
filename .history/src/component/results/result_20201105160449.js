import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class result extends Component {
    render() {
        return (
            <div className="mt-4 mx-3">
                <h4>Results</h4>
              <div className="row mt-4">
                
                  <div className="col-sm-6">
                  <Card className="p-3">
                  <h4>Coaching fee structure</h4>
                  </Card>
                  </div>

                  <div className="col-sm-6">
                  <Card className="p-3">
                 <h4>GYM fee structure</h4>
                  </Card>    
                 </div>

              </div>
            </div>
        );
    }
}

export default result;
