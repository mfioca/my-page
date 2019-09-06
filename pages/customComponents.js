/* **************** 
*   Imports       * 
******************/

import React from 'react'
import { 
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, 
    Row, Col, Form, FormGroup, Label, Input, Button, Table, Jumbotron 
} from 'reactstrap'

import { AboutImg, CardImageStyle, HomeImage, HomeCardStyle, HomeCardTitleStyle, 
    DandDAvatar, thumbnail 
} from './jsxstyles'

/* *********************************
*   Export styled components       * 
***********************************/

export function TvPostInfoLabel(props) {
    return (
      <td className="h2 text-left w-25 m-0 p-2">{props.children}</td>
    );
}

export function TvPostInfoValue(props){
    return (
        <td className="text-left m-0 p-2"><small>{props.children}</small></td>
    )
}

export function NewTabLink(props){
    return (
        <a className={props.Style}
            href={props.Link}
            target="_blank" 
            rel="noopener noreferrer"
            title={props.Title}>
                {props.children}
        </a>
    )
}

/* *********************** 
*   Export Classes       * 
**************************/

//used in home page
export class HomeCard extends React.Component{
    render() {
        return (
            <div>
                <Card style={HomeCardStyle}>
                    <CardTitle style={HomeCardTitleStyle}>{this.props.Title}</CardTitle>
                    <CardImg top style={CardImageStyle} src={this.props.Image} alt="Card image cap" />
                    <CardBody>
                        <CardSubtitle>{this.props.Subtitle}</CardSubtitle>
                        <CardText style={{height: '80px'}}>{this.props.Description}</CardText>
                        <Button className="w-100 p-0 m-0">
                            <NewTabLink
                                Style="btn btn-dark w-100 p-2"
                                Link={this.props.Link}>
                                    {this.props.ButtonTitle}
                            </NewTabLink>
                        </Button>
                    </CardBody>
                </Card> 
            </div>
        );
    }
};

//used in Resumeview and providerdata
export class CustomJumbo extends React.Component {
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
                        <img 
                            src="../static/images/avatar.jpg" 
                            style={HomeImage} alt="avatar"
                        />
                    </div>
                    <p className={this.props.Caption1Style}>{this.props.Caption1}</p>
                    <hr className="my-2" />
                    <p className={this.props.Caption2Style}>{this.props.Caption2} <br />
                        {this.props.Caption3}
                    </p>
                </Jumbotron>
            );
        }
    }
}

