import React from 'react'
import { Row, Col, Table } from 'reactstrap'
import { DataFilter } from '../customComponents'

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
                    <h4 className="text-center p-2"><b><u>Provider Totals</u></b></h4> 
                    <Table striped bordered size="sm" className="shadow-sm">
                        <tbody>
                            <tr>
                                <th>Total Transportation Providers:</th>
                                <th>{networkdata.length}</th>
                            </tr>
                            <tr>
                                <td>Transportation Companies:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1= 'Type'
                                        Value1= 'Provider'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Volunteer Drivers:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Type'
                                        Value1 = 'Volunteer Driver'/>
                                </td>
                            </tr>
                            <tr>
                                <th>Central Region Providers:</th>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'Central'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Transportation Companies:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Type'
                                        Value1 = 'Provider'
                                        Filter2 = 'Region'
                                        Value2 = 'Central'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Volunteer Drivers:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Type'
                                        Value1 = 'Volunteer Driver'
                                        Filter2 = 'Region'
                                        Value2 = 'Central'/>
                                </td>
                            </tr>
                            <tr>
                                <th>SouthWest Region:</th>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'SouthWest'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Transportation Companies:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Type'
                                        Value1 = 'Provider'
                                        Filter2 = 'Region'
                                        Value2 = 'SouthWest'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Volunteer Drivers:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Type'
                                        Value1 = 'Volunteer Driver'
                                        Filter2 = 'Region'
                                        Value2 = 'SouthWest'/>
                                </td>
                            </tr>
                            <tr>
                                <th>East Region:</th>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'East'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Transportation Companies:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Type'
                                        Value1 = 'Provider'
                                        Filter2 = 'Region'
                                        Value2 = 'East'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Volunteer Drivers:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Type'
                                        Value1 = 'Volunteer Driver'
                                        Filter2 = 'Region'
                                        Value2 = 'East'/>
                                </td>
                            </tr>
                        </tbody>
                        <style jsx>{`
                            td:nth-child(odd) {
                                text-align: right;
                            },
                            td:nth-child(even) {
                                text-align: center;
                                widtH: 70px;
                            }
                            th {
                                aligh: center,
                            }
                        `}
                        </style> 
                    </Table>
                </Col>
                <Col className="px-5 pt-3">
                    <h4 className="text-center p-2"><b><u>Level of Service Totals</u></b></h4>
                    <Table striped bordered size="sm" className="shadow-sm">
                        <tbody>
                            <tr>
                                <th colSpan="2">All Regions</th>
                            </tr>
                            <tr>
                                <td>Providers with Ambulatory:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Amb'
                                        Value1 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Wheelchair:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'WCHR'
                                        Value1 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Stretcher:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Stretcher'
                                        Value1 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <th colSpan="2">Central</th>
                            </tr>
                            <tr>
                                <td>Providers with Ambulatory:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'Central'
                                        Filter2 = 'Amb'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Wheelchair:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'Central'
                                        Filter2 = 'WCHR'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Stretcher:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'Central'
                                        Filter2 = 'Stretcher'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <th colSpan="2">SouthWest</th>
                            </tr>
                            <tr>
                                <td>Providers with Ambulatory:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'SouthWest'
                                        Filter2 = 'Amb'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Wheelchair:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'SouthWest'
                                        Filter2 = 'WCHR'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Stretcher:</td>
                                <td><DataFilter
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
                                <td>Providers with Ambulatory:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'East'
                                        Filter2 = 'Amb'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Wheelchair:</td>
                                <td><DataFilter
                                        Info = {networkdata}
                                        Filter1 = 'Region'
                                        Value1 = 'East'
                                        Filter2 = 'WCHR'
                                        Value2 = 'Yes'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Providers with Stretcher:</td>
                                <td><DataFilter
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
    const providers = tpdata.filter(tpdata => tpdata.id).length;
    const drivers = drdata.filter(drdata => drdata.id).length;
    const vehicles = vehdata.filter(vehdata => vehdata.id).length;
    const reportdate = "2019-09-22";

    return (
        <div>
            <h2 className="text-center my-2">Compliance Summary</h2>
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
                                {tpdata.filter(tpdata => tpdata.gl.end < reportdate).length}
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
                                {tpdata.filter(tpdata => tpdata.veh.end < reportdate).length}
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
                                {tpdata.filter(tpdata => tpdata.wc.end < reportdate).length}
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
                                {vehdata.filter(vehdata => vehdata.registration.end < reportdate).length}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-right">Percent Non-Compliant Registrations:</td>
                            <td>
                            {
                                parseFloat (
                                    (
                                        vehdata.filter(vehdata => vehdata.registration.end < reportdate).length
                                    ) / (vehicles)
                                ).toFixed (2) + '%'
                            }
                            </td>
                        </tr>
                        <tr>
                            <td className="text-right">Expired Inspections</td>
                            <td>
                                {vehdata.filter(vehdata => vehdata.inspection.end < reportdate).length}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-right"> Percent Non-Compliant Inspection:</td>
                            <td>
                            {
                                parseFloat (
                                    (
                                        vehdata.filter(vehdata => vehdata.inspection.end < reportdate).length
                                    ) / (vehicles)
                                ).toFixed (2) + '%'
                            }
                            </td>
                        </tr>
                        <tr>
                            <td>Number of non-compliant Vehicles</td>
                            <td>
                            {vehdata.filter(
                                vehdata => vehdata.regexp < reportdate || 
                                vehdata.inspection.end < reportdate
                                ).length}
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
                                    {drdata.filter(drdata => drdata.license.exp < reportdate).length}
                                </td>
                                <td>
                                {
                                    parseFloat (
                                        (
                                            drdata.filter(drdata => drdata.license.exp < reportdate).length
                                        ) / (drivers)
                                    ).toFixed (2) + '%'
                                }
                                </td>
                            </tr>
                            <tr>
                                <td>Drug Screen</td>
                                <td>
                                    {drdata.filter(drdata => drdata.drugscreen.end < reportdate).length}
                                </td>
                                <td>
                                {
                                    parseFloat (
                                        (
                                            drdata.filter(drdata => drdata.drugscreen.end < reportdate).length
                                        ) / (drivers)
                                    ).toFixed (2) + '%'
                                }
                                </td>
                            </tr>
                            <tr>
                                <td>Background Check</td>
                                <td>
                                    {drdata.filter(drdata => drdata.background.end < reportdate).length}
                                </td>
                                <td>
                                {
                                    parseFloat (
                                        (
                                            drdata.filter(drdata => drdata.background.end < reportdate).length
                                        ) / (drivers)
                                    ).toFixed (2) + '%'
                                }
                                </td>
                            </tr>
                            <tr>
                                <td>MVR</td>
                                <td>
                                    {drdata.filter(drdata => drdata.mvr.end < reportdate).length}
                                </td>
                                <td>
                                {
                                    parseFloat (
                                        (
                                            drdata.filter(drdata => drdata.mvr.end < reportdate).length
                                        ) / (drivers)
                                    ).toFixed (2) + '%'
                                }
                                </td>
                            </tr>
                            <tr>
                                <td>First Aid</td>
                                <td>
                                    {drdata.filter(drdata => drdata.firstaid.end < reportdate).length}
                                </td>
                                <td>
                                {
                                    parseFloat (
                                        (
                                            drdata.filter(drdata => drdata.firstaid.end < reportdate).length
                                        ) / (drivers)
                                    ).toFixed (2) + '%'
                                }
                                </td>
                            </tr>
                            <tr>
                                <td>CPR</td>
                                <td>
                                    {drdata.filter(drdata => drdata.cpr.end < reportdate).length}
                                </td>
                                <td>
                                {
                                    parseFloat (
                                        (
                                            drdata.filter(drdata => drdata.cpr.end < reportdate).length
                                        ) / (drivers)
                                    ).toFixed (2) + '%'
                                }
                                </td>
                            </tr>
                            <tr>
                                <td>Defensive Driving</td>
                                <td>
                                    {drdata.filter(drdata => drdata.defdriv.end < reportdate).length}
                                </td>
                                <td>
                                {
                                    parseFloat (
                                        (
                                            drdata.filter(drdata => drdata.defdriv.end < reportdate).length
                                        ) / (drivers)
                                    ).toFixed (2) + '%'
                                }
                                </td>
                            </tr>
                            <tr>
                                <td>Passenger Sensitivity (PASS)</td>
                                <td>
                                    {drdata.filter(drdata => drdata.pass.end < reportdate).length}
                                </td>
                                <td>
                                {
                                    parseFloat (
                                        (
                                            drdata.filter(drdata => drdata.pass.end < reportdate).length
                                        ) / (drivers)
                                    ).toFixed (2) + '%'
                                }
                                </td>
                            </tr>
                            <tr>
                            <td colSpan="2" className="text-right">Number of Non-Compliant Drivers</td>
                            <td>
                            {drdata.filter(drdata => drdata.license.exp < reportdate ||
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