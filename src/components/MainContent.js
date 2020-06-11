import React from 'react';
import Routes from './Routes'
import Pages from './containers/Page'
function MainContent() {
    return (
        <div className="Main-Component">
            <Routes />
            <Pages />
        </div>
      
    );
}

export default MainContent;