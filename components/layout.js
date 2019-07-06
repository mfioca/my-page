import Header from './Header'
import Footer from './Footer'
import CSS from './style.css'

export default function Layout(props) {
    return (
        <div className="Layout">
          <Header />
          <div>
          <body >
            {props.children}
          </body>
          </div>
          <Footer />
        </div>
    );
}