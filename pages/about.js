import React from 'react'
import Layout from '../components/layout'
import { AboutMedia, SingleListCard, ThreeColumnCard, CustomJumbo, NewTabLink } from './customComponents'


function Aboutpage() {
  return (
    <Layout>
      <AboutMedia
        Class="text-center bg-info text-white p-3"
        Align="Right"
        ImgUrl="../static/images/avatar.jpg"
        Title="About"
        Description="Movie, sci-fi and over all tech geek that always seeks out new and interesting
          things to experience and learn.  I strive to keep an open mind on everything because
          you never know what kind of hidden truths await those who pay attention.
          You can find those truths in the comedy writings of Douglas Adams 
          to J. R. R. Tolkien and all the way to the historical facts behind the theories expressed 
          in the TV show “Ancient Aliens”."
      />
      <AboutMedia
        Class="text-center bg-info text-white p-3"
        Align="Left"
        ImgUrl="../static/images/building.png"
        Title="Background"
        Description="I have lived in Pennsylvania, Alaska and Georgia.  While in Alaska, I expanded my 
          experiences when I joined the local Paranormal Investigation group I.O.P.I.A.  I have investigated 
          different places and have seen things that are unforgetable.  Those experiences helped me expand 
          my knowledge in movie, photo and audio editing and new knowledge and points of views about the world."
      />
      <AboutMedia
        Class="text-center bg-info text-white p-3" 
        Align="Right"
        ImgUrl="../static/images/rainmeter.png"
        Title="Computers and UI design"
        Description={
          <p>I first developed my interested in UI design when convirting back to a windows machine 
          from a mac. I did not like how windows was set up and strived to make my desktop look and act more like OSX.
          I learned about a program called Rainmeter and expanded my knowledge in programing developing my first 
          full custom UI theme through this program.  My Rainmeter theme is available 
          <NewTabLink Link="https://www.deviantart.com/franknmullet/art/Skyrim-Theme-1-0-651760185"
            Style="text-body"> here </NewTabLink> to download through deviantart.</p>
        }
      />
      <CustomJumbo
        Title="Professional Experience"
        ImgUrl = "noimage"
        Caption1Style='lead text-center'
        Caption1="Dedicated and motivated professional looking to apply my accumulated experience in 
            technical writing and training in mixed customer relations roles and into an IT based career. 
            Expertise in customer service, communication, analytical thinking and problem solving to achieve goals."
        Caption2="COMPUTER SKILLS: Windows and OSX, Microsoft Office with advanced excel functions and
            macro scripting, Lotus Notes, Maximo Enterprise Suite, Audacity, Photoshop, 
            Gimp, Eclipse, Notepad++, Visual Studio Code, working knowledge of HTML, CSS and SQL,
            beginner knowledge in REACT and Java/JavaScript."
      />
      <div className="text-center">
        <h1><u>Core Skills</u></h1>
      </div>
      <div className="d-flex flex-wrap justify-content-center my-3">
        <div className='m-3'> 
          <SingleListCard
            Item1="Customer Service"
            Item2="Customer and Technical Support"
            Item3="Communication and Training"
            Item4="Problem Solving and Decision Making"
          />
        </div>
        <div className='m-3'>
          <SingleListCard
            Item1="Technical Writing"
            Item2="Data Analysis and Reporting"
            Item3="Quality Assurance"
            Item4="Data Entry"
          />
        </div>
      </div>
      <div>
        <ThreeColumnCard
          Class="text-center bg-info text-white p-3"
          Title="SOFTWARE IMPLEMENTATION AND SUPPORT"
          Description1="Coordinated with network administrators and field monitors on supporting an Ipad
            based vehicle inspection application from beta testing to full network implementation.
            During Beta testing, tested application for real world bugs and errors and coordinated 
            with end users during real world testing.  Conducted training and technical support to 
            end users as well as improvement testing and troubleshooting on bugs and fixes as 
            assigned by developers."
          Description2="Worked as a team to develop a 7 module training course for a new Asset Management 
            Solution for BP Oil. Developed training material through MS Word and coordinated with developers 
            and company SME’s to develop standard procedures and ensure documentation accuracy."
          Description3="Provided first contact technical support for a new online enrollment process 
            including password resets as well as troubleshooting and training to team members and providers.  
            During implantation, I conducted informal quality assurance testing including working through the 
            designed process for current process accuracy as well as intentional ways to cause errors."
        />
        <ThreeColumnCard
          Class="text-center bg-light text-dark p-3"
          Title="TECHNICAL WRITING"
          Description1="Created online training modules for a new Operating System for a local cable and 
            internet company.  Converted MS word documentation to an online web based format utilizing HTML 
            and RELAX NG Schema formatting.  Worked with developers and trainers to ensure accuracy and 
            documentation matched established web formatting adjusting the training material as necessary."
          Description2="Worked as a team to develop a 7 module training course for a new Asset Management 
            Solution for BP Oil. Developed training material through MS Word and coordinated with developers 
            and company SME’s to develop standard procedures and ensure documentation accuracy."
          Description3="Created Policies and Procedures for a specialized department as a supervisor in a high 
            call volume call center environment.  This included a formal talk track for all types of incoming 
            calls as well as rules and guidelines for each call type to produce the highest level of customer 
            service possible."
        />
        <ThreeColumnCard
          Class="text-center bg-primary text-white p-3"
          Title="CUSTOMER RELATIONS"
          Description1="Managed a network of over 300 transportation providers and insured contract 
            compliance of over 3000 driver, vehicle and insurance files.  Established the Georgia market 
            as one of the top markets for contract compliance by working with providers, other departments and 
            management to increase provider relationships and performance."
          Description2="Conducted performance monitoring of contractual compliance and networking trends by 
            utilizing my advanced Excel skills by creating custom data spreadsheets with advanced functions 
            and custom macro scripting.  These reports assisted in increasing network routing efficiency and 
            increased compliance performance by showing trends and weaknesses in the provider network."
          Description3="Responsible for Contract Administration of new providers enrolling in the Alaska Medicaid 
            Network while achieving production goals and providing the highest level of customer service.  Interfaced 
            with Medicaid Providers on contract questions and worked with them to complete submitted contracts.  
            Utilized Microsoft Access and Excel to track Contracts in all phases of the application process and 
            ensure data accuracy."
        />
      </div>
    </Layout>
  );
}


export default Aboutpage;