//used in about page
export class AboutMedia extends React.Component{
    render() {
        if (this.props.Align === "Right") {
            return (
                <div className="py-3">
                    <Card className={this.props.Class}>
                        <Row>
                            <Col >
                                <CardImg 
                                    style={AboutImg} 
                                    src={this.props.ImgUrl} 
                                    alt="Card image cap" 
                                />
                            </Col>
                            <Col>
                                <CardTitle className="mt-5"><h1>{this.props.Title}</h1></CardTitle>
                                <CardBody>
                                    
                                        {this.props.Description}
                                    
                                </CardBody>
                            </Col>
                        </Row>
                    </Card> 
                </div>
            );
        }

        if (this.props.Align === "Left") {
            return (
                <div className="py-3">
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
export class SingleListCard extends React.Component{
    render() {
        return (
            <div>
                <Card className="Text-Left" style={{width: '350px'}}>
                    <CardBody>
                        <CardSubtitle>{this.props.Subtitle}</CardSubtitle>
                        <div>
                            <li>{this.props.Item1}</li>
                            <li>{this.props.Item2}</li>
                            <li>{this.props.Item3}</li>
                            <li>{this.props.Item4}</li>
                        </div>
                    </CardBody>
                </Card> 
            </div>
        );
    }
};

//used in resume for experience section
export class ThreeColumnCard extends React.Component{
    render() {
        return(
            <div className="py-3">
                <Card className={this.props.Class}>
                <CardTitle><h1>{this.props.Title}</h1></CardTitle>
                    <Row className="text-left">
                        <Col >
                            <CardBody>
                                <div>
                                    <li>
                                        {this.props.Description1}
                                    </li>
                                </div>
                            </CardBody>
                        </Col>
                        <Col >
                            <CardBody>
                                <div>
                                    <li>
                                        {this.props.Description2}
                                    </li>
                                </div>
                            </CardBody>
                        </Col>
                        <Col >
                            <CardBody>
                                <div>
                                    <li>
                                        {this.props.Description3}
                                    </li>
                                </div>
                            </CardBody>
                        </Col>
                    </Row>
                </Card> 
            </div>
        );
    }
}

//D and D application
export class CharacterSheet extends React.Component {
    render() {
        function DandDTableLabel(props) {
            return (
                <td className="text-muted text-left h4">{props.children}</td>
            );
        }

        function DandDTableValue(props) {
            return (
                <td className="text-white text-left h4">{props.children}</td>
            );
        }
        return (
            <div >
                <Row >
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <Table borderless  className="">
                            <tbody>
                                <tr>
                                    <DandDTableLabel>Strength:</DandDTableLabel>
                                    <DandDTableValue>{this.props.Strength}</DandDTableValue>
                                </tr>
                                <tr>
                                    <DandDTableLabel>Constitution:</DandDTableLabel>
                                    <DandDTableValue> {this.props.Constitution}</DandDTableValue>
                                </tr>
                                <tr>
                                    <DandDTableLabel>Dexterity:</DandDTableLabel>
                                    <DandDTableValue> {this.props.Dexterity}</DandDTableValue>
                                </tr>
                                <tr>
                                    <DandDTableLabel>Hitpoints:</DandDTableLabel>
                                    <DandDTableValue>
                                        {this.props.Hitpoints != "Dead" && 
                                            <span>{this.props.Hitpoints}</span> ||
                                            <span className="text-danger h5">
                                                <small>{this.props.Hitpoints}</small>
                                            </span>
                                        } 
                                    </DandDTableValue>
                                </tr>
                                <tr>
                                    <DandDTableLabel>Damage per Hit:</DandDTableLabel>
                                    <DandDTableValue> {this.props.Damage}</DandDTableValue>
                                </tr>
                            </tbody>
                        </Table>  
                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                    <div className="text-center ">
                        <img  style={DandDAvatar} 
                            src={this.props.ImgUrl} 
                            alt="hero"
                        />
                    </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

// D and D application
export class AttackSection extends React.Component {
    render() {
        var Result = this.props.DidHit;

        return (
            <div className="bg-dark" style={{height: '440px'}}>
                <Row>
                    <Col className="my-4 mx-5 d-flex justify-content-center">
                        <div style={thumbnail}>
                            <img src="../static/images/acicon.png" alt="shield"/>
                            <div>
                                <h4 className="AC-Icon-text">
                                    {this.props.AC}
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col className="my-4 mx-5 d-flex justify-content-center">
                            <div style={thumbnail}>
                                <img src="../static/images/hitadjust.png" alt="icon"/>
                                <div>
                                    <h4 className="HitAdj-Icon-text">
                                        {this.props.HitAdj}
                                    </h4>
                                </div>
                            </div>  
                    </Col>
                </Row>
                <div className="d-flex justify-content-center my-5">
                    <Button  onClick={this.props.AttackRoll}>
                        {this.props.RollTitle}
                    </Button>
                </div>
                <div className="text-center text-white">
                    <h2>Attack Result:</h2>
                    <p className="mt-2 p-0">
                        attack roll: 
                        {this.props.Roll === 'Crit Strike' &&
                            <span className="text-danger font-italic">
                                {this.props.Roll}!
                            </span> || 
                            <span>
                                {this.props.Roll}
                            </span>
                        }
                    </p>
                </div>
                <div className="my-2 p-0">
                    {Result === "Hit" &&
                        <h2 className="alert-success w-100 text-center mt-3">
                            {Result}
                        </h2> ||
                        <h2 className="alert-danger w-100 text-center mt-3">
                            {Result}
                        </h2>
                    }
                </div>
            </div>
        );
    }
}

//D and D application
export class NameForm extends React.Component {
    render() {
        return (
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                    <Label className="mr-sm-2">Name:</Label>
                    <input
                        type="text"
                        maxLength="20"
                        value={this.props.value}
                        onChange={this.props.NameChange}
                        //Prevent enter key submit
                        onKeyPress={event => {
                            if (event.which === 13 /* Enter */) {
                            event.preventDefault();
                            }
                        }}
                    />
                </FormGroup>
                <Button  
                    className="mb-2"
                    onClick={this.props.NameSubmit}>
                        Change Name
                </Button>
            </Form> 
        );
    }
}

