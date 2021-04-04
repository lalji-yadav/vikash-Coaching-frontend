import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class faculity extends Component {
    render() {
        return (
            <>
                <Card>
                    <div className="row">
                    <div className="col-sm-6">
                       <img style={{width:"5vw", height:"5vw"}} src={process.env.PUBLIC_URL + '/image/faculity/lalji photo.jpg'} />
                    </div>
                    <div className="col-sm-6">
                        <h1> hello </h1>
                    </div>
                    </div>
                </Card>
            </>
        );
    }
}

export default faculity;
