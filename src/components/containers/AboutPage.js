import React, { Component } from 'react';
import img1 from "../../refrence/DSC_0062(1).jpg";
import img2 from "../../refrence/profile-pic.jpeg";
    class Aboutme extends Component {
        render() {
            return (
                <div className="about-area " id="about">
                    <div className="text-part">
                        <h1>About Me  </h1>
                        <div className="grid-container">
                            <p className="grid-item1">
                                I am an Electronic and Communication Engineer, a geeky brat who wants to dive in every ocean of technology and use its salt for flavoring projects.
                            </p>
                            <img src={img1} alt="img1" className="grid-item2" />
                            <img src={img2} alt="img2" className="grid-item3"/>
                            <p className="grid-item4">
                                Apart from that, I love clicking pictures, mostly composite photography and I am a music lover just listening 😅😅 as I believe a perfect tone can tune any mood 😇.
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    }

export default Aboutme;

//