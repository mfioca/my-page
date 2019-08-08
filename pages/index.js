import React, { Component } from 'react'
import Layout from '../components/layout.js'
import { Jumbotron, Button, Card, CardDeck, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const AvatarStyle = {
    borderRadius: '50%',
    width: '20%',
    height: 'auto'
};

const CardImageStyle = {
    width: '50%',
    height: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto'
}

const HomeHeader = (props) => {
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
            <p className="lead text-center"> 
                It is my intent to use this page as a professional page and portfolio as
                I progress as a developer.<br />
                Please feel free to look around and email me with any questions or suggestions.
            </p>
          
        </Jumbotron>
      </div>
    );
  };

class HomeCard extends React.Component{
    render() {
    return (
        <div>
            <Card className="text-center">
                <CardTitle>{this.props.Title}</CardTitle>
                <CardImg top style={CardImageStyle} src={this.props.Image} alt="Card image cap" />
                <CardBody>
                    <CardSubtitle>{this.props.Subtitle}</CardSubtitle>
                    <CardText>{this.props.Description}
                    </CardText>
                    <Button>
                        <a href={this.props.Link}
                            target="_blank" 
                            rel="noopener noreferrer">
                            Deviant Art Profile
                        </a>
                    </Button>
                </CardBody>
            </Card> 
        </div>
    );
    }
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
                                    />
                                </Col>
                                <Col  sm={{ size: 4, order: 2, offset: 1 }}>
                                    <HomeCard 
                                        Title="Git Hub Repository"
                                        Image="../static/images/GitHub.png"
                                        Subtitle="My-Page"
                                        Description="I have this page published on my GitHub profile.  You can click on
                                        the below link to check out the base code"
                                        Link="https://github.com/mfioca/my-page"
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