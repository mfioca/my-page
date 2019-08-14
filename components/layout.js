import Header from './Header'
import Footer from './Footer'
import CSS from './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Bodystyle = {
  minHeight: '100vh',
  maxWidth: '98%',
  marginRight: 'auto',
  marginLeft: 'auto'
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