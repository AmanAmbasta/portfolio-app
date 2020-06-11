import React from 'react';
import { Link } from 'react-router-dom'
function Head() {
    return (
        <div className="navbar">
            <Link to="#" className="logo">Aman</Link>
            <ul className="nav">
                <li>
                    <a href="https://twitter.com/aman0353" className="fa fa-twitter" style={{color:'blue'}}></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kumar-aman-036141103" className="fa fa-linkedin" style={{color:'blue'}}></a>
                </li>
                <li>
                    <a href="aman035@gmail.com" className="fa fa-google" style={{color:'blue'}}></a>
                </li>
                <li>
                    <a href="https://docs.google.com/document/d/1S1rf3aDGtKz_ZF5tfOvW6CK3r9Yr1fIpEPjSC2XsNkA">Resume</a>
                    </li>
                    </ul>
        </div>
    )
}

export default Head;
