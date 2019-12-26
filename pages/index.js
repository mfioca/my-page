import React from 'react'
import Layout from '../components/layout.js'
import { HomeCard, CustomJumbo, CenterFlexWrapDiv } from '../components/customComponents'


function Home() {
    return (
        <Layout>
            <CustomJumbo
                Title="Welcome to my page!"
                ImgUrl=''
                Caption1Style='lead text-center'
                Caption1="This page has been created during my efforts to learn JavaScript 
                    and the React development structure."
                Caption2Style="text-center"
                Caption2="It is my intent to use this page as a professional page and portfolio as
                    I progress as a developer."
                Caption3="Please feel free to look around and email me with any questions or suggestions."
            />
            <CenterFlexWrapDiv>
                <div className="text-center m-3">
                    <HomeCard
                        Title="Desktop Customization"
                        Image="../static/images/rainmeter.png"
                        Subtitle="Rainmeter desktop tool"
                        Description="I created a 45+
                            skin desktop theme based on the Bethesda Game 'The Elder Scrolls V: Skyrim'."
                        Link="https://www.deviantart.com/franknmullet/art/Skyrim-Theme-1-0-651760185"
                        ButtonTitle="Deviant"
                   />
                </div>
                <div className="text-center m-3">
                    <HomeCard 
                        Title="Git Hub Repository"
                        Image="../static/images/GitHub.png"
                        Subtitle="My-Page"
                        Description="I have this page published on my GitHub profile.  You can click on
                            the below link to check out the base code"
                        Link="https://github.com/mfioca/my-page"
                        ButtonTitle="GitHub"
                    />
                </div>
            </CenterFlexWrapDiv>       
        </Layout>
    );
}




export default Home;