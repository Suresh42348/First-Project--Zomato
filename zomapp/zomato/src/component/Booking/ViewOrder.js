import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';
import Header from '../../header'

const url = "http://zomato42348.herokuapp.com/viewOrder"
const updateUrl = "http://zomato42348.herokuapp.com/updateOrder"

class ViewOrder extends Component {
    constructor(){
        super()

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <>
                <Header/>
               <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }

    //all api 
    // componentDidMount(){
    //     // if(this.props.location){
    //     //     let queryp = this.props.location.search;
    //     //     sessionStorage.clear("addedtocart")
    //     //     if(queryp){
    //     //         let data = {
    //     //             "status":queryp.split('&')[0].split('=')[1],
    //     //             "date":queryp.split('&')[2].split('=')[1],
    //     //             "bank_name":queryp.split('&')[3].split('=')[1]
    //     //         }
    //     //         let id = queryp.split('&')[1].split('=')[1].split('_')[1]
    //     //         fetch(`${updateUrl}/${id}`,{
    //     //             method:'PUT',
    //     //             headers:{
    //     //                 'Accept':'application/json',
    //     //                 'Content-Type':'application/json'
    //     //             },
    //     //             body: JSON.stringify(data)
    //     //         })
    //     //     }
    //     // }
    //     let email = sessionStorage.getItem('userInfo').split(',')[1];
    //     axios.get(`${url}?email=${email}`).then((res) => {
    //         console.log(res)
            
    //         this.setState({orders:res.data})})
    // }
    componentDidMount() {
        let email = sessionStorage.getItem('userInfo').split(',')[1];
        setTimeout(()=>{
            fetch(`${url}?email=${email}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    orders: data,
                })
            })

        },500)
       
    }

}

export default ViewOrder