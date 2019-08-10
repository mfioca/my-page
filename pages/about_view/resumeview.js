import React from 'react'
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { SingleListCard, ThreeColumnCard } from '../customComponents'

function ResumeJumbo(props) {
    return (
        <div>
        <Jumbotron>
          <h1 className="display-3 text-center">Professional Experience</h1>
          <p className="lead">Dedicated and motivated professional looking to apply my accumulated experience in 
                            technical writing and training in mixed customer relations roles and into an IT based career. 
                            Expertise in customer service, communication, analytical thinking and problem solving to achieve goals.</p>
          <hr className="my-2" />
          <p><b>Computer Skills:</b>
                Windows and OSX, Microsoft Office with advanced excel functions and
                macro scripting, Lotus Notes, Maximo Enterprise Suite, Audacity, Photoshop, 
                Gimp, Eclipse, Notepad++, Visual Studio Code, working knowledge of HTML, CSS and SQL,
                beginner knowledge in REACT and Java/JavaScript.</p>
        </Jumbotron>
      </div>
    );
}


class Resume extends React.Component {
    render() {
        return (
            <div>
                <ResumeJumbo />
                <div className="Text-Center">
                    <h1><u>Core Skills</u></h1>
                </div>
                <div>
                    <Container>
                        <Row>
                            <Col  sm={{ size: 4, offset: 1 }}>
                                <SingleListCard
                                    Item1="Customer Service and Relationship Building"
                                    Item2="Customer and Technical Support"
                                    Item3="Communication and Training"
                                    Item4="Problem Solving and Decision Making"
                                />
                            </Col>
                            <Col  sm={{ size: 4, order: 2, offset: 2 }}>
                                <SingleListCard
                                    Item1="Technical Writing"
                                    Item2="Data Analysis and Reporting"
                                    Item3="Quality Assurance"
                                    Item4="Data Entry"
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <ThreeColumnCard
                        Class="text-center bg-info text-white"
                        Title="SOFTWARE IMPLEMENTATION AND SUPPORT"
                        Description1="Coordinated with network administrators and field monitors on supporting an Ipad
                            based vehicle inspection application from beta testing to full network implementation.
                            During Beta testing, tested application for real world bugs and errors and coordinated 
                            with end users during real world testing.  Conducted training and technical support to 
                            end users as well as improvement testing and troubleshooting on bugs and fixes as assigned by developers."
                        Description2="Worked as a team to develop a 7 module training course for a new Asset Management Solution for BP Oil.  
                            Developed training material through MS Word and coordinated with developers and company SME’s to develop 
                            standard procedures and ensure documentation accuracy."
                        Description3="Provided first contact technical support for a new online enrollment process including password resets 
                            as well as troubleshooting and training to team members and providers.  During implantation, I conducted 
                            informal quality assurance testing including working through the designed process for current process accuracy 
                            as well as intentional ways to cause errors."
                    />
                    <ThreeColumnCard
                        Class="text-center bg-light text-dark"
                        Title="TECHNICAL WRITING"
                        Description1="Created online training modules for a new Operating System for a local cable and internet company.  
                            Converted MS word documentation to an online web based format utilizing HTML and RELAX NG Schema formatting.  
                            Worked with developers and trainers to ensure accuracy and documentation matched established web formatting 
                            adjusting the training material as necessary."
                        Description2="Worked as a team to develop a 7 module training course for a new Asset Management Solution for BP Oil. 
                            Developed training material through MS Word and coordinated with developers and company SME’s to develop standard procedures 
                            and ensure documentation accuracy."
                        Description3="Created Policies and Procedures for a specialized department as a supervisor in a high call volume call center environment.  
                            This included a formal talk track for all types of incoming calls as well as rules and guidelines for each call type to produce 
                            the highest level of customer service possible."
                    />
                    <ThreeColumnCard
                        Class="text-center bg-primary text-white"
                        Title="CUSTOMER RELATIONS"
                        Description1="Managed a network of over 300 transportation providers and insured contract compliance of over 3000 driver, 
                            vehicle and insurance files.  Established the Georgia market as one of the top markets for contract compliance by working with providers, 
                            other departments and management to increase provider relationships and performance."
                        Description2="Conducted performance monitoring of contractual compliance and networking trends by utilizing my advanced Excel skills by creating 
                            custom data spreadsheets with advanced functions and custom macro scripting.  These reports assisted in increasing network routing 
                            efficiency and increased compliance performance by showing trends and weaknesses in the provider network."
                        Description3="Responsible for Contract Administration of new providers enrolling in the Alaska Medicaid Network while achieving production goals and providing 
                            the highest level of customer service.  Interfaced with Medicaid Providers on contract questions and worked with them to complete submitted contracts.  
                            Utilized Microsoft Access and Excel to track Contracts in all phases of the application process and ensure data accuracy."
                    />
                </div>
            </div>
        );
    }
}






