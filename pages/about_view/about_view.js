import React, { Component } from 'react'


export function About(props) {
    if (props.about) {
        return null;
    }

    return (
        <div className="about-container FlexDirection_column">
            <div className="about_section about_gradient-left">
                <div>
                    <img className="about_img ImgSize200" src="../static/images/avatar.jpg"></img>
                </div>
                <div className="about_text Fsize-2 Float-right">
                    <h1 className="about_text-title">About</h1>
                    <p>
                        Movie, sci-fi and over all tech geek that always seeks out new and interesting
                        things to experience and learn.  I strive to keep an open mind on everything because
                        you never know what kind of hidden truths await those who pay attention.
                    </p>
                    <p>
                        You can find those hidden truths hidden things like the comedy writings of Douglas Adams 
                        to J. R. R. Tolkien and all the way to the historical facts behind the theories expressed 
                        in the TV show “Ancient Aliens”.
                    </p>
                </div>
            </div>
            <div className="about_section about_gradient-right">
                <div className="about_text Fsize-2 Float-right">
                    <h1 className="about_text-title">Background</h1>
                    <p>
                        I have lived in Pennsylvania, Alaska and Georgia.  While in Alaska, I expanded my experiences 
                        when I joined the local Paranormal Investigation group I.O.P.I.A.  I have investigated and saw 
                        different places and things that are unforgetable.  Those experiences helped me 
                        expand my knowledge in movie, photo and audio editing and new knowledge and points of views about the world.
                    </p>
                </div>
                <div>
                    <img className="about_img ImgSize200" src="../static/images/building.jpg"></img>
                </div>
            </div>
            <div className="about_section about_gradient-left">
                <div>
                    <img className="about_img ImgSize200" src="../static/images/rainmeter.png"></img>
                </div>
                <div className="about_text Fsize-2 Float-right">
                    <h1 className="about_text-title">
                        Computers and UI design
                    </h1>
                    <p>
                        I first developed my interested in UI design when convirting back to a windows machine from a mac. I did not like how windows was 
                        cet up and strived to make my desktop look and act more like OSX.
                    </p>
                    <p>
                        I learned about a program called Rainmeter and expanded my knowledge in programing developing my first full custom UI theme 
                        through this program.    
                    </p>
                    <p>
                        My Rainmeter theme is available to download through deviantart and you can click <a href="https://www.deviantart.com/franknmullet" target="_blank">here</a> or on my link in the footer to navigate to that page.  
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
