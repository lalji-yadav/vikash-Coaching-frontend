import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class faculity extends Component {
    render() {
        return (
            <>
                    <div className="row">
                    <Card className="col-sm-6 py-3">
                       <img style={{width:"10vw", height:"10vw", float:"right", borderRadius:'50%'}}
                        src={process.env.PUBLIC_URL + '/image/faculity/lalji photo.jpg'} alt="" />
                    </Card>

                    <Card className="col-sm-6 p-3">
                    <img style={{width:"10vw", height:"10vw", float:"right", borderRadius:'50%'}} 
                        src={process.env.PUBLIC_URL + '/image/faculity/lalji photo.jpg'} alt="" />
                    </Card>
                    </div>
            </>
        );
    }
}

export default faculity;
