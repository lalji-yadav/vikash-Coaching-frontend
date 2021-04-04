import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class examination extends Component {
    render() {
        return (
            <div className="mt-4 mx-3">
                <h4> Examination scheduled</h4>
              <div className="row mt-4">
    
                  <div className="col-sm-6">
                  <Card className="p-3">
                  <h4>Coaching exam time table</h4>
                  
                  </Card>
                  </div>

                  <div className="col-sm-6">
                  <Card className="p-3">
                 <h4>GYM fitness checkout</h4>
                  </Card>    
                 </div>

              </div>
            </div>
        );
    }
}

export default examination;
