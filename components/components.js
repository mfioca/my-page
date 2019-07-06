import React from 'react'
import CSS from './style.css'


export function NavLink(props) {
    return (
    <div className="Navbar center">
    <a href={`${props.id}`} title={props.title}>
        {props.title}
    </a>
    </div>
    );
}

export function FooterLink(props) {
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

export function Google(props) {
    return (
        <div className="google">
            <div>
                <img src="/static/images/google.png" alt="google" height="20" />
            </div>
            <div>
                <form action="http://google.com/search" target="_blank" rel="noopener noreferrer">
                    <input name="q" />
                    <input type="submit" value="Google Search" />
                </form>
            </div>
        </div>
    );
}