import React, { Component } from 'react'
import Layout from '../components/layout'
import Link from 'next/link'

const resumediv = {
    float: 'right',
    width: 800,
    height: 400,
    border: '1px solid black',
};

class Resume extends Component {
    render() {
        return (
            <Layout>
                <div className="Resume-container">
                <div className="Resume-body">
                    <h1 className="center">Resume</h1>
                    <ul className="center">
                        <li className="Resume-li">Email: mark@fioca.com</li>
                        <li className="Resume-li">www.linkedin.com/in/mark-fioca</li>
                    </ul>
                </div>
                <div className="Resume-divider center">
                    <p>PROFESSIONAL SUMMARY</p>
                </div>
                <div>
                    <p>
                    Dedicated and motivated professional looking to apply my accumulated experience in 
                    technical writing and training in mixed customer relations roles and into an IT based career. 
                    Expertise in customer service, communication, analytical thinking and problem solving to achieve goals.   
                    </p>
                    <table className="Resume-skills-table">
                        <tr>
                            <th className="left">
                                CORE SKILLS
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <ul className="left">
                                    <li>Cumstomer Service and Relationship Building</li>
                                    <li>Technical Writing</li>
                                    <li>Quality Assurance</li>
                                    <li>Data Analysis and Reporting</li>
                                </ul>
                            </td>
                            <td>
                                <ul className="left">
                                    <li>Customer and Technical Support</li>
                                    <li>Data Entry</li>
                                    <li>Problem Solving and Decision Making</li>
                                    <li>Communication and Traning</li>
                                </ul>
                            </td>  
                        </tr>
                    </table>
                    <h3>COMPUTER SKILLS</h3>
                    <p>Windows and OSX, Microsoft Office with advanced excel functions and
                        macro scripting, Lotus Notes, Maximo Enterprise Suite, Eclipse,
                        Notepad++, Visual Studio Code, working knowledge of HTML, CSS and SQL,
                        beginner knowledge in REACT and Java/JavaScript.
                    </p>
                </div>
                <div className="Resume-divider">
                    <p className="Resume-divider-text">PROFESSIONAL CAREER EXPERTISE</p>
                </div>
                <div>
                    <h3>SOFTWARE IMPLEMENTATION AND SUPPORT</h3>
                    <ul>
                        <li>
                            <p>
                                Coordinated with network administrators and field monitors on supporting an Ipad
                                based vehicle inspection application from beta testing to full network implementation.
                                During Beta testing, tested application for real world bugs and errors and coordinated 
                                with end users during real world testing.  Conducted training and technical support to 
                                end users as well as improvement testing and troubleshooting on bugs and fixes as assigned by developers.
                            </p>
                        </li>
                        <li>
                            <p>
                                Worked as a team to develop a 7 module training course for a new Asset Management Solution for BP Oil.  
                                Developed training material through MS Word and coordinated with developers and company SME’s to develop 
                                standard procedures and ensure documentation accuracy.
                            </p>
                        </li>
                        <li>
                            <p>
                                Provided first contact technical support for a new online enrollment process including password resets 
                                as well as troubleshooting and training to team members and providers.  During implantation, I conducted 
                                informal quality assurance testing including working through the designed process for current process accuracy 
                                as well as intentional ways to cause errors.  
                            </p>
                        </li>
                    </ul>
                    <h3>TECHNICAL WRITING</h3>
                    <ul>
                        <li>
                            <p>
                                Created online training modules for a new Operating System for a local cable and internet company.  
                                Converted MS word documentation to an online web based format utilizing HTML and RELAX NG Schema formatting.  
                                Worked with developers and trainers to ensure accuracy and documentation matched established web formatting 
                                adjusting the training material as necessary.
                            </p>
                        </li>
                        <li>
                            <p>
                                Created Policies and Procedures for a specialized department as a supervisor in a high call volume call center environment.  
                                This included a formal talk track for all types of incoming calls as well as rules and guidelines for each call type to produce 
                                the highest level of customer service possible.
                            </p>
                        </li>
                    </ul>
                    <h3>CUSTOMER RELATIONS</h3>
                    <ul>
                        <li>
                            <p>
                                Managed a network of over 300 transportation providers and insured contract compliance of over 3000 driver, 
                                vehicle and insurance files.  Established the Georgia market as one of the top markets for contract compliance by working with providers, 
                                other departments and management to increase provider relationships and performance.
                            </p>
                        </li>
                        <li>
                            <p>
                                Conducted performance monitoring of contractual compliance and networking trends by utilizing my advanced Excel skills by creating 
                                custom data spreadsheets with advanced functions and custom macro scripting.  These reports assisted in increasing network routing 
                                efficiency and increased compliance performance by showing trends and weaknesses in the provider network.
                            </p>
                        </li>
                        <li>
                            <p>
                                Responsible for Contract Administration of new providers enrolling in the Alaska Medicaid Network while achieving production goals and providing 
                                the highest level of customer service.  Interfaced with Medicaid Providers on contract questions and worked with them to complete submitted contracts.  
                                Utilized Microsoft Access and Excel to track Contracts in all phases of the application process and ensure data accuracy.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="Resume-divider">
                    <p className="Resume-divider-text">PROFESSIONAL EXPERIENCE</p>
                </div>
                    <table>
                        <tr>
                            <td>
                                <b>Contract Compliance Specialist</b>, LogistiCare Solutions, Atlanta, GA
                            </td>
                            <td>
                                2015 - 2019
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Job Coach and Claims Specialist</b>, LogistiCare Solutions, Atlanta GA
                            </td>
                            <td>
                                2012 - 2015
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Provider Enrollment Specialist</b>, Affilliated Computer Services, Anchorage AK
                            </td>
                            <td>
                                2009 - 2011
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Claims Processor</b>, Affiliated Computer Services, Anchorage AK
                            </td>
                            <td>
                                2007 - 2009
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Freelance Contractor</b>, PangoMedia, Anchorage AK
                            </td>
                            <td>
                                2005 - 2006
                            </td>
                        </tr>
                    </table>
                </div>
            </Layout>
        )
    }
}

export default Resume;