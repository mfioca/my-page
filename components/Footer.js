import React from 'react'


function FooterLink(props) {
    return (
        <div className="Footer-nav center">
            <a href={`${props.id}`} 
                target="_blank" 
                rel="noopener noreferrer"
                title={props.title}>
                    {props.title}
            </a>
        </div>
    );
}

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <FooterLink id="https://www.linkedin.com/in/mark-fioca/"  title="LinkedIn" />
                <FooterLink id="https://www.deviantart.com/franknmullet" title="Deviantart" />
                <FooterLink id="https://github.com/mfioca/my-page" title="Git-Hub" />
                <div className="email">
                    <div>
                        <a href="mailto: mark@fioca.com">
                            <a>Send Email</a>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;