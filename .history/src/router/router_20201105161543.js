import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from '../home/home'
  import Admission from "../component/admission/admission"
  import Examination from "../component/examination/examination"
  import Result from "../component/results/result"
  import Faculity from "../component/faculity/faculity"

class router extends Component {
    render() {
        return (
            <div>
                   <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/admission" component={Admission} />
                    <Route exact path="/examination" component={Examination} /> 
                    <Route exact path="/results" component={Result} />
                    <Route exact path="/faculity" component={Faculity} /> 
                    </Switch>
               
            </div>
        );
    }
}

export default router;
