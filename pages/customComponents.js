/* **************** 
*   Imports       * 
******************/

import React from 'react'
import { 
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, 
    Row, Col, Form, FormGroup, Label, Input, Button, Collapse, 
    Table, Jumbotron 
} from 'reactstrap'

import { HomeCardStyle, DandDStyle, ImageStyles
} from './jsxstyles'


/* *********************************
*   Export styled components       * 
***********************************/

export function NewTabLink(props){
    return (
        <a className={props.Style}
            href={props.Link}
            target="_blank" 
            rel="noopener noreferrer"
            title={props.Title}>
                {props.children}
        </a>
    );
}

//used in home page, attacksim
export function CenterFlexWrapDiv(props) {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {props.children}
        </div>
    )
}

//used in tvpost, tvpage
export function LeftFlexWrapDiv(props) {
    return (
        <div className="d-flex flex-wrap justify-content-left">
            {props.children}
        </div>
    );
}

export function TvPostInfoLabel(props) {
    return (
    <td className="h2 text-left w-25 m-0 p-2">
        {props.children}
    </td>
    );
}

export function TvPostInfoValue(props){
    return (
        <td className="text-left m-0 p-2">
            <small>{props.children}</small>
        </td>
    );
}

//used in provider compliance
export function TplistHeaderRow (props) {
    return (
        <Row className="p-0 bg-secondary text-white rounded-lg">
            {props.children}
        </Row>
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
                <Card style={HomeCardStyle.Card}>
                    <CardTitle style={HomeCardStyle.Title}>
                        {this.props.Title}
                    </CardTitle>
                    <CardImg top 
                        style={ImageStyles.HomeCard} 
                        src={this.props.Image} 
                        alt="Card image cap" 
                    />
                    <CardBody>
                        <CardSubtitle>{this.props.Subtitle}</CardSubtitle>
                        <CardText style={{height: '80px'}}>
                            {this.props.Description}
                        </CardText>
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
                    <h1 className="display-3 text-center">
                        {this.props.Title}
                    </h1>
                    <p className={this.props.Caption1Style}>
                        {this.props.Caption1}
                    </p>
                    <hr className="my-2" />
                    <p className={this.props.Caption2Style}>
                        {this.props.Caption2}
                    </p>
                </Jumbotron>
            );
        } else {
            return (
                <Jumbotron>
                    <h1 className="display-3 text-center">{this.props.Title}</h1>
                    <div className="container-fluid text-center">
                        <img 
                            src="../static/images/avatar.jpg" 
                            style={ImageStyles.HomeAvatar} alt="avatar"
                        />
                    </div>
                    <p className={this.props.Caption1Style}>
                        {this.props.Caption1}
                    </p>
                    <hr className="my-2" />
                    <p className={this.props.Caption2Style}>
                        {this.props.Caption2}<br />
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
                <div className="py-2">
                    <Card className={this.props.Class}>
                        <Row>
                            <Col >
                                <CardImg 
                                    style={ImageStyles.About} 
                                    src={this.props.ImgUrl} 
                                    alt="Card image cap" 
                                />
                            </Col>
                            <Col>
                                <CardTitle className="mt-5">
                                    <h1>{this.props.Title}</h1>
                                </CardTitle>
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
                <div className="py-2">
                    <Card className={this.props.Class}>
                        <Row>
                            <Col >
                            <CardTitle className="mt-5">
                                <h1>{this.props.Title}</h1>
                            </CardTitle>
                            <CardBody>
                                    {this.props.Description}
                            </CardBody>
                            </Col>
                            <Col >
                                <CardImg 
                                    style={ImageStyles.About} 
                                    src={this.props.ImgUrl} 
                                    alt="Card image cap" 
                                />
                            </Col>
                        </Row>
                    </Card>
                </div>
            );
        };
    }
}

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

//used in providerdata
export class DataFilter extends React.Component {
    render() {
        let Fone = this.props.Filter1;
        let Vone = this.props.Value1;
        let Ftwo = this.props.Filter2;
        let Vtwo = this.props.Value2;
        let Data = this.props.Info;
        
        return (
            <span>{Data.filter(Data => Data[Fone] === Vone && Data[Ftwo] === Vtwo).length}</span>
        );
    }
}

//used in providerCompliance
export class DateCheck extends React.Component {
    render() {
        var date = this.props.Date;
        if (date < "2019-09-22") {
            return (
                <span className="bg-danger text-white">{date}</span>
            )
        } else if (date < "2019-10-22" && date > "2019-09-22") {
            return (
                <span className="bg-warning text-white">{date}</span>
            )
        } else {
            return (
                <span>{date}</span>
            );
        }
    }
}

