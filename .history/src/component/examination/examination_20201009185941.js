import React, { Component } from 'react';

class examination extends Component {
    render() {
        return (
            <div className="mt-4 mx-3">
                <h4> Examination scheduled</h4>
              <div className="row mt-4">
                  <div className="col-sm-4">
                  <Card>
                     <h4>School fee structure</h4>
                   </Card>
                  </div>

                  <div className="col-sm-4">
                  <Card>
                  <h4>Coaching fee structure</h4>
                  </Card>
                  </div>

                  <div className="col-sm-4">
                  <Card>
                 <h4>GYM fee structure</h4>
                  </Card>    
                 </div>

              </div>
            </div>
        );
    }
}

export default examination;
