// import { Height } from '@material-ui/icons';
import React, { Component } from 'react';

class gallery extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-1">
                        <img style={{width:"100%", height:"90%"}}
                         src={process.env.PUBLIC_URL + '/image/gallery/Admin/0 (22) - Copy.jpg'} alt="" />
                    </div>
                    <div className="col-md-5">

                    </div>

                </div>
            </div>
        );
    }
}

export default gallery;
