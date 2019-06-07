import React, { Component } from 'react'
import Layout from '../components/layout'
import About from './about_view/about_view'
import Resume from './about_view/resume_view'


class Aboutpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showAbout: true}
        this.aboutclick = this.aboutclick.bind(this);

        this.state = {showResume: false}
        this.resumeclick = this.resumeclick.bind(this);
    }

    aboutclick() {
        this.setState(prevState => ({
            showResume: !prevState.showResume
        }));
        this.setState(prevState => ({
            showAbout: !prevState.showAbout
        }));
    }

    resumeclick() {
        this.setState(prevState => ({
            showResume: !prevState.showResume
        })); 
        this.setState(prevState => ({
            showAbout: !prevState.showAbout
        }));
    }

    /*&& this.state.active}*/

    render() {
        return (
            <Layout>
                <div className="about_header ">
                    <div className="about_nav center Fsize-3">
                        <div>
                            <a  
                                className="pointer center"
                                onClick={this.aboutclick}>
                                {this.state.showAbout ? 'About' : 'About'} 
                            </a>
                        </div>
                        <div>
                            <a className="pointer center"
                                onClick={this.resumeclick} >
                                {this.state.showResume ? 'Resume' : 'Resume'}
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                <About about={this.state.showAbout}/>
                </div>
                <div>
                    <Resume resume={this.state.showResume}/>
                </div>
            </Layout>
        );
    }
}

export default Aboutpage;