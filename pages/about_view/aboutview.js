import React from 'react'
import { AboutMedia } from '../customComponents'

class About extends React.Component {
    render() {
        return (
            <div>
                <AboutMedia
                    Class="text-center bg-info text-white p-3"
                    Align="Right"
                    ImgUrl="../static/images/avatar.jpg"
                    Title="About"
                    Description="Movie, sci-fi and over all tech geek that always seeks out new and interesting
                        things to experience and learn.  I strive to keep an open mind on everything because
                        you never know what kind of hidden truths await those who pay attention.
                        You can find those hidden truths hidden things like the comedy writings of Douglas Adams 
                        to J. R. R. Tolkien and all the way to the historical facts behind the theories expressed 
                        in the TV show “Ancient Aliens”."
                />
                <AboutMedia
                    Class="text-center bg-info text-white p-3"
                    Align="Left"
                    ImgUrl="../static/images/building.png"
                    Title="Background"
                    Description="I have lived in Pennsylvania, Alaska and Georgia.  While in Alaska, I expanded my experiences 
                        when I joined the local Paranormal Investigation group I.O.P.I.A.  I have investigated different places
                        and have seen things that are unforgetable.  Those experiences helped me 
                        expand my knowledge in movie, photo and audio editing and new knowledge and points of views about the world."
                />
                <AboutMedia
                    Class="text-center bg-info text-white p-3" 
                    Align="Right"
                    ImgUrl="../static/images/rainmeter.png"
                    Title="Computers and UI design"
                    Description="I first developed my interested in UI design when convirting back to a windows machine from a mac. I did not like how windows was 
                        cet up and strived to make my desktop look and act more like OSX.
                        I learned about a program called Rainmeter and expanded my knowledge in programing developing my first full custom UI theme 
                        through this program.  My Rainmeter theme is available to download through deviantart." 
                />
            </div> 
        );
    }
}

export default About;
