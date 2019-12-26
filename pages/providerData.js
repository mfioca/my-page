import React from 'react'
import Layout from '../components/layout.js'
import { CustomJumbo, CustomTabs, DateCheck, TplistHeaderRow, InfoField, NetworkDataFilter,
    ComplDataFilter, PercentCalc } from '../components/customComponents'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, 
    Row, Col, Table } from 'reactstrap'
import NetworkList from './provider_data/networkTable.js'
import { Tplist } from '../components/jsxstyles'


var tpdata = require('./provider_data/company.json');
var vehdata = require('./provider_data/vehicle.json');
var drdata = require('./provider_data/driver.json');
var networkdata = require('./provider_data/network.json');

/* ***************************** 
*   Components for class       * 
*******************************/

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

function Networkinfo() {
    return (
        <div>
            <h1 className="mt-5 text-center">Network Summary</h1>
            <h3 className="mt-2 mb-5 text-center">Report Date: 09/22/2019</h3>
            <Row>
                <Col className="px-5 pt-3">
                    <Table striped bordered size="sm" className="shadow-sm">
                        <tbody>
                            <tr>
                                <th colSpan="2">All Regions</th>
                            </tr>
                            <tr>
                            <th>Total Providers:</th>
                                <th>{networkdata.length}</th></tr>
                            <tr>
                                <td>Providers with Ambulatory:</td>
                                <td><NetworkDataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Amb'
                                        Value1 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Wheelchair:</td>
                                <td><NetworkDataFilter
                                        Info = {networkdata}
                                        Filter1 = 'WCHR'
                                        Value1 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Stretcher:</td>
                                <td><NetworkDataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Stretcher'
                                        Value1 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <th colSpan="2">Central</th>
                            </tr>
                            <tr>
                                <th>Total Providers:</th>
                                <td><NetworkDataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'Central'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Ambulatory:</td>
                                <td><NetworkDataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'Central'
                                        Filter2 = 'Amb'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Wheelchair:</td>
                                <td><NetworkDataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'Central'
                                        Filter2 = 'WCHR'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Stretcher:</td>
                                <td><NetworkDataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'Central'
                                        Filter2 = 'Stretcher'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                            
                        </tbody>
                        <style jsx>{`
                            {
                                text-align: center;
                                width: 70px;
                            }
                            th {
                                aligh: center,
                            }
                        `}
                        </style>
                    </Table>
                </Col>
                <Col className="px-5 pt-3">
                    <Table striped bordered size="sm" className="shadow-sm">
                        <tbody>
                            <tr>
                                <th colSpan="2">SouthWest</th>
                            </tr>
                            <tr>
                                <th>Total Providers:</th>
                                <td><NetworkDataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'SouthWest'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Ambulatory:</td>
                                <td><NetworkDataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'SouthWest'
                                        Filter2 = 'Amb'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Wheelchair:</td>
                                <td><NetworkDataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'SouthWest'
                                        Filter2 = 'WCHR'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Stretcher:</td>
                                <td><NetworkDataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'SouthWest'
                                        Filter2 = 'Stretcher'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <th colSpan="2">East</th>
                            </tr>
                            <tr>
                                <th>Total Providers:</th>
                                <td><NetworkDataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'East'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Ambulatory:</td>
                                <td><NetworkDataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'East'
                                        Filter2 = 'Amb'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Wheelchair:</td>
                                <td><NetworkDataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'East'
                                        Filter2 = 'WCHR'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Stretcher:</td>
                                <td><NetworkDataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'East'
                                        Filter2 = 'Stretcher'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                        </tbody>
                        <style jsx>{`
                            {
                                text-align: center;
                                width: 70px;
                            }
                            th {
                                aligh: center,
                            }
                        `}
                        </style>
                    </Table>
                </Col>
            </Row>
        </div>  
    );
}

