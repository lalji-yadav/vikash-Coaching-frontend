import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class faculity extends Component {
    render() {
        return (
            <>
              <Card className="mt-5">
                    <div className="row">
                    <div className="col-sm-6 py-3">
                    <img style={{width:"10vw", height:"10vw", float:"right", borderRadius:'50%'}}
                        src={process.env.PUBLIC_URL + '/image/faculity/lalji photo.jpg'} alt="" />
                    </div>
                    
                    <div className="col-sm-6 p-3">
                    <img style={{width:"10vw", height:"10vw", float:"right", borderRadius:'50%'}} 
                        src={process.env.PUBLIC_URL + '/image/faculity/lalji photo.jpg'} alt="" />
                    </div>
                    </div>
              </Card>
            </>
        );
    }
}

export default faculity;
