import React, { Component } from 'react';
import Layout from '../components/layout.js';
import ProviderList from './provider_data/providerimport.js';


var data = require('./provider_data/provider.json');


// {data.filter(data => data.Type === 'Provider').length}: 
// filters the json based on items with values and totals up 
//the number of listed items with that data value.  example above:
//count the number of entries with the data "Type" of 'Provider'  

function Providerinfo() {
    return (
    <div className="Provider-info">
        <div>
            <p className="center Fsize-2"><b><u>Provider Totals</u></b></p>  
            <table className="Provider-info-table">
                 <tr>
                    <th className="left">Total Transportation Providers:</th>
                    <td>{data.length}</td>
                </tr>
                <tr>
                    <td className="right">Transportation Companies:</td>
                    <td>{data.filter(data => data.Type === 'Provider').length}</td>
                </tr>
                <tr>
                    <td className="right">Volunteer Drivers:</td>
                    <td>{data.filter(data => data.Type === 'Volunteer Driver').length}</td>
                </tr>
                <tr>
                    <th className="left">Central Region Providers:</th>
                    <td>{data.filter(data => data.Region === 'Central').length}</td>
                </tr>
                <tr>
                    <td className="right">Transportation Companies:</td>
                    <td>{data.filter(data => data.Type === 'Provider' && data.Region === 'Central' ).length}</td>
                </tr>
                <tr>
                    <td className="right">Volunteer Drivers:</td>
                    <td>{data.filter(data => data.Type === 'Volunteer Driver' && data.Region === 'Central').length}</td>
                </tr>
                <tr>
                    <th className="left">SouthWest Region:</th>
                    <td>{data.filter(data => data.Region === 'SouthWest').length}</td>
                </tr>
                <tr>
                    <td className="right">Transportation Companies:</td>
                    <td>{data.filter(data => data.Type === 'Provider' && data.Region === 'SouthWest' ).length}</td>
                </tr>
                <tr>
                    <td className="right">Volunteer Drivers:</td>
                    <td> {data.filter(data => data.Type === 'Volunteer Driver' && data.Region === 'SouthWest').length}</td>
                </tr>
                <tr>
                    <th className="left">East Region:</th>
                    <td>{data.filter(data => data.Region === 'East').length}</td>
                </tr>
                <tr>
                    <td className="right">Transportation Companies:</td>
                    <td>{data.filter(data => data.Type === 'Provider' && data.Region === 'East' ).length}</td>
                </tr>
                <tr>
                    <td className="right">Volunteer Drivers:</td>
                    <td>{data.filter(data => data.Type === 'Volunteer Driver' && data.Region === 'East').length}</td>
                </tr>
            </table>
        </div>
        <div> 
            <p className="center Fsize-2"><b><u>Level of Service Totals</u></b></p>
            <table className="Provider-info-table">
                <tr>
                    <th className="left">All Regions:</th>
                </tr>
                <tr>
                    <td className="right">Providers with Ambulatory:</td>
                    <td>{data.filter(data => data.Amb === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Providers with Wheelchair:</td>
                    <td>{data.filter(data => data.WCHR === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Providers with Stretcher:</td>
                    <td>{data.filter(data => data.Stretcher === 'Yes').length}</td>
                </tr>
                <tr>
                    <th className="left">Central:</th>
                </tr>
                <tr>
                    <td className="right">Providers with Ambulatory:</td>
                    <td>{data.filter(data => data.Region === 'Central' && data.Amb === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Providers with Wheelchair:</td>
                    <td>{data.filter(data => data.Region === 'Central' && data.WCHR === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Providers with Stretcher:</td>
                    <td>{data.filter(data => data.Region === 'Central' && data.Stretcher === 'Yes').length}</td>
                </tr>
                <tr>
                    <th className="left">SouthWest:</th>
                </tr>
                <tr>
                    <td className="right">Providers with Ambulatory:</td>
                    <td>{data.filter(data => data.Region === 'SouthWest' && data.Amb === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Providers with Wheelchair:</td>
                    <td>{data.filter(data => data.Region === 'SouthWest' && data.WCHR === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Providers with Stretcher:</td>
                    <td>{data.filter(data => data.Region === 'SouthWest' && data.Stretcher === 'Yes').length}</td>
                </tr>
                <tr>
                    <th className="left">East:</th>
                </tr>
                <tr>
                    <td className="right">Providers with Ambulatory:</td>
                    <td>{data.filter(data => data.Region === 'East' && data.Amb === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Providers with Wheelchair:</td>
                    <td>{data.filter(data => data.Region === 'East' && data.WCHR === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Providers with Stretcher:</td>
                    <td>{data.filter(data => data.Region === 'East' && data.Stretcher === 'Yes').length}</td>
                </tr>
            </table>
        </div>
    </div>
    );
}


class ProviderData extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <p>this is data imported from a local json file. It will recreate a tracking
                        spreadsheet I created at one of my jobs.</p>
                    <p>I used react-table dependency to build the data table. Altering formatting
                        to match my spreadsheet. </p>
                </div>
                {/*Providerinfo listed above*/}
                <Providerinfo />
                {/*pulled in from providerimport.js*/}
                <ProviderList />
            </Layout>
        );
    }
}

export default ProviderData;