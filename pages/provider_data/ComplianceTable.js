import React from 'react'
import { Row, Col, Table } from 'reactstrap'

var tpdata = require('./company.json');
var vehdata = require('./vehicle.json');
var drdata = require('./driver.json');


function ComplDataFilter(props) {
    const Data = props.Info
    const Fone = props.Filter1;
    const Fonekey = props.Filter1child;
    const Vone = props.Value1;

    return (
        <span>{Data.filter(Data => Data[Fone][Fonekey] < Vone).length}</span>
    )
}

function PercentCalc(props) {
    const Data = props.Info
    const Fone = props.Filter1;
    const Fonekey = props.Filter1child;
    const Vone = props.Value1;
    const Divider = props.Divider;

    return (
        <span>
            {
                Math.floor(
                    (
                        Data.filter(Data => Data[Fone][Fonekey] < Vone).length
                    ) / Divider * 100
                ) + '%'
            }
        </span>
    )
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


export default ComplianceTable;