import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { TextField, Button } from '@material-ui/core';

class admission extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visibility: false,
            visibilitygym: false
        }
        this.admissionForm = this.admissionForm.bind(this);
        this.admissionGymForm = this.admissionGymForm.bind(this);
    }

     admissionForm () {
         this.setState(state => ({
      visibility: !state.visibility
    }));
    }

    admissionGymForm () {
        this.setState(state => ({
            visibilitygym: !state.visibilitygym
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

                   <Button onClick={this.admissionForm} variant="contained" color="primary">
                       Admission Form
                    </Button>

                   {
                       this.state.visibility &&
                        <Card className="py-3 px-5">
                           <form noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Full Name" /> <br /> <br />
                            <TextField id="standard-basic" label="Course" /> <br /> <br />
                            <TextField id="standard-basic" label="Mobile No" /> <br /> <br />
                            <TextField id="standard-basic" label="Email" /> <br /> <br />
                            <TextField id="standard-basic" label="Address" /> <br /> <br /> 

                            <Button variant="contained" color="primary"> Submit </Button>
                            
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

                   <Button onClick={this.admissionGymForm} variant="contained" color="primary">
                        Admission Form
                    </Button>

                    {
                        this.state.visibilitygym && 

                    <Card>
                        <h1> brt grhg </h1>
                    </Card>
                    }
                  </Card> 
                  
                 </div>

              </div>
            </div>
        );
    }
}

export default admission;
