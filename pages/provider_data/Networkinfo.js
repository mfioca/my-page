import React from 'react'
import { Row, Col, Table } from 'reactstrap'

var networkdata = require('./network.json');


function NetworkDataFilter(props) {
    let Fone = props.Filter1;
    let Vone = props.Value1;
    let Ftwo = props.Filter2;
    let Vtwo = props.Value2;
    let Data = props.Info;
    
    return (
        <span>{Data.filter(Data => Data[Fone] === Vone && Data[Ftwo] === Vtwo).length}</span>
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


export default Networkinfo;