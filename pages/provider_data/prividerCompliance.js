import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, 
    Row, Col, Table } from 'reactstrap'
import { DateCheck, TplistHeaderRow, CustomTabs, InfoField } from '../customComponents'
import { ComplianceTable } from './providerStats'
import { Tplist } from '../jsxstyles'

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

function CompanyTab(props) {
    let TP = props.Data;
    return (
        <div className="bg-light shadow">
            <p className="pt-4 pl-4"><b>Provider:</b> {TP.company}</p>
            <Row className="ml-3">
                <Col className="ml-2">
                    <p><b>Address:</b></p>
                    <InfoField>{TP.address1}</InfoField>
                    <InfoField>{TP.address2}</InfoField>
                </Col>
                <Col>
                    <p className="ml-2"><b>Contact info:</b></p>
                    <InfoField><b>Phone:</b> {TP.phone}</InfoField>
                    <InfoField><b>Email:</b> {TP.email}</InfoField>
                </Col>
            </Row>
            <p className="pt-4 pl-4"><b>Insurance:</b></p>
            <Row className=" ml-3">
                <Col className="ml-2 mb-4">
                    <InfoField><b>Type:</b> {TP.gl.type}</InfoField>
                    <InfoField><b>Company:</b> {TP.gl.company}</InfoField>
                    <InfoField><b>Exp Date:</b> <DateCheck Date={TP.gl.end} /></InfoField>
                </Col>
                <Col className="ml-2">
                    <InfoField><b>Type:</b> {TP.veh.type}</InfoField>
                    <InfoField><b>Company:</b> {TP.veh.company}</InfoField>
                    <InfoField><b>Exp Date:</b> <DateCheck Date={TP.veh.end} /></InfoField>
                </Col>
                <Col className="ml-2">
                    <InfoField><b>Type:</b> {TP.wc.type}</InfoField>
                    <InfoField><b>Company:</b> {TP.wc.company}</InfoField>
                    <InfoField><b>Exp Date:</b> <DateCheck Date={TP.wc.end} /></InfoField>
                </Col>  
            </Row>
        </div>
    );
}

function DriverTab(props) {
    let Driver = props.Data;

    return (
        <div>
            {Driver.map(driver => (
                <div key={driver.id}>
                    <TplistHeaderRow>
                        <Col style={Tplist.Title}>
                            <h3>{driver.name}</h3>
                        </Col>
                        <Col style={Tplist.Title}>
                            <p style={Tplist.Value}>
                                License State: {driver.license.state}
                            </p>
                        </Col>
                        <Col style={Tplist.Title}>
                            <p style={Tplist.Value}>License Exp: &nbsp;
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
                        <Col>
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
        </div>
    );
}

function VehicleTab(props) {
    let Vehicle = props.Data;
    
    return (
        <div>
            {Vehicle.map(vehicle => (
                <div key={vehicle.id}>
                    <TplistHeaderRow>
                        <Col style={Tplist.Title}>
                            <h3>Number: {vehicle.number}</h3>
                        </Col>
                        <Col style={Tplist.Title}>
                            <p style={Tplist.Value}>
                                Vehicle brand: {vehicle.brand}
                            </p>
                        </Col>
                        <Col style={Tplist.Title}>
                            <p style={Tplist.Value}>
                                Vehicle type: {vehicle.type}
                            </p>
                        </Col>
                        <Col style={Tplist.Title}>
                            <p style={Tplist.Value}>
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
        </div>
    );
}

class ProviderCompliance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            value: 'ACCEL',
        };
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
                <div>
                    <CompanyTab Data = {tp} />
                    <div className="my-3">
                        <CustomTabs
                            Tab1Name = 'Drivers'
                            Tab2Name = 'Vehicles'
                            Tab1Content = {
                                <DriverTab Data = {drfilter} />
                            }
                            Tab2Content = {
                                <VehicleTab Data = {vehfilter} />
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProviderCompliance;