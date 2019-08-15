import React from 'react'
import Layout from '../components/layout'
import About from './about_view/aboutview'
import Resume from './about_view/resumeview'



function Aboutpage (){
  return (
    <Layout>
      <About />
      <hr className="hr-style-five m-5" />
      <Resume />
    </Layout>
  );
}


export default Aboutpage;