import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, 
    TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Table 
} from 'reactstrap'
import classnames from 'classnames'
import { DateCheck, TplistHeaderRow } from '../customComponents'
import { ComplianceTable } from './providerStats'
import { TplistHeader, Pointer } from '../jsxstyles'

var tpdata = require('./company.json');
var vehdata = require('./vehicle.json');
var drdata = require('./driver.json');


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
            {tpdata.map(TP => (
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
        const drfilter = drdata.filter(drdata => drdata.company === this.state.value);
        const vehfilter = vehdata.filter(vehdata => vehdata.company === this.state.value);

        return (
            <div>
                <div className="my-3 text-center">
                    <h1>Provider Compliance Report</h1>
                    <h3>Report Date: 9/22/2019</h3>
                </div>
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
                        <p className="pt-4 pl-4"><b>Provider:</b> {this.state.value}</p>
                        <Row className="ml-3">
                            <Col>
                                <p className="ml-2"><b>Address:</b></p>
                                <p className="ml-4 mt-0 mb-0">{tp.address1}</p>
                                <p className="ml-4 mt-0 mb-0">{tp.address2}</p>
                            </Col>
                            <Col>
                                <p className="ml-2"><b>Contact info:</b></p>
                                <p className="ml-4 mt-0 mb-0"><b>Phone:</b> {tp.phone}</p>
                                <p className="ml-4 mt-0 mb-0"><b>Email:</b> {tp.email}</p>
                            </Col>
                        </Row>
                        <p className="pt-4 pl-4"><b>Insurance:</b></p>
                        <Row xs="auto" className="p-0 mr-4">
                            <Col className="ml-5">
                                <p className="ml-5">Type: {tp.gl.type}</p>
                                <p className="ml-5">Company: {tp.gl.company}</p>
                                <p className="ml-5">Exp Date: <DateCheck Date={tp.gl.end} /></p>
                            </Col>
                            <Col className="ml-5">
                                <p className="ml-5">Type: {tp.veh.type}</p>
                                <p className="ml-5">Company: {tp.veh.company}</p>
                                <p className="ml-5">Exp Date: <DateCheck Date={tp.veh.end} /></p>
                            </Col>
                            <Col className="ml-5">
                                <p className="ml-5">Type: {tp.wc.type}</p>
                                <p className="ml-5">Company: {tp.wc.company}</p>
                                <p className="ml-5">Exp Date: <DateCheck Date={tp.wc.end} /></p>
                            </Col>  
                        </Row>
                    </div>
                    <div className="mt-3">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.selectTab('1'); }} style={Pointer}
                                >
                                    Drivers
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.selectTab('2'); }} style={Pointer}
                                >
                                    Vehicles
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <h2 className="my-3">Drivers:</h2>
                                {drfilter.map(driver => (
                                    <div key={driver.id}>
                                        <TplistHeaderRow>
                                            <Col style={TplistHeader.Title}>
                                                <h3>{driver.name}</h3>
                                            </Col>
                                            <Col style={TplistHeader.Title}>
                                                <p style={TplistHeader.Value}>
                                                    License State: {driver.license.state}
                                                </p>
                                            </Col>
                                            <Col style={TplistHeader.Title}>
                                                <p style={TplistHeader.Value}>License Exp: &nbsp;
                                                    <DateCheck Date={driver.license.exp} />
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
                                                        <tr>
                                                            <td>{driver.firstaid.type}</td>
                                                            <td>{driver.firstaid.company}</td>
                                                            <td><DateCheck Date={driver.firstaid.end}/></td>
                                                        </tr>
                                                        <tr>
                                                            <td>{driver.cpr.type}</td>
                                                            <td>{driver.cpr.company}</td>
                                                            <td><DateCheck Date={driver.cpr.end}/></td>
                                                        </tr>
                                                        <tr>
                                                            <td>{driver.defdriv.type}</td>
                                                            <td>{driver.defdriv.company}</td>
                                                            <td><DateCheck Date={driver.defdriv.end}/></td>
                                                        </tr>
                                                        <tr>
                                                            <td>{driver.pass.type}</td>
                                                            <td>{driver.pass.company}</td>
                                                            <td><DateCheck Date={driver.pass.end}/></td>
                                                        </tr>
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
                                                        <tr>
                                                            <td>{driver.drugscreen.type}</td>
                                                            <td><DateCheck Date={driver.drugscreen.end}/></td>
                                                        </tr>
                                                        <tr>
                                                            <td>{driver.background.type}</td>
                                                            <td><DateCheck Date={driver.background.end}/></td>
                                                        </tr>
                                                        <tr>
                                                            <td>{driver.mvr.type}</td>
                                                            <td><DateCheck Date={driver.mvr.end}/></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </TabPane>
                            <TabPane tabId="2">
                                <h2 className="my-3">Vehicles:</h2>
                                {vehfilter.map(vehicle => (
                                    <div key={vehicle.id}>
                                        <TplistHeaderRow>
                                            <Col style={TplistHeader.Title}>
                                                <h3>Number: {vehicle.number}</h3>
                                            </Col>
                                            <Col style={TplistHeader.Title}>
                                                <p style={TplistHeader.Value}>
                                                    Vehicle brand: {vehicle.brand}
                                                </p>
                                            </Col>
                                            <Col style={TplistHeader.Title}>
                                                <p style={TplistHeader.Value}>
                                                    Vehicle type: {vehicle.type}
                                                </p>
                                            </Col>
                                            <Col style={TplistHeader.Title}>
                                                <p style={TplistHeader.Value}>
                                                    Year: {vehicle.year}
                                                </p>
                                            </Col>
                                        </TplistHeaderRow>
                                        <Row className="ml-5 my-2">
                                            <Col>
                                                <div className="d-inline-block h-25 m-3">
                                                    <h4>Registration State:&nbsp; 
                                                        <small>{vehicle.registration.state}</small>
                                                    </h4>
                                                    <p>Exp date: <DateCheck Date={vehicle.registration.end} /></p>
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