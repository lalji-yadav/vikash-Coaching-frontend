import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { TextField, Button } from '@material-ui/core';

class admission extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visibility: false
        }
        this.admissionForm = this.admissionForm.bind(this);
    }

     admissionForm () {
         this.setState(state => ({
      visibility: !state.visibility
    }));
    }

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

                   <Button onClick={this.admissionForm} variant="outlined" color="primary">
                       Admission Form
                    </Button>

                   {
                       this.state.visibility &&
                        <Card>
                           <form noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Full Name" /> <br />
                            <TextField id="standard-basic" label="Course" /> <br />
                            <TextField id="standard-basic" label="Mobile No" /> <br />
                            <TextField id="standard-basic" label="Email" /> <br />
                            <TextField id="standard-basic" label="Address" />

                            <Button> Submit </Button>
                            
                            </form>
                       </Card>
                   }
                  
                  </Card>

                  </div>

                  <div className="col-sm-6">
                  <Card className="p-3">
                 <h4 >GYM fee structure</h4>
                 <p> 250/ per month </p>
                   <p> 600/ three month </p>
                   <p> 1100/ six month </p>
                   <p> 2100/ per year </p>

                   <Button> Admission Form </Button>
                  </Card> 

                  
                 </div>

              </div>
            </div>
        );
    }
}

export default admission;

 