function ComplianceTable() {
    const providers = tpdata.filter(tpdata => tpdata.company).length;
    const drivers = drdata.filter(drdata => drdata.id).length;
    const vehicles = vehdata.filter(vehdata => vehdata.id).length;
    const reportdate = "2019-09-22";

    return (
        <div>
            <h2 className="text-center my-5">Compliance Summary</h2>
            <Row>
                <Col>
                    <Table striped bordered size="sm" className="shadow-sm">
                        <tbody>
                            <tr>
                                <th colSpan="2" className="text-center">Insurance</th>
                            </tr>
                            <tr>
                                <th>Number of Providers</th>
                                <td>{providers}</td>
                            </tr>
                            <tr>
                                <td>Expired GL policies</td>
                                <td>
                                    <ComplDataFilter
                                        Info = {tpdata}
                                        Filter1 = 'gl'
                                        Filter1child = 'end'
                                        Value1 = {reportdate} 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-right">% non-compliant GL policies</td>
                                <td>
                                    <PercentCalc
                                        Info = {tpdata}
                                        Filter1 = 'gl'
                                        Filter1child = 'end'
                                        Value1 = {reportdate}
                                        Divider = {providers}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Expired Vehicle policies</td>
                                <td>
                                    <ComplDataFilter
                                        Info = {tpdata}
                                        Filter1 = 'veh'
                                        Filter1child = 'end'
                                        Value1 = {reportdate} 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-right">% non-compliant Vehicle policies</td>
                                <td>
                                    <PercentCalc
                                        Info = {tpdata}
                                        Filter1 = 'veh'
                                        Filter1child = 'end'
                                        Value1 = {reportdate}
                                        Divider = {providers}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Expired Workers Comp policies</td>
                                <td>
                                    <ComplDataFilter
                                        Info = {tpdata}
                                        Filter1 = 'wc'
                                        Filter1child = 'end'
                                        Value1 = {reportdate} 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-right">% non-compliant Workers Comp policies</td>
                                <td>
                                    <PercentCalc
                                        Info = {tpdata}
                                        Filter1 = 'wc'
                                        Filter1child = 'end'
                                        Value1 = {reportdate}
                                        Divider = {providers}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th colSpan="2" className="text-center">Vehicles</th>
                            </tr>
                            <tr>
                                <th>Number of Vehicles</th>
                                <td>{vehicles}</td>
                            </tr>
                            <tr>
                                <td>Expired Registrations</td>
                                <td>
                                    <ComplDataFilter
                                        Info = {vehdata}
                                        Filter1 = 'registration'
                                        Filter1child = 'end'
                                        Value1 = {reportdate} 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-right">% Non-Compliant Registrations:</td>
                                <td>
                                    <PercentCalc
                                        Info = {vehdata}
                                        Filter1 = 'registration'
                                        Filter1child = 'end'
                                        Value1 = {reportdate}
                                        Divider = {vehicles}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Expired Inspections</td>
                                <td>
                                    <ComplDataFilter
                                        Info = {vehdata}
                                        Filter1 = 'inspection'
                                        Filter1child = 'end'
                                        Value1 = {reportdate} 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-right">% Non-Compliant Inspection:</td>
                                <td>
                                    <PercentCalc
                                        Info = {vehdata}
                                        Filter1 = 'inspection'
                                        Filter1child = 'end'
                                        Value1 = {reportdate}
                                        Divider = {vehicles}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Number of non-compliant Vehicles</td>
                                <td>
                                {
                                    vehdata.filter(
                                    vehdata => vehdata.regexp < reportdate || 
                                    vehdata.inspection.end < reportdate
                                    ).length
                                }
                                </td>
                            </tr>
                            <tr>
                                <td className="text-right">% non-compliant Vehicles</td>
                                <td>
                                {
                                    Math.floor(
                                        (
                                            vehdata.filter(vehdata => vehdata.regexp < reportdate || 
                                            vehdata.inspection.end < reportdate).length
                                        ) / vehicles * 100
                                    ) + '%'
                                }
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <Table striped bordered size="sm" className="shadow-sm">
                        <tbody>
                            <tr>
                                <th colSpan="3" className="text-center">Drivers</th>
                            </tr>
                            <tr>
                                <td colSpan="2">Number of Drivers</td>
                                <td>{drivers}</td>
                            </tr>
                            <tr>
                                <th>Driver Compliance Catagories</th>
                                <th>Total Expired</th>
                                <th>% Non-Compliant</th>
                            </tr>
                            <tr>
                                <td>License</td>
                                <td>
                                    <ComplDataFilter
                                        Info = {drdata}
                                        Filter1 = 'license'
                                        Filter1child = 'exp'
                                        Value1 = {reportdate} 
                                    />
                                </td>
                                <td>
                                    <PercentCalc
                                        Info = {drdata}
                                        Filter1 = 'license'
                                        Filter1child = 'exp'
                                        Value1 = {reportdate}
                                        Divider = {drivers}
                                    /> 
                                </td>
                            </tr>
                            <tr>
                                <td>Drug Screen</td>
                                <td>
                                    <ComplDataFilter
                                        Info = {drdata}
                                        Filter1 = 'drugscreen'
                                        Filter1child = 'end'
                                        Value1 = {reportdate} 
                                    />
                                </td>
                                <td>
                                    <PercentCalc
                                        Info = {drdata}
                                        Filter1 = 'drugscreen'
                                        Filter1child = 'end'
                                        Value1 = {reportdate}
                                        Divider = {drivers}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Background Check</td>
                                <td>
                                    <ComplDataFilter
                                        Info = {drdata}
                                        Filter1 = 'background'
                                        Filter1child = 'end'
                                        Value1 = {reportdate} 
                                    />
                                </td>
                                <td>
                                    <PercentCalc
                                        Info = {drdata}
                                        Filter1 = 'background'
                                        Filter1child = 'end'
                                        Value1 = {reportdate}
                                        Divider = {drivers}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>MVR</td>
                                <td>
                                    <ComplDataFilter
                                        Info = {drdata}
                                        Filter1 = 'mvr'
                                        Filter1child = 'end'
                                        Value1 = {reportdate} 
                                    />
                                </td>
                                <td>
                                    <PercentCalc
                                        Info = {drdata}
                                        Filter1 = 'mvr'
                                        Filter1child = 'end'
                                        Value1 = {reportdate}
                                        Divider = {drivers}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>First Aid</td>
                                <td>
                                    <ComplDataFilter
                                        Info = {drdata}
                                        Filter1 = 'firstaid'
                                        Filter1child = 'end'
                                        Value1 = {reportdate} 
                                    />
                                </td>
                                <td>
                                    <PercentCalc
                                        Info = {drdata}
                                        Filter1 = 'firstaid'
                                        Filter1child = 'end'
                                        Value1 = {reportdate}
                                        Divider = {drivers}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>CPR</td>
                                <td>
                                    <ComplDataFilter
                                        Info = {drdata}
                                        Filter1 = 'cpr'
                                        Filter1child = 'end'
                                        Value1 = {reportdate} 
                                    />
                                </td>
                                <td>
                                    <PercentCalc
                                        Info = {drdata}
                                        Filter1 = 'cpr'
                                        Filter1child = 'end'
                                        Value1 = {reportdate}
                                        Divider = {drivers}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Defensive Driving</td>
                                <td>
                                    <ComplDataFilter
                                        Info = {drdata}
                                        Filter1 = 'defdriv'
                                        Filter1child = 'end'
                                        Value1 = {reportdate} 
                                    />
                                </td>
                                <td>
                                    <PercentCalc
                                        Info = {drdata}
                                        Filter1 = 'defdriv'
                                        Filter1child = 'end'
                                        Value1 = {reportdate}
                                        Divider = {drivers}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Passenger Sensitivity (PASS)</td>
                                <td>
                                    <ComplDataFilter
                                        Info = {drdata}
                                        Filter1 = 'pass'
                                        Filter1child = 'end'
                                        Value1 = {reportdate} 
                                    />
                                </td>
                                <td>
                                    <PercentCalc
                                        Info = {drdata}
                                        Filter1 = 'pass'
                                        Filter1child = 'end'
                                        Value1 = {reportdate}
                                        Divider = {drivers}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="text-right">Number of Non-Compliant Drivers</td>
                                <td>
                                {
                                    drdata.filter(drdata => drdata.license.exp < reportdate ||
                                    drdata.firstaid.end < reportdate ||
                                    drdata.cpr.end < reportdate ||
                                    drdata.defdriv.end < reportdate ||
                                    drdata.pass.end < reportdate ||
                                    drdata.drugscreen.end < reportdate ||
                                    drdata.background.end < reportdate ||
                                    drdata.mvr.end < reportdate
                                    ).length
                                }
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="text-right">Percent Non-Compliant Drivers</td>
                                <td>
                                {Math.floor(
                                    (
                                        (drdata.filter(drdata => drdata.license.exp < reportdate ||
                                            drdata.firstaid.end < reportdate ||
                                            drdata.cpr.end < reportdate ||
                                            drdata.defdriv.end < reportdate ||
                                            drdata.pass.end < reportdate ||
                                            drdata.drugscreen.end < reportdate ||
                                            drdata.background.end < reportdate ||
                                            drdata.mvr.end < reportdate
                                        ).length) / drivers
                                    ) * 100) + '%'
                                }
                                </td>
                            </tr>  
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}

/* ******************* 
*   Main Class       * 
*********************/

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




/* ******************* 
*   Displays Page    * 
*********************/


function ProviderData() {

    return (
        <Layout>
            <CustomJumbo
                Title="Provider List"
                ImgUrl="noimage"
                Caption1Style='lead text-center'
                Caption1="this is data imported from local json files. It will recreate tracking
                    spreadsheets I created at one of my previous jobs."
                Caption2Style='text-center'
                Caption2="All information has been randomly generated from a JSON Generator tool 
                found online. This includes names, emails, phone numbers, addresses and dates."
            />

            <CustomTabs
                Tab1Name = 'Network'
                Tab2Name = 'Compliance'
                Tab1Content = {
                    <div>
                        <Networkinfo />
                        <NetworkList />
                    </div>
                }
                Tab2Content = {
                    <ProviderCompliance />
                }
            />
        </Layout>
    );
    
}


export default ProviderData;