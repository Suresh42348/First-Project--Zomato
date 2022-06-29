import React,{Component} from 'react';
import './Header.css';
import {Link,withRouter} from 'react-router-dom';

const url = "https://zlogin42348.herokuapp.com/api/auth/userinfo"

class Header extends Component {

    constructor(){
        super()

        this.state={
            userData:'',
            username:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('addtocart')
        sessionStorage.setItem('loginStatus',false)
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outArray = [data.name, data.email, data.phone, data.role];
            sessionStorage.setItem('userInfo',outArray)
            sessionStorage.setItem('loginStatus',true)
    

            

            
            return(
                <>
                 
                   <div className="btnlogin">
                        <button onClick={this.handleLogout} className="btn btn-danger">
                        Logout
                        </button>
                   </div>&nbsp;
                   <div className="btnlogin">
                         <Link to="/" className="btn btn-success">
                             <span className="glyphicon glyphicon-user"></span> Hi {this.state.userData.name}
                        </Link>
                       
                    </div>
                </>
            )
        }else{
            return(
                <>
                   
                   <div className="btnlogin">
                        <Link to="/register" className="btn btn-primary">
                        <span className="glyphicon glyphicon-user"></span> Register</Link>
                   </div>&nbsp;
                   <div className="btnlogin">
                         <Link to="/login" className="btn btn-success">
                             <span className="glyphicon glyphicon-log-in"></span> Login
                        </Link>
                    </div> 
                </>
            )
        }
    }

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
                            <li> <Link to="/aboutus" className="default">About Us</Link></li>
                            <li><Link to="/Services" className="default">Services</Link></li>
                            <li><a href="#" className="default">Contact</a></li>
                         </ul>
                        
                         <div id="social">
                    {this.conditionalHeader()}
                    
                </div>
                    </div>
                   
                </div>
            </nav>
            </header>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({
                userData:data,
                username:data.name
            })
            console.log(this.state.username)
            console.log("componentdidmount running in header")
        })
    }
    // componentDidUpdate(prevProps,prevState){
    //     if(prevState.username!==this.state.username){
    //         this.setState({
    //             username:this.userdata.name
    //         })
    //     }
    // }
    
}

export default withRouter(Header)