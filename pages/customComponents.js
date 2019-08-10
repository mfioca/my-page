/* **************** 
*   Imports       * 
******************/

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col,  Button } from 'reactstrap'
import {AboutImg, CardImageStyle } from './jsxstyles'


/* *********************** 
*   Export Classes       * 
**************************/

//used in about page
export class AboutMedia extends React.Component{
    render() {
        if (this.props.Align === "Right") {
            return (
                <div className="p-3">
                    <Card className={this.props.Class}>
                        <Row>
                            <Col >
                            <CardImg style={AboutImg} src={this.props.ImgUrl} alt="Card image cap" />
                            </Col>
                        <Col >
                        <CardTitle><h1>{this.props.Title}</h1></CardTitle>
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
                        <CardTitle><h1>{this.props.Title}</h1></CardTitle>
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
export class ThreeColumnCard extends React.Component{
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
export class HomeCard extends React.Component{
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
                                className="Header"
                                target="_blank" 
                                rel="noopener noreferrer">
                                {this.props.ButtonTitle}
                            </a>
                        </Button>
                    </CardBody>
                </Card> 
            </div>
        );
    }
};

