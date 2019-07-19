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
                    <p><b>Filter criteria</b> currently set at "East Region" with "stretcher" vehicles.</p>
                    <ol>
                        <b>Things to do:</b>
                        <li>make filter criteria editable by the user.</li>
                        <li>restrict viewing area of table forcing scroll.</li>
                    </ol>
                </div>
                <ProviderList />
            </Layout>
        );
    }
}

export default ProviderData;