import React from 'react';
import Layout from '../components/layout.js';
import { Container, Row, Col, Table } from 'reactstrap';
import { JumbonoImage } from './customComponents';
import ProviderList from './provider_data/providerImport.js';


var data = require('./provider_data/provider.json');



// {data.filter(data => data.Type === 'Provider').length}: 
// filters the json based on items with values and totals up 
//the number of listed items with that data value.  example above:
//count the number of entries with the data "Type" of 'Provider'  

//function Providerinfo() {
class Providerinfo extends React.Component {
    render() {
        return (
            <div >
                <Row>
                    <Col className="px-5">
                    <h4 className="text-center p-2"><b><u>Provider Totals</u></b></h4> 
                        <Table striped bordered size="sm">
                            <tbody>
                                <tr>
                                    <th className="text-center">Total Transportation Providers:</th>
                                    <td>{data.length}</td>
                                </tr>
                                <tr>
                                    <td className="text-right">Transportation Companies:</td>
                                    <td>{data.filter(data => data.Type === 'Provider').length}</td>
                                </tr>
                                <tr>
                                    <td className="text-right">Volunteer Drivers:</td>
                                    <td>{data.filter(data => data.Type === 'Volunteer Driver').length}</td>
                                </tr>
                                <tr>
                                    <th className="text-center">Central Region Providers:</th>
                                    <td>{data.filter(data => data.Region === 'Central').length}</td>
                                </tr>
                                <tr>
                                    <td className="text-right">Transportation Companies:</td>
                                    <td>{data.filter(data => data.Type === 'Provider' && data.Region === 'Central' ).length}</td>
                                </tr>
                                <tr>
                                    <td className="text-right">Volunteer Drivers:</td>
                                    <td>{data.filter(data => data.Type === 'Volunteer Driver' && data.Region === 'Central').length}</td>
                                </tr>
                                <tr>
                                    <th className="text-center">SouthWest Region:</th>
                                    <td>{data.filter(data => data.Region === 'SouthWest').length}</td>
                                </tr>
                                <tr>
                                    <td className="text-right">Transportation Companies:</td>
                                    <td>{data.filter(data => data.Type === 'Provider' && data.Region === 'SouthWest' ).length}</td>
                                </tr>
                                <tr>
                                    <td className="text-right">Volunteer Drivers:</td>
                                    <td> {data.filter(data => data.Type === 'Volunteer Driver' && data.Region === 'SouthWest').length}</td>
                                </tr>
                                <tr>
                                    <th className="text-center">East Region:</th>
                                    <td>{data.filter(data => data.Region === 'East').length}</td>
                                </tr>
                                <tr>
                                    <td className="text-right">Transportation Companies:</td>
                                    <td>{data.filter(data => data.Type === 'Provider' && data.Region === 'East' ).length}</td>
                                </tr>
                                <tr>
                                    <td className="text-right">Volunteer Drivers:</td>
                                    <td>{data.filter(data => data.Type === 'Volunteer Driver' && data.Region === 'East').length}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col className="px-5">
                        <h4 className="text-center p-2"><b><u>Level of Service Totals</u></b></h4>
                        <Table striped bordered size="sm">
                            <tbody>
                                <tr>
                                    <th colspan="2">All Regions</th>
                                </tr>
                                <tr>
                                    <td>Providers with Ambulatory:</td>
                                    <td colspan="2">{data.filter(data => data.Amb === 'Yes').length}</td>
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
                                    <th colspan="2">Central</th>
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
                                    <th colspan="2">SouthWest</th>
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
                                    <th colspan="2">East</th>
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
                        </Table>
                    </Col>
                </Row>
            </div>  
        );
    }
}



function ProviderData() {
    return (
        <Layout>
            <div className="text-center">
            <JumbonoImage 
                Title="Provider List"
                Caption1="this is data imported from a local json file. It will recreate a tracking
                spreadsheet I created at one of my jobs."
                Caption2="I used react-table dependency to build the data table. Altering formatting
                to match my spreadsheet."
                />
            </div>
            {/*Providerinfo listed above*/}
            <Providerinfo />
            {/*pulled in from providerimport.js*/}
            <Row className="justify-content-center">
                <Col xs="11" >
                <ProviderList />
                </Col>
            </Row>
        </Layout>
    ); 
}

export default ProviderData;