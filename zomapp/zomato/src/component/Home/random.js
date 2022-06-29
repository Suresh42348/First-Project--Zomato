import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom'

const url = "https://zomato42348.herokuapp.com/location"
const restUrl = "https://zomato42348.herokuapp.com/restaurants?stateId="
class Search extends Component{

    constructor(props){
        super(props)
        console.log(">>>>inside constructor")
        this.state={
            location:'',
            restaurants:''
        }
    }

    renderCity = (data) => {
        // console.log(">>>>data>>",data)
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        } 
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.restaurant_id} value={item.restaurant_id}>{item.restaurant_name} | {item.address}</option>
                )
            })
        } 
    }

    handleRestaurants = (event) => {
        let restId = event.target.value;
        console.log(">>>>inside",restId)
        this.props.history.push(`/details?restId=${restId}`)
    }

    handleCity = (event) => {
        let restId = event.target.value;
        fetch(`${restUrl}${restId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            // console.log(">>>>",data)
           this.setState({restaurants:data})
        })
    }


    render(){
        console.log(">>>>inside render")
        return(
            <div className="div1 ">
            <div className="header">
            <a className="linkcolor" href="https://www.zomato.com/">Get the app</a> 
            </div>
            <div className="header2">
            <a className="linkcolor" href="https://www.zomato.com/">Add  Restaurent</a>  
            </div>
            <div id="heading">
                <span><i>zomato </i></span>
            </div>
            <div id="subheading">
                <span>Discover Best Food & Drinks Near You</span>
            
            </div>
            <div className="dropdown">
            <select onChange={this.handleCity}>
                            <option>-----PLEASE SELECT CITY-----</option>
                            {this.renderCity(this.state.location)}
                        </select>
                        <select className="restlist" onChange={this.handleRestaurants}>
                            <option>-----PLEASE SELECT RESTAURANTS-----</option>
                            {this.renderRest(this.state.restaurants)}
                        </select>
                    </div>
            
            
        
        </div>

       
           
            
            
        )
    }

  // api calling on page load
  componentDidMount(){
    console.log(">>>>inside componentDidMount")
    fetch(url,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        this.setState({location:data})
    })
}
}

export default withRouter(Search)