/*  New Resume format still under construction, previous code below....
const Dividerstyle = {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'rgb(196, 194, 194)',
    height: 25,
    width: '100%',
    border: '1px solid black',
    textAlign: 'center',
    fontSize: 17
}

function Divider(props) {
    return (
        <p style={Dividerstyle} title={props.title}>{props.title}</p>
    );
}


function Resume(props) {
    return(
        <div>
            <div className="Res-container FlexDirection-column">
                <div className="Res-body">
                    <div >
                        <h1 className="center r-title">Resume</h1>
                        <ul className="center">
                            <li className="inline-block Res-title-li">Email: mark@fioca.com</li>
                            <li className="inline-block Res-title-li">www.linkedin.com/in/mark-fioca</li>
                        </ul>
                    </div>
                    <Divider title="PROFESSIONAL SUMMARY" />
                    <div>
                        <p>
                            Dedicated and motivated professional looking to apply my accumulated experience in 
                            technical writing and training in mixed customer relations roles and into an IT based career. 
                            Expertise in customer service, communication, analytical thinking and problem solving to achieve goals. 
                        </p>
                        <table className="Res-table res-lineheight">
                            <tbody>
                                <tr>
                                    <th className="left">
                                        <h4>CORE SKILLS</h4>
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
                            </tbody>
                        </table>
                        <h4>COMPUTER SKILLS</h4>
                        <p>
                            Windows and OSX, Microsoft Office with advanced excel functions and
                            macro scripting, Lotus Notes, Maximo Enterprise Suite, Audacity, Photoshop, 
                            Gimp, Eclipse, Notepad++, Visual Studio Code, working knowledge of HTML, CSS and SQL,
                            beginner knowledge in REACT and Java/JavaScript.
                        </p>
                    </div>
                    <Divider title="PROFESSIONAL CAREER EXPERTIESE" />
                    <div >
                        <h4><u>SOFTWARE IMPLEMENTATION AND SUPPORT</u></h4>
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
                        <h4><u>TECHNICAL WRITING</u></h4>
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
                        <h4><u>CUSTOMER RELATIONS</u></h4>
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
                    <Divider title="PROFESSIONAL EXPERIENCE" />
                    <div>
                        <table className="Res-table">
                            <tbody>
                                <tr>
                                    <td className="left">
                                        <b>Contract Compliance Specialist</b>, LogistiCare Solutions, Atlanta, GA
                                    </td>
                                    <td className="right">
                                        2015 - 2019
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        <b>Job Coach and Claims Specialist</b>, LogistiCare Solutions, Atlanta GA
                                    </td>
                                    <td className="right">
                                        2012 - 2015
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        <b>Provider Enrollment Specialist</b>, Affilliated Computer Services, Anchorage AK
                                    </td>
                                    <td className="right">
                                        2009 - 2011
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        <b>Claims Processor</b>, Affiliated Computer Services, Anchorage AK
                                    </td>
                                    <td className="right">
                                        2007 - 2009
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        <b>Freelance Contractor</b>, PangoMedia, Anchorage AK
                                    </td>
                                    <td className="right">
                                        2005 - 2006
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <style jsx> {`
                    p, ul, ol, li, .r-title, h4 {
                        margin: 3px;
                    },
                `}
                </style>
            </div>
        </div>
    );

}
*/

export default Resume;