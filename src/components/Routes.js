import React from 'react';

import {Switch , Route} from 'react-router-dom';

import Homepage from './containers/Homepage';
import Contact from './containers/ContactPage';
import Aboutme from './containers/AboutPage';
import Blogs from './containers/BlogsPage'
import Project from './containers/ProjectPage';

function Routes() {
return(
  
        <Switch>
        <Route exact path="#about" component ={Aboutme} />
        <Route exact path="#contact" component ={Contact} />
        <Route exact path="#" component ={Homepage} />
        <Route exact path="#poject" component ={Project} />
        <Route exact path="#blog" component ={Blogs} />
        </Switch>
  
);
}

export default Routes;