import React,{Component} from 'react';
import Header from '../../header.js'
import { Link } from 'react-router-dom';
import './login.css'
const url = "https://zlogin42348.herokuapp.com/api/auth/login";

class Login extends Component {
    constructor(props){
        super(props)

        this.state={
            email:'panku42348@gmail.com',
            password:'1234',
            message:'',
            login:""
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    login = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
               let orders=sessionStorage.getItem("addedtocart")
            //    if(orders!==""){
            //     this.props.history.push('/placeOrder')   
            //    }
            //    else{
            //     sessionStorage.removeItem('addtocart')
                this.props.history.push('/')

               

               
            }
        })
    }

    render(){
        return(
            <>
            <Header/>
           
            <div className="container">
                <hr/>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h2 className="alpha">Login</h2>
                    </div>
                    <div className="panel-body">
                        <h3 style={{color:'red'}}>{this.state.message}</h3>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label for="email">Email</label>
                                <input id="email" name="email" className="form-control"
                                value={this.state.email} onChange={this.handleChange}/>
                            </div>
                             <div className="form-group col-md-6">
                                <label for="password">Password</label>
                                <input id="password" name="password" className="form-control"
                                value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            
                        </div>
                        <button className=" log1 btn btn-success" onClick={this.login}>Login</button>
                    
                        </div>
                </div>
            </div>
            </>
        )
    }

}

export default Login