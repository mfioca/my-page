import Header from './Header'
import Footer from './Footer'

import 'bootstrap/dist/css/bootstrap.min.css'

const Bodystyle = {
  minHeight: '100vh',
  maxWidth: '99%',
  marginRight: '5px',
  marginLeft: '5px'
}

export default function Layout(props) {
    return (
        <div className="Layout">
          <Header />
          <div style={Bodystyle}>
            {props.children}
          </div>
          <Footer />
          
        
        </div>
    );
}