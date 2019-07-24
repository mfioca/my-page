import React, { Component } from 'react';
import Layout from '../components/layout.js';
import CSS from '../components/style.css';
import ProviderList from './provider_data/providerimport.js';


var data = require('./provider_data/provider.json');


function Providerinfo(props) {
    return (
    <div className="Provider-info">
        <div>
            <table className="Provider-info-table">
                <p className="center"><b><u>Provider Totals</u></b></p>
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
            <table className="Provider-info-table">
                <p className="center"><b><u>Level of Service Totals</u></b></p>
                <tr>
                    <td className="right">Ambulatory:</td>
                    <td>{data.filter(data => data.Amb === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Wheelchair:</td>
                    <td>{data.filter(data => data.WCHR === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Stretcher:</td>
                    <td>{data.filter(data => data.Stretcher === 'Yes').length}</td>
                </tr>
                <tr>
                    <th className="left">Central:</th>
                </tr>
                <tr>
                    <td className="right">Ambulatory:</td>
                    <td>{data.filter(data => data.Region === 'Central' && data.Amb === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Wheelchair:</td>
                    <td>{data.filter(data => data.Region === 'Central' && data.WCHR === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Stretcher:</td>
                    <td>{data.filter(data => data.Region === 'Central' && data.Stretcher === 'Yes').length}</td>
                </tr>
                <tr>
                    <th className="left">SouthWest:</th>
                </tr>
                <tr>
                    <td className="right">Ambulatory:</td>
                    <td>{data.filter(data => data.Region === 'SouthWest' && data.Amb === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Wheelchair:</td>
                    <td>{data.filter(data => data.Region === 'SouthWest' && data.WCHR === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Stretcher:</td>
                    <td>{data.filter(data => data.Region === 'SouthWest' && data.Stretcher === 'Yes').length}</td>
                </tr>
                <tr>
                    <th className="left">East:</th>
                </tr>
                <tr>
                    <td className="right">Ambulatory:</td>
                    <td>{data.filter(data => data.Region === 'East' && data.Amb === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Wheelchair:</td>
                    <td>{data.filter(data => data.Region === 'East' && data.WCHR === 'Yes').length}</td>
                </tr>
                <tr>
                    <td className="right">Stretcher:</td>
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
                        spreadsheet I created at one of my jobs.
                    </p>
                    <p>I used react-table dependency to build the data table. Altering formatting
                        to match my spreadsheet.
                    </p>
                    <ol>
                        <b>Things to do:</b>
                        <li>see if you can change react-tables css for custom styling</li>
                        <li>double check json file for consistency</li>
                    </ol>
                </div>
                <Providerinfo />
                <ProviderList />
            </Layout>
        );
    }
}

export default ProviderData;