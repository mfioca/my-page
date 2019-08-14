/* **************** 
*   Imports       * 
******************/
import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Form, FormGroup, Label, Button, Table, Jumbotron } from 'reactstrap'
import {AboutImg, CardImageStyle, HomeImage, DandDAvatar, thumbnail } from './jsxstyles'


/* *********************** 
*   Export Classes       * 
**************************/

export { AboutMedia, SingleListCard, ThreeColumnCard, HomeCard, CustomJumbo, CharacterSheet, NameForm, AttackSection }

//used in Resumeview and providerdata
class CustomJumbo extends React.Component {
    render() {
        if (this.props.ImgUrl === "noimage") {
            return (
                <Jumbotron>
                <h1 className="display-3 text-center">{this.props.Title}</h1>
                <p className={this.props.Caption1Style}>{this.props.Caption1}</p>
                <hr className="my-2" />
                <p className={this.props.Caption2Style}>{this.props.Caption2}</p>
                </Jumbotron>
            );
        } else {
            return (
                <Jumbotron>
                    <h1 className="display-3 text-center">{this.props.Title}</h1>
                        <div className="container-fluid text-center">
                            <img src="../static/images/avatar.jpg" style={HomeImage} alt="avatar"/>
                        </div>
                        <p className={this.props.Caption1Style}>{this.props.Caption1}</p>
                        <hr className="my-2" />
                        <p className={this.props.Caption2Style}>{this.props.Caption2} <br />
                            {this.props.Caption3}</p>
                </Jumbotron>
            );
        }
    }
}

//used in about page
class AboutMedia extends React.Component{
    render() {
        if (this.props.Align === "Right") {
            return (
                <div className="p-3">
                    <Card className={this.props.Class}>
                        <Row>
                            <Col >
                            <CardImg style={AboutImg} src={this.props.ImgUrl} alt="Card image cap" />
                            </Col>
                        <Col>
                        <CardTitle className="mt-5"><h1>{this.props.Title}</h1></CardTitle>
                        <CardBody>
                            <CardText>
                                {this.props.Description}
                            </CardText>
                        </CardBody>
                        </Col>
                        </Row>
                    </Card> 
                </div>
            );
        }
        if (this.props.Align === "Left") {
            return (
                <div className="p-3">
                <Card className={this.props.Class}>
                    <Row>
                        <Col >
                        <CardTitle className="mt-5"><h1>{this.props.Title}</h1></CardTitle>
                        <CardBody>
                            <CardText>
                                {this.props.Description}
                            </CardText>
                        </CardBody>
                        </Col>
                        <Col >
                            <CardImg style={AboutImg} src={this.props.ImgUrl} alt="Card image cap" />
                        </Col>
                    </Row>
                </Card>
            </div>
            );
        };
    }
}

//used in about page for resume
class SingleListCard extends React.Component{
    render() {
        return (
            <div>
                <Card className="Text-Left">
                    <CardBody>
                        <CardSubtitle>{this.props.Subtitle}</CardSubtitle>
                        <CardText>
                            <ul>
                                <li>{this.props.Item1}</li>
                                <li>{this.props.Item2}</li>
                                <li>{this.props.Item3}</li>
                                <li>{this.props.Item4}</li>
                            </ul>
                        </CardText>
                    </CardBody>
                </Card> 
            </div>
        );
    }
};

//used in resume for experience section
class ThreeColumnCard extends React.Component{
    render() {
        return(
            <div className="p-3">
                <Card className={this.props.Class}>
                <CardTitle><h1>{this.props.Title}</h1></CardTitle>
                    <Row className="text-left">
                        <Col >
                            <CardBody>
                                <CardText>
                                    <li>
                                        {this.props.Description1}
                                    </li>
                                </CardText>
                            </CardBody>
                        </Col>
                        <Col >
                            <CardBody>
                                <CardText>
                                    <li>
                                        {this.props.Description2}
                                    </li>
                                </CardText>
                            </CardBody>
                        </Col>
                        <Col >
                            <CardBody>
                                <CardText>
                                    <li>
                                        {this.props.Description3}
                                    </li>
                                </CardText>
                            </CardBody>
                        </Col>
                    </Row>
                </Card> 
            </div>
        );
    }
}