//D and D application
export class CharacterSheet extends React.Component {
    render() {
        function DandDTableLabel(props) {
            return (
                <td className="text-muted text-left h4">
                    {props.children}
                </td>
            );
        }

        function DandDTableValue(props) {
            return (
                <td className="text-white text-left h4">
                    {props.children}
                </td>
            );
        }
        
        return (
            <div >
                <Row >
                    <Col sm={{ size: 'auto', offset: 0 }}>
                        <Table borderless  className="">
                            <tbody>
                                <tr>
                                    <DandDTableLabel>Strength:</DandDTableLabel>
                                    <DandDTableValue>{this.props.Strength}</DandDTableValue>
                                </tr>
                                <tr>
                                    <DandDTableLabel>Constitution:</DandDTableLabel>
                                    <DandDTableValue>{this.props.Constitution}</DandDTableValue>
                                </tr>
                                <tr>
                                    <DandDTableLabel>Dexterity:</DandDTableLabel>
                                    <DandDTableValue>{this.props.Dexterity}</DandDTableValue>
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
                                    <DandDTableValue>{this.props.Damage}</DandDTableValue>
                                </tr>
                            </tbody>
                        </Table>  
                    </Col>
                    <Col sm={{ size: 'auto', offset: 2 }}>
                        <div className="text-center ">
                            <img  style={DandDStyle.Avatar} 
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
    constructor(props) {
        super(props);
        this.RollResult = this.RollResult.bind(this);
        this.AttackBanner = this.AttackBanner.bind(this);
        this.AttackButton = this.AttackButton.bind(this);
    }
    
    RollResult() {
        if (this.props.Roll === 'Crit Strike') {
            return (
                <span className="text-danger font-italic">
                    {this.props.Roll}!
                </span>
            );
        } else {
            return (
                <span>{this.props.Roll}</span>
            );
        }
    }

    AttackBanner() {
        const Result = this.props.DidHit;
        if (Result === "Hit") {
            return (
                <h2 className="alert alert-success py-2 text-center">{Result}</h2>
            );
        } if (Result === "Miss") {
            return (
                <h2 className="alert alert-danger py-2 text-center">{Result}</h2>
            );
        } else {
            return (
                <h6 className="text-white text-center">(Attack Result displayed here)</h6>
            );
        }
    }
    
    AttackButton() {
        if (this.props.AttackTurn === true) {
            return (
                <Button  
                    onMouseDown={this.props.AttackRoll} 
                    onMouseUp = {this.props.NextTurn}>
                        {this.props.RollTitle}
                </Button>
            )
        } else {
            return (
                <h4 className="text-white">Not your turn</h4>
            )
        };
    }

    render() {
        return (
            <div className="bg-dark">
                <Row>
                    <Col className="my-4 mx-5 d-flex justify-content-center">
                        <div style={DandDStyle.thumbnail}>
                            <img src="../static/images/acicon.png" alt="shield"/>
                            <div>
                                <h4 className="AC-Icon-text">
                                    {this.props.AC}
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col className="my-4 mx-5 d-flex justify-content-center">
                            <div style={DandDStyle.thumbnail}>
                                <img src="../static/images/hitadjust.png" alt="icon"/>
                                <div>
                                    <h4 className="HitAdj-Icon-text">
                                        {this.props.HitAdj}
                                    </h4>
                                </div>
                            </div>  
                    </Col>
                    <style jsx>{`
                        .AC-Icon-text {
                            position: absolute;
                            top: 42px;
                            left: 50px;
                            transform: translate(-50%, -50%);
                        }
                        .HitAdj-Icon-text {
                            position: absolute;
                            top: 48%;
                            left: 50px;
                            transform: translate(-50%, -50%);
                        }    
                    `}
                    </style>
                </Row>
                <div className="d-flex justify-content-center my-4">
                    {this.AttackButton()}
                </div>
                <div className="text-center text-white">
                    <h2>Attack Result:</h2>
                    <p className="mt-2 p-0">
                        attack roll: &nbsp; {this.RollResult()}</p>
                </div>
                <div>
                    {this.AttackBanner()}
                </div>
            </div>
        );
    }
}

//D and D application
export class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {collapse: false};
        this.toggle = this.toggle.bind(this);
    }   
    
    toggle() {
        this.setState(state => ({collapse: !state.collapse}));
    }

    render() {
        return (
            <Form >
                <FormGroup className="mb-2 mr-sm-2 mb-sm-2 d-flex flex-wrap">
                    <div className="m-2">
                        <Label>
                            <Button 
                                className="btn text-white" 
                                onClick={this.toggle}>
                                    Change Name:
                            </Button>
                        </Label>
                    </div>
                    <Collapse isOpen={this.state.collapse}>
                        <div className="d-flex flex-wrap">
                            <div className="m-2">    
                                <Input
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
                            </div>
                            <div className="m-2">
                                <Button  
                                    onClick={this.props.NameSubmit}>
                                        Submit
                                </Button>
                            </div>
                        </div>
                    </Collapse>
                </FormGroup>
            </Form> 
        );
    }
}
