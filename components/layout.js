import Header from './Header'
import Footer from './Footer'
import CSS from './style.css'

export default function Layout(props) {
    return (
        <div className="Layout">
            <div className="Header">
                <Header />
            </div>
            <div className="Body">
              <body >
                {props.children}
              </body>
            </div>
            <div className="Footer">
                <Footer />
            </div>
        </div>
    )
}