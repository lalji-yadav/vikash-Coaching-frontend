import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class faculity extends Component {
    render() {
        return (
            <>
                <Card>
                    <div className="row">
                    <div className="col-sm-6">
                       <img style={{width:"10vw", height:"10vw", float:"right", borderRadius:'50%'}} src={process.env.PUBLIC_URL + '/image/faculity/lalji photo.jpg'} />
                    </div>
                    <div className="col-sm-6">
                    <img style={{width:"10vw", height:"10vw"}} src={process.env.PUBLIC_URL + '/image/faculity/lalji photo.jpg'} />
                    </div>
                    </div>
                </Card>
            </>
        );
    }
}

export default faculity;
