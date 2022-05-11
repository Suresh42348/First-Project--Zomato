import React,{Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

class Header extends Component {

    render(){
        return (
            <header>
                <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" class="navbar-toggle"
                        data-toggle="collapse" data-target="#myNav">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                                <div id="logo">
                                    <span>Z!</span>
                                </div>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNav">
                        <ul className="nav navbar-nav default">
                            <li> <Link to="/" className="default">Home</Link></li>
                            <li><a href="#" className="default">About us</a></li>
                            <li><Link to="/Services" className="default">Services</Link></li>
                            <li><a href="#" className="default">Contact</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#"><img src="https://i.ibb.co/88D7YHX/fb.png" className="social" /></a></li>
                            <li><a href="#"><img src="https://i.ibb.co/MVvqVHp/insta.jpg" className="social"/></a></li>
                            <li><a href="#"><img src="https://i.ibb.co/gzhytCf/linkedin.png" className="social" /></a></li>
                            <li><button id="btn"  onClick="changeMode()"><img id="darkmode" src="./images/lightdarkmode.jpg"/></button></li>
                            
                        </ul>
                    </div>
                   
                </div>
            </nav>
            </header>
        )
    }
    
}

export default Header;