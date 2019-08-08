import Header from './Header'
import Footer from './Footer'
import CSS from './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function Layout(props) {
    return (
        <div className="Layout">
          <Header />
          <div className="Body">
            {props.children}
          </div>
          <Footer />
        </div>
    );
}