import React from 'react'
import Layout from '../components/layout.js'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import { TabStyle, Pointer } from './jsxstyles'
import classnames from 'classnames'
import { CustomJumbo } from './customComponents'
import NetworkList from './provider_data/networkTable.js'
import ProviderCompliance from './provider_data/prividerCompliance.js'
import { Networkinfo } from './provider_data/providerStats.js'



class ProviderData extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '2'
        };
    }
    
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
            activeTab: tab
            });
        }
    }

    render() {
        return (
            <Layout>
                <CustomJumbo
                    Title="Provider List"
                    ImgUrl="noimage"
                    Caption1Style='lead text-center'
                    Caption1="this is data imported from local json files. It will recreate tracking
                        spreadsheets I created at one of my previous jobs."
                    Caption2Style='text-center'
                    Caption2="All information has been randomly generated from a JSON Generator tool 
                    found online. This includes names, emails, phone numbers, addresses and dates."
                />
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }} style={Pointer}
                            >
                                Network
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }} style={Pointer}
                            >
                            Compliance
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1" style={TabStyle}>
                        <Networkinfo />
                            <NetworkList />
                    </TabPane>
                    <TabPane tabId="2" style={TabStyle}>
                        <ProviderCompliance />
                    </TabPane>
                </TabContent>
            </Layout>
        );
    }
}


export default ProviderData;