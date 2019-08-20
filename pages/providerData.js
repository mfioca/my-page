import React from 'react'
import Layout from '../components/layout.js'
import { Row, Col, Table } from 'reactstrap'
import { CustomJumbo } from './customComponents'
import ProviderList from './provider_data/providerImport.js'


var data = require('./provider_data/provider.json');


function Providerinfo() {
    return (
        <div >
            <Row>
                <Col className="px-5">
                    <h4 className="text-center p-2"><b><u>Provider Totals</u></b></h4> 
                    <Table striped bordered size="sm">
                        <tbody>
                            <tr>
                                <th>Total Transportation Providers:</th>
                                <th>{data.length}</th>
                            </tr>
                            <tr>
                                <td>Transportation Companies:</td>
                                <td>{data.filter(data => data.Type === 'Provider').length}</td>
                            </tr>
                            <tr>
                                <td>Volunteer Drivers:</td>
                                <td>{data.filter(data => data.Type === 'Volunteer Driver').length}</td>
                            </tr>
                            <tr>
                                <th>Central Region Providers:</th>
                                <td>{data.filter(data => data.Region === 'Central').length}</td>
                            </tr>
                            <tr>
                                <td>Transportation Companies:</td>
                                <td>{data.filter(data => data.Type === 'Provider' && data.Region === 'Central' ).length}</td>
                            </tr>
                            <tr>
                                <td>Volunteer Drivers:</td>
                                <td>{data.filter(data => data.Type === 'Volunteer Driver' && data.Region === 'Central').length}</td>
                            </tr>
                            <tr>
                                <th>SouthWest Region:</th>
                                <td>{data.filter(data => data.Region === 'SouthWest').length}</td>
                            </tr>
                            <tr>
                                <td>Transportation Companies:</td>
                                <td>{data.filter(data => data.Type === 'Provider' && data.Region === 'SouthWest' ).length}</td>
                            </tr>
                            <tr>
                                <td>Volunteer Drivers:</td>
                                <td> {data.filter(data => data.Type === 'Volunteer Driver' && data.Region === 'SouthWest').length}</td>
                            </tr>
                            <tr>
                                <th>East Region:</th>
                                <td>{data.filter(data => data.Region === 'East').length}</td>
                            </tr>
                            <tr>
                                <td>Transportation Companies:</td>
                                <td>{data.filter(data => data.Type === 'Provider' && data.Region === 'East' ).length}</td>
                            </tr>
                            <tr>
                                <td>Volunteer Drivers:</td>
                                <td>{data.filter(data => data.Type === 'Volunteer Driver' && data.Region === 'East').length}</td>
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
                <Col className="px-5">
                    <h4 className="text-center p-2"><b><u>Level of Service Totals</u></b></h4>
                    <Table striped bordered size="sm">
                        <tbody>
                            <tr>
                                <th colSpan="2">All Regions</th>
                            </tr>
                            <tr>
                                <td>Providers with Ambulatory:</td>
                                <td>{data.filter(data => data.Amb === 'Yes').length}</td>
                            </tr>
                            <tr>
                                <td>Providers with Wheelchair:</td>
                                <td>{data.filter(data => data.WCHR === 'Yes').length}</td>
                            </tr>
                            <tr>
                                <td>Providers with Stretcher:</td>
                                <td>{data.filter(data => data.Stretcher === 'Yes').length}</td>
                            </tr>
                            <tr>
                                <th colSpan="2">Central</th>
                            </tr>
                            <tr>
                                <td>Providers with Ambulatory:</td>
                                <td>{data.filter(data => data.Region === 'Central' && data.Amb === 'Yes').length}</td>
                            </tr>
                            <tr>
                                <td>Providers with Wheelchair:</td>
                                <td>{data.filter(data => data.Region === 'Central' && data.WCHR === 'Yes').length}</td>
                            </tr>
                            <tr>
                                <td>Providers with Stretcher:</td>
                                <td>{data.filter(data => data.Region === 'Central' && data.Stretcher === 'Yes').length}</td>
                            </tr>
                            <tr>
                                <th colSpan="2">SouthWest</th>
                            </tr>
                            <tr>
                                <td>Providers with Ambulatory:</td>
                                <td>{data.filter(data => data.Region === 'SouthWest' && data.Amb === 'Yes').length}</td>
                            </tr>
                            <tr>
                                <td>Providers with Wheelchair:</td>
                                <td>{data.filter(data => data.Region === 'SouthWest' && data.WCHR === 'Yes').length}</td>
                            </tr>
                            <tr>
                                <td>Providers with Stretcher:</td>
                                <td>{data.filter(data => data.Region === 'SouthWest' && data.Stretcher === 'Yes').length}</td>
                            </tr>
                            <tr>
                                <th colSpan="2">East</th>
                            </tr>
                            <tr>
                                <td>Providers with Ambulatory:</td>
                                <td>{data.filter(data => data.Region === 'East' && data.Amb === 'Yes').length}</td>
                            </tr>
                            <tr>
                                <td>Providers with Wheelchair:</td>
                                <td>{data.filter(data => data.Region === 'East' && data.WCHR === 'Yes').length}</td>
                            </tr>
                            <tr>
                                <td>Providers with Stretcher:</td>
                                <td>{data.filter(data => data.Region === 'East' && data.Stretcher === 'Yes').length}</td>
                            </tr>
                        </tbody>
                        <style jsx>{`
                            {
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
            </Row>
        </div>  
    );
}




function ProviderData() {
    return (
        <Layout>
            <CustomJumbo
                Title="Provider List"
                ImgUrl="noimage"
                Caption1Style='lead text-center'
                Caption1="this is data imported from a local json file. It will recreate a tracking
                    spreadsheet I created at one of my jobs."
                Caption2Style='text-center'
                Caption2="I used react-table dependency to build the data table. Altering formatting
                    to match my spreadsheet."
                />
            <Providerinfo />
            <Row className="justify-content-center">
                <Col xs="10" className="mb-3" >
                    <ProviderList />
                </Col>
            </Row>
        </Layout>
    ); 
}

export default ProviderData;