import Header from './Header'
import Footer from './Footer'
import CSS from './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Layout(props) {
    return (
        <div className="Layout">
          <Header />
          <div className="Body">
            {props.children}
          </div>
          <Footer />
          <style jsx> {`
        a:link, a:visited {
            font-size: 14px;
            color: #bbb8b8;
        },
        a:hover {
          color: black;
          
        }
    `}
    </style>
        </div>
    );
}