//used in home page
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
                        <Button 
                            href={this.props.Link}
                            className="btn-dark"
                            target="_blank" 
                            rel="noopener noreferrer">
                                {this.props.ButtonTitle}
                        </Button>
                    </CardBody>
                </Card> 
            </div>
        );
    }
};

//D and D application
class CharacterSheet extends React.Component {
    render() {
        return (
            <div >
                <Row >
                    <Col xs="6">
                        <Table borderless  className=" ml-4 p-5">
                            <tbody>
                                <tr>
                                <td className="text-muted  text-left h4">Strength:</td>
                                    <td className="text-white  text-left h4"> { this.props.Strength }</td>
                                </tr>
                                <tr>
                                    <td className="text-muted  text-left h4">Constitution:</td>
                                    <td className="text-white  text-left h4"> { this.props.Constitution }</td>
                                </tr>
                                <tr>
                                    <td className="text-muted  text-left h4">Dexterity:</td>
                                    <td className="text-white  text-left h4"> { this.props.Dexterity }</td>
                                </tr>
                                <tr>
                                    <td className="text-muted  text-left h4">Hitpoints:</td>
                                    <td className="text-white  text-left h4"> { this.props.Hitpoints }</td>
                                </tr>
                                <tr>
                                    <td className="text-muted  text-left h4">Damage per Hit:</td>
                                    <td className="text-white  text-left h4"> { this.props.Damage }</td>
                                </tr>
                            </tbody>
                        </Table>  
                    </Col>
                    <Col>
                    <div className="justify-content-center">
                        <img  style={DandDAvatar} src={this.props.ImgUrl} alt="hero"/>
                    </div>
                    </Col>
                </Row>
            </div>
        );
    }
}


// D and D application
class AttackSection extends React.Component {
    render() {
        return (
            <div className="bg-dark">
                <Row>
                    <Col className="my-4 mx-5">
                        <div>
                            <img src="../static/images/acicon.png" alt="shield"/>
                            <div>
                                <h4>
                                    { this.props.AC }
                                    <style jsx>{`
                                    h4 {
                                        position: absolute;
                                        top: 35px;
                                        left: 58px;
                                        transform: translate(-10%, -20%);
                                    `}</style>
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col className="my-4 mx-5">
                        <div className="float-right">
                            <div>
                                <img src="../static/images/hitadjust.png" alt="icon"/>
                                <div>
                                    <h4>
                                        { this.props.HitAdj }
                                        <style jsx>{`
                                    h4 {
                                        position: absolute;
                                        top: 45px;
                                        left: 43px;
                                        transform: translate(-10%, -20%);
                                    `}</style>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center my-5">
                    <Button  onClick={ this.props.AttackRoll }>
                        { this.props.RollTitle }
                    </Button>
                </div>
                <div className="text-center text-white">
                    <h2>Attack Result:</h2>
                </div>
                <div>
                    <h2 className="alert-success w-100 text-center my-5">{ this.props.DidHit }</h2>
                </div>
            </div>
        );
    }
}

//D and D application
class NameForm extends React.Component {
    render() {
        return (
            <div>
                <Form inline>
                    <FormGroup>
                    <Label>
                        <h6 className="mr-3">Name:</h6>
                        <input
                            type="text"
                            maxLength="20"
                            value={ this.props.value }
                            onChange={ this.props.NameChange }
                            //Prevent enter key submit
                            onKeyPress={event => {
                                if (event.which === 13 /* Enter */) {
                                event.preventDefault();
                                }
                            }}
                        />
                    </Label>
                    <Button type="button" className="ml-5 " onClick={ this.props.NameSubmit }>Submit</Button>
                </FormGroup>
                </Form> 
            </div>
        );
    }
}

