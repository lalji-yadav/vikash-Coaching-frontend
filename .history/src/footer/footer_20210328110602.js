import React, { Component } from 'react';
// import { Card } from 'react-bootstrap';

class footer extends Component {
    render() {
        return (
              <div className="row bg-dark text-white mt-5 py-3 pl-4">

                  <div className="col-sm-4">
                  <h3> Divine Coaching </h3>
                  <ul>
                         <li> About </li>
                         <li> Cources </li>
                         <li> Fee Structure </li>
                         <li> Faculity </li>
                         <li> Award & Show </li>
                     </ul>
                  </div>

                  <div className="col-sm-4">
                  <h3> Divine GYM </h3>
                  <ul>
                         <li> About </li>
                         <li> Cources </li>
                         <li> Fee Structure </li>
                         <li> Faculity </li>
                         <li> Award & Show </li>
                     </ul>
                  </div>
              </div>
        );
    }
}

export default footer;
