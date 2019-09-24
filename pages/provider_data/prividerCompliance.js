import React from 'react'
import { Row, Col, Table } from 'reactstrap'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames'

var data2 = require('./Compliance.json');

class DateCheck extends React.Component {
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


function ProviderDropdown() {
    return (
        <DropdownMenu
            modifiers={{
                setMaxHeight: {
                    enabled: true,
                    order: 890,
                    fn: (data) => {
                        return {
                            ...data,
                            styles: {
                            ...data.styles,
                            overflow: 'auto',
                            maxHeight: 200  ,
                            },
                        };
                    },
                },
            }}
        >
            {data2.sort((a, b) => {
                    const One = a.company.toUpperCase();
                    const Two = b.company.toUpperCase();
                
                    return (One < Two) ? -1 : (One > Two) ? 1 : 0;
                })
                .map(TP => (
                    <DropdownItem 
                        className="Btn" 
                        key={TP.company} 
                        onClick={this.selectProvider}
                        value={TP.company}
                    >
                        {TP.company}
                    </DropdownItem>
                ))
            }
        </DropdownMenu>
    );
}


class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            value: 'ACCEL',
            activeTab: '1'
        };
        this.selectTab = this.selectTab.bind(this);
        this.selectProvider = this.selectProvider.bind(this);
        this.clickDropdown = this.clickDropdown.bind(this);
        this.ProviderDropdown = ProviderDropdown.bind(this);
        
    }
  
    clickDropdown() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    selectProvider(e) {
        this.setState({value: event.target.value});
    }

    selectTab(tab) {
        if (this.state.actiTab !== tab) {
            this.setState({activeTab: tab});
        }
    }

    render() {
        const test = data2.filter(data2 => data2.company === this.state.value);
        const test2 = test[0];

        return (
            <div >
                <h1 className="mt-5 text-center">Provider Compliance Report</h1>
                <h3 className="mt-2 mb-5 text-center">Report Date: 9/22/2019</h3>
                <h5>Dates in <span className="bg-warning text-white">Yellow</span>&nbsp;
                    are about to expire.</h5>
                <h5 className="mb-5">Dates in  <span className="bg-danger text-white">Red</span>
                    &nbsp;need immediate attention.
                </h5>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.clickDropdown}>
                    <DropdownToggle caret>
                        Provider List
                    </DropdownToggle>
                    {this.ProviderDropdown()}
                </Dropdown>
                <div className="mt-5 mx-5">
                    <div className="bg-light">
                    <p className="pt-4 pl-4">Provider: {this.state.value}</p>
                    <Row className="ml-3">
                        <Col>
                            <p className="ml-2">Address:</p>
                            <p className="ml-3 my-0">{test2.address1}</p>
                            <p className="ml-3 my-0">{test2.address2}</p>
                        </Col>
                        <Col>
                            <p>Contact info:</p>
                            <p className="ml-2 my-0"><b>Phone:</b> {test2.phone}</p>
                            <p className="ml-2 my-0"><b>Email:</b> {test2.email}</p>
                        </Col>
                    </Row>
                    
                    <p className="pt-4 pl-4">Insurance:</p>
                    <Row xs="auto" className="p-0">
                        {
                            test2.insurance.map(insurance => (
                                <Col className="ml-5" key={insurance.type}>
                                    <p className="ml-5">Type: {insurance.type}</p>
                                    <p className="ml-5">Company: {insurance.company}</p>
                                    <p className="ml-5">Exp Date: <DateCheck Date={insurance.end} /></p>
                                </Col>
                            ))
                        }
                    </Row>
                    </div>
                    <div>
                        <Nav tabs className="mr-5 mt-3">
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.selectTab('1'); }} style={{cursor: "pointer"}}
                                >
                                    Drivers
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.selectTab('2'); }} style={{cursor: "pointer"}}
                                >
                                Vehicles
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <h2 className="my-5">Drivers:</h2>
                                {test2.drivers.map(driver => (
                                    <div>
                                        <Row xs="auto" className="p-0" key={driver.id}>
                                            <div className="d-inline-block h-25 text-center mx-5">
                                                <h3>{driver.name}</h3>
                                            </div>
                                            <div className="d-inline-block h-25 text-center mx-5 pt-2">
                                                <p>License State: {driver.license.state}</p>
                                            </div>
                                            <div className="d-inline-block h-25 text-center mx-5 pt-2">
                                                <p>License Exp: &nbsp;
                                                    <DateCheck Date={driver.license.exp} />
                                                </p>
                                            </div>
                                        </Row>
                                        <Row className="ml-5">
                                            <Col className="justify-content-center">
                                                <p>Training:</p>
                                                <Table bordered className="w-75">
                                                    <thead>
                                                        <tr className="bg-light">
                                                            <th>Type:</th>
                                                            <th>Company:</th>
                                                            <th>Exp date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {driver.training.map(tr => (
                                                            <tr key={tr.type}>
                                                                <td>Type: {tr.type}: </td>
                                                                <td>{tr.company}</td>
                                                                <td>
                                                                    <DateCheck Date = {tr.end} />  
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </Table>
                                            </Col>
                                            <Col >
                                                <p>Screening:</p>
                                                <Table bordered className="w-75">
                                                    <thead>
                                                        <tr className="bg-light">
                                                            <th>Type:</th>
                                                            <th>Exp date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {driver.screenings.map(scr => (
                                                            <tr key={scr.type}>
                                                                <td>{scr.type}</td>
                                                                <td>
                                                                    <DateCheck Date = {scr.end} />
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </TabPane>
                            <TabPane tabId="2">
                                <h2 className="my-5">Vehicles</h2>
                                {test2.vehicles.map(vehicle => (
                                    <div>

                                        <Row xs="auto" className="p-0" key={vehicle.id}>
                                            <div className="d-inline-block h-25 text-center mx-5">
                                                <h3>Number: {vehicle.number}</h3>
                                            </div>
                                            <div className="d-inline-block h-25 text-center mx-5 pt-2">
                                                <p>Vehicle brand: {vehicle.brand}</p>
                                            </div>
                                            <div className="d-inline-block h-25 text-center mx-5 pt-2">
                                                <p>Vehicle type: {vehicle.type}</p>
                                            </div>
                                            <div className="d-inline-block h-25 text-center mx-5 pt-2">
                                                <p>Year: {vehicle.year}</p>
                                            </div>
                                        </Row>
                                        <Row className="justify-content-center">
                                            <Col>
                                            <div className="d-inline-block h-25 m-3 ">
                                                <h4>Registration: <small>{vehicle.reg}</small></h4>
                                                <p>Exp date: <DateCheck Date={vehicle.regexp} /></p>
                                            </div>
                                            </Col>
                                            <Col>
                                            <div className="d-inline-block h-25 m-3 ">
                                                <h4>Inspection:</h4>
                                                <p>Exp date: <DateCheck Date={vehicle.inspection.end} /></p>
                                            </div>
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </div>
        );
    }
}

export default Example;