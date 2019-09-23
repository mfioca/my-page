import React from 'react'
import { Row, Col, Table } from 'reactstrap'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

var data2 = require('./Compliance.json');

class DateCheck extends React.Component {
    render() {
        var date = this.props.Date;
        if (date < "2019-09-22") {
            return (
                <span className="bg-danger text-white">{date}</span>
            )
        } else if (date < "2019-10-22" && date > "2019-09-22") {
            return (
                <span className="bg-warning text-white">{date}</span>
            )
        } else {
            return (
                <span>{date}</span>
            );
        }
    }
}

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            value: 'ACCEL'
        };
    }
  
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    handleChange(e) {
        this.setState({value: event.target.value});
    }

    render() {
        const test = data2.filter(data2 => data2.company === this.state.value);
        const test2 = test[0];
        

        return (
            <div className="ml-5 mt-5">
                <h1 className="mt-5 text-center">Provider Compliance Report</h1>
                <h3 className="mt-2 mb-5 text-center">Report Date: 9/22/2019</h3>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Provider List
                    </DropdownToggle>
                    <DropdownMenu
                        modifiers={{
                            setMaxHeight: {
                                enabled: true,
                                order: 890,
                                fn: (data) => {
                                return {
                                    ...data,
                                    styles: {
                                    ...data.styles,
                                    overflow: 'auto',
                                    maxHeight: 200  ,
                                    },
                                };
                                },
                            },
                        }}
                    >
                        {data2.sort((a, b) => {
                                const One = a.company.toUpperCase();
                                const Two = b.company.toUpperCase();
                            
                                return (One < Two) ? -1 : (One > Two) ? 1 : 0;
                            })
                            .map(TP => (
                                <DropdownItem className="Btn" key={TP.company} onClick={this.handleChange}
                                value={TP.company}>
                                    {TP.company}
                                </DropdownItem>
                            ))
                        }
                    </DropdownMenu>
                </Dropdown>
                <div className="mt-5">
                    <p>Provider: {this.state.value}</p>
                    <p>
                        <span className="ml-5">email: {test2.email}, </span>
                        <span className="ml-5">phone: {test2.phone}, </span>
                        <span className="ml-5">address: {test2.address}, </span>
                    </p>
                    <p>Insurance:</p>
                        {
                            test2.insurance.map(insurance => (
                                <span className="ml-5" key={insurance.type}>
                                    <span className="ml-5">{insurance.type}</span>
                                    <span className="ml-5">{insurance.company}</span>
                                    <span className="ml-5">{insurance.end}</span>
                                </span>
                            ))
                        }
                    <h2 className="mt-5">Drivers:</h2>
                    {test2.drivers.map(driver => (
                        <div>
                            <Row xs="auto" className="p-0" key={driver.id}>
                                <div className="d-inline-block h-25 text-center mx-5">
                                    <h3>{driver.name}</h3>
                                </div>
                                <div className="d-inline-block h-25 text-center mx-5 pt-2">
                                    <p>License State: {driver.license.state}</p>
                                </div>
                                <div className="d-inline-block h-25 text-center mx-5 pt-2">
                                    <p>License Exp: &nbsp;
                                        <DateCheck Date={driver.license.exp} />
                                    </p>
                                </div>
                            </Row>
                            <Row className="ml-5">
                                <Col className="justify-content-center">
                                    <p>Training:</p>
                                    <Table bordered className="w-75">
                                        <thead>
                                            <tr>
                                                <th>Type:</th>
                                                <th>Company:</th>
                                                <th>Exp date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {driver.training.map(tr => (
                                                <tr key={tr.type}>
                                                    <td>Type: {tr.type}: </td>
                                                    <td>{tr.company}</td>
                                                    <td>
                                                        <DateCheck Date = {tr.end} />  
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Col>
                                <Col >
                                    <p>Screening:</p>
                                    <Table bordered className="w-75">
                                        <thead>
                                            <tr>
                                                <th>Type:</th>
                                                <th>Exp date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {driver.screenings.map(scr => (
                                                <tr key={scr.type}>
                                                    <td>{scr.type}</td>
                                                    <td>
                                                        <DateCheck Date = {scr.end} />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Example;