import React, { Component } from 'react'
import Layout from '../components/layout.js'
import { Jumbotron, Container, Row, Col } from 'reactstrap'
import { AvatarStyle } from './jsxstyles'
import { HomeCard } from './customComponents'

function HomeHeader(props) {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3 text-center">Welcome to my page!</h1>
            <div className="container-fluid bg-1 text-center">
                <img src="../static/images/avatar.jpg" style={AvatarStyle} alt="Bird"/>
            </div>
          <p className="lead text-center">
                This page has been created during my efforts to learn JavaScript 
                and the React development structure.
          </p>
          <hr className="my-2" />
            <p className="text-center"> 
                It is my intent to use this page as a professional page and portfolio as
                I progress as a developer.<br />
                Please feel free to look around and email me with any questions or suggestions.
            </p>
        </Jumbotron>
      </div>
    );
};


class Home extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <div>
                        <HomeHeader />
                    </div>
                    <div>
                    <p className="text-center">
                        I am currently in the process of converting
                        my CSS to Boostrap 4.  Some pages are still in conversion.</p>
                        <Container>
                            <Row>
                                <Col  sm={{ size: 4, offset: 1 }}>
                                    <HomeCard
                                        Title="Desktop Customization"
                                        Image="../static/images/rainmeter.png"
                                        Subtitle="Rainmeter desktop tool"
                                        Description="I created a 45+
                                            skin desktop theme based on the Bethesda Game 'The Elder Scrolls V: Skyrim'."
                                        Link="https://www.deviantart.com/franknmullet"
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
                    </div>
                </div>
            </Layout>
        );
    }
}


export default Home;