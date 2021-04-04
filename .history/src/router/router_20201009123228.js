import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from '../home/home'
  import Admission from "../component/admission/admission"
  import Examination from "../component/examination/examination"

class router extends Component {
    render() {
        return (
            <div>
                   <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/admission" component={Admission} />
                    <Route exact path="/examination" component={Examination} /> 
                    </Switch>
               
            </div>
        );
    }
}

export default router;
