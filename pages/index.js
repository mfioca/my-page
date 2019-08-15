import React, { Component } from 'react'
import Layout from '../components/layout.js'
import { Container, Row, Col } from 'reactstrap'
import { HomeCard, CustomJumbo} from './customComponents'


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
            <Container>
                <Row>
                    <Col  sm={{ size: 4, offset: 1 }}>
                        <HomeCard
                            Title="Desktop Customization"
                            Image="../static/images/rainmeter.png"
                            Subtitle="Rainmeter desktop tool"
                            Description="I created a 45+
                                skin desktop theme based on the Bethesda Game 'The Elder Scrolls V: Skyrim'."
                            Link="https://www.deviantart.com/franknmullet/art/Skyrim-Theme-1-0-651760185"
                            ButtonTitle="Deviant"
                        />
                    </Col>
                    <Col  sm={{ size: 4, order: 2, offset: 2 }}>
                        <HomeCard 
                            Title="Git Hub Repository"
                            Image="../static/images/GitHub.png"
                            Subtitle="My-Page"
                            Description="I have this page published on my GitHub profile.  You can click on
                                the below link to check out the base code"
                            Link="https://github.com/mfioca/my-page"
                            ButtonTitle="GitHub"
                        />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}




export default Home;