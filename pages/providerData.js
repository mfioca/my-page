import React from 'react'
import Layout from '../components/layout.js'
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import { CustomJumbo } from './customComponents'
import NetworkList from './provider_data/networkTable.js'
import ProviderCompliance from './provider_data/prividerCompliance.js'
import { Networkinfo } from './provider_data/providerStats.js'
import classnames from 'classnames';


class ProviderData extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
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
                            onClick={() => { this.toggle('1'); }} style={{cursor: "pointer"}}
                            >
                                Network
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }} style={{cursor: "pointer"}}
                            >
                            Compliance
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <h1 className="mt-5 text-center">Network Report</h1>
                        <h3 className="mt-2 mb-5 text-center">Report Date: 9/22/2019</h3>
                        <Networkinfo />
                        <Row className="justify-content-center">
                            <Col xs="10" className="mb-3" >
                                <NetworkList />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <ProviderCompliance />
                    </TabPane>
                </TabContent>
            </Layout>
        );
    }
}


export default ProviderData;