import React, { Component } from 'react';
import Layout from '../components/layout.js';
import CSS from '../components/style.css';
import ProviderList from './provider_data/providerimport.js';


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
                <ProviderList />
            </Layout>
        );
    }
}

export default ProviderData;