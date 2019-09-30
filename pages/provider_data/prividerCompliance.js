import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, 
    TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Table 
} from 'reactstrap'
import classnames from 'classnames'
import { DateCheck, TplistHeaderRow } from '../customComponents'
import { ComplianceTable } from './providerStats'
import { TplistHeader } from '../jsxstyles'

var tpdata = require('./Compliance.json');


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
                            textAlign: 'center',
                            marginLeft: '-15px'
                            },
                        };
                    },
                },
            }}
        >
            {tpdata.sort((a, b) => {
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


class ProviderCompliance extends React.Component {
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
        const tpfilter = tpdata.filter(tpdata => tpdata.company === this.state.value);
        const tp = tpfilter[0];

        return (
            <div>
                <h1 className="mt-3 text-center">Provider Compliance Report</h1>
                <h3 className="my-3 text-center">Report Date: 9/22/2019</h3>
                <ComplianceTable />
                <h1 className="mt-3 text-center">Compliance by Provider</h1>
                <Dropdown isOpen={this.state.dropdownOpen} 
                    toggle={this.clickDropdown}
                    className="d-flex ml-5 my-5 justify-content-center"
                >
                    <DropdownToggle caret>
                        Provider List
                    </DropdownToggle>
                    {this.ProviderDropdown()}
                </Dropdown>
                <div className="mt-5 ml-5">
                    <h5>Dates in <span className="bg-warning text-white">Yellow</span>&nbsp;
                        are about to expire.</h5>
                    <h5 className="mb-5">Dates in  <span className="bg-danger text-white">Red</span>
                        &nbsp;need immediate attention.
                    </h5>
                </div>
                <div className="mt-5 mx-5">
                    <div className="bg-light shadow">
                    <p className="pt-4 pl-4">Provider: {this.state.value}</p>
                    <Row className="ml-3">
                        <Col>
                            <p className="ml-2">Address:</p>
                            <p className="ml-3 my-0">{tp.address1}</p>
                            <p className="ml-3 my-0">{tp.address2}</p>
                        </Col>
                        <Col className="mr-4">
                            <p>Contact info:</p>
                            <p className="ml-2 my-0"><b>Phone:</b> {tp.phone}</p>
                            <p className="ml-2 my-0"><b>Email:</b> {tp.email}</p>
                        </Col>
                    </Row>
                    <p className="pt-4 pl-4">Insurance:</p>
                    <Row xs="auto" className="p-0 mr-4">
                        {
                            tp.insurance.map(insurance => (
                                <Col className="ml-5" key={insurance.type}>
                                    <p className="ml-5">Type: {insurance.type}</p>
                                    <p className="ml-5">Company: {insurance.company}</p>
                                    <p className="ml-5">Exp Date: <DateCheck Date={insurance.end} /></p>
                                </Col>
                            ))
                        }
                    </Row>
                    </div>
                    <div className="mt-3">
                        <Nav tabs>
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
                                <h2 className="my-3">Drivers:</h2>
                                {tp.drivers.map(dr => (
                                    <div key={dr.id}>
                                        <TplistHeaderRow>
                                            <Col style={TplistHeader.Title}>
                                                <h3>{dr.name}</h3>
                                            </Col>
                                            <Col style={TplistHeader.Title}>
                                                <p style={TplistHeader.Value}>License State: {dr.license.state}</p>
                                            </Col>
                                            <Col style={TplistHeader.Title}>
                                                <p style={TplistHeader.Value}>License Exp: &nbsp;
                                                    <DateCheck Date={dr.license.exp} />
                                                </p>
                                            </Col>
                                        </TplistHeaderRow>
                                        <Row className="ml-5 my-4">
                                            <Col>
                                                <Table bordered className="w-75 shadow-sm">
                                                    <thead>
                                                        <tr className="bg-light">
                                                            <th>Training</th>
                                                            <th>Company</th>
                                                            <th>Exp date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {dr.training.map(tr => (
                                                            <tr key={tr.type}>
                                                                <td>{tr.type}</td>
                                                                <td>{tr.company}</td>
                                                                <td>
                                                                    <DateCheck Date ={tr.end} />  
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </Table>
                                            </Col>
                                            <Col >
                                                <Table bordered className="w-75 shadow-sm">
                                                    <thead>
                                                        <tr className="bg-light">
                                                            <th>Screening</th>
                                                            <th>Exp date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {dr.screenings.map(scr => (
                                                            <tr key={scr.type}>
                                                                <td>{scr.type}</td>
                                                                <td>
                                                                    <DateCheck Date ={scr.end} />
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
                                <h2 className="my-3">Vehicles:</h2>
                                {tp.vehicles.map(vehicle => (
                                    <div key={vehicle.id}>
                                        <TplistHeaderRow>
                                            <Col style={TplistHeader.Title}>
                                                <h3>Number: {vehicle.number}</h3>
                                            </Col>
                                            <Col style={TplistHeader.Title}>
                                                <p style={TplistHeader.Value}>Vehicle brand: {vehicle.brand}</p>
                                            </Col>
                                            <Col style={TplistHeader.Title}>
                                                <p style={TplistHeader.Value}>Vehicle type: {vehicle.type}</p>
                                            </Col>
                                            <Col style={TplistHeader.Title}>
                                                <p style={TplistHeader.Value}>Year: {vehicle.year}</p>
                                            </Col>
                                        </TplistHeaderRow>
                                        <Row className="ml-5 my-2">
                                            <Col>
                                            <div className="d-inline-block h-25 m-3">
                                                <h4>Registration: <small>{vehicle.reg}</small></h4>
                                                <p>Exp date: <DateCheck Date={vehicle.regexp} /></p>
                                            </div>
                                            </Col>
                                            <Col >
                                            <div className="d-inline-block h-25 m-3">
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

export default ProviderCompliance;