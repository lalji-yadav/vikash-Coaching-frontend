import React, { Component } from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
  import Home from '../home/home'
  import Admission from "../component/admission/admission"
  import Examination from "../component/examination/examination"
  import Result from "../component/results/result"
  import Faculity from "../component/faculity/faculity"
import Gallery from '../component/gallery/gallery';
import Contacts from '../component/contacts/contact'

class router extends Component {
    render() {
        return (
            <div>
                   <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/admission" component={Admission} />
                    <Route exact path="/examination" component={Examination} /> 
                    <Route exact path="/results" component={Result} />
                    <Route exact path="/faculity" component={Faculity} /> 
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/contact" component={Contacts} />

                    </Switch>
               
            </div>
        );
    }
}

export default router;
