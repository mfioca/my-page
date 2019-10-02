import React, { Component } from 'react'
import { Row, Col, Table } from 'reactstrap'
import { NetworkDataFilter, ComplDataFilter } from '../customComponents'

var networkdata = require('./network.json');
var tpdata = require('./company.json');
var vehdata = require('./vehicle.json');
var drdata = require('./driver.json');



export function Networkinfo() {
    return (
        <div>
            <h1 className="mt-5 text-center">Network Summary</h1>
            <h3 className="mt-2 mb-5 text-center">Report Date: 9/22/2019</h3>
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


export function ComplianceTable() {
    const providers = tpdata.filter(tpdata => tpdata.company).length;
    const drivers = drdata.filter(drdata => drdata.id).length;
    const vehicles = vehdata.filter(vehdata => vehdata.id).length;
    const reportdate = "2019-09-22";

    return (
        <div>
            <h2 className="text-center mb-5">Compliance Summary</h2>
            <Row>
                <Col>
                <Table striped bordered size="sm" className="shadow-sm">
                    <tbody>
                        <tr>
                            <td>Number of Providers</td>
                            <td>{providers}</td>
                        </tr>
                        <tr>
                            <th colSpan="2" className="text-center">Insurance</th>
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
                            <td>Percent non-compliant GL policies</td>
                            <td>
                            {
                                Math.floor(
                                    (tpdata.filter(tpdata => tpdata.gl.end < reportdate).length) /
                                    providers * 100
                                ) + '%'
                            }
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
                            <td>Percent non-compliant Vehicle policies</td>
                            <td>
                            {
                                Math.floor(
                                    (tpdata.filter(tpdata => tpdata.veh.end < reportdate).length) /
                                    providers * 100
                                ) + '%'
                            }
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
                            <td>Percent non-compliant Workers Comp policies</td>
                            <td>
                            {
                                Math.floor(
                                    (tpdata.filter(tpdata => tpdata.wc.end < reportdate).length) /
                                    providers * 100
                                ) + '%'
                            }
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2" className="text-center">Vehicles</th>
                        </tr>
                        <tr>
                            <td>Number of Vehicles</td>
                            <td>{vehicles}</td>
                        </tr>
                        <tr>
                            <td className="text-right">Expired Registrations</td>
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
                            <td className="text-right">Percent Non-Compliant Registrations:</td>
                            <td>
                            {
                                Math.floor(
                                    vehdata.filter(vehdata => vehdata.registration.end < reportdate).length
                                     / vehicles * 100
                                ) + '%'
                            }
                            </td>
                        </tr>
                        <tr>
                            <td className="text-right">Expired Inspections</td>
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
                            <td className="text-right"> Percent Non-Compliant Inspection:</td>
                            <td>
                            {
                                Math.floor(
                                    vehdata.filter(vehdata => vehdata.inspection.end < reportdate).length
                                     / vehicles * 100
                                ) + '%'
                            }
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
                            <td>Percent non-compliant Vehicles</td>
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
                                {
                                    Math.floor(
                                        (
                                            drdata.filter(drdata => drdata.license.exp < reportdate).length
                                        ) / drivers * 100
                                    ) + '%'
                                } 
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
                                {
                                    Math.floor(
                                        (
                                            drdata.filter(drdata => drdata.drugscreen.end < reportdate).length
                                        ) / drivers * 100
                                    ) + '%'
                                }
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
                                {
                                    Math.floor(
                                        (
                                            drdata.filter(drdata => drdata.background.end < reportdate).length
                                        ) / drivers * 100
                                    ) + '%'
                                }
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
                                {
                                    Math.floor(
                                        (
                                            drdata.filter(drdata => drdata.mvr.end < reportdate).length
                                        ) / drivers * 100
                                    ) + '%'
                                }
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
                                {
                                    Math.floor(
                                        (
                                            drdata.filter(drdata => drdata.firstaid.end < reportdate).length
                                        ) / drivers * 100
                                    ) + '%'
                                }
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
                                {
                                    Math.floor(
                                        (
                                            drdata.filter(drdata => drdata.cpr.end < reportdate).length
                                        ) / drivers * 100
                                    ) + '%'
                                }
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
                                {
                                    Math.floor(
                                        (
                                            drdata.filter(drdata => drdata.defdriv.end < reportdate).length
                                        ) / drivers * 100
                                    ) + '%'
                                }
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
                                {
                                    Math.floor(
                                        (
                                            drdata.filter(drdata => drdata.pass.end < reportdate).length
                                        ) / drivers * 100
                                    ) + '%'
                                }
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