import React, { Component } from 'react';

import Homepage from './Homepage';
import Contact from './ContactPage';
import Aboutme from './AboutPage';
import Blogs from './BlogsPage'
import Project from './ProjectPage';

class Pages extends Component {
    render() {
        return (
            <div>
                <Homepage />
                <Aboutme />
                <Project />
                <Blogs />
                <Contact/>
            </div>
        )
    }
}

export default Pages;               