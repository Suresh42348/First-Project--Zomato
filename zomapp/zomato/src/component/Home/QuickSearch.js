import React,{Component} from 'react';
import './Search.css';
import QuickDisplay from './QuickDisplay';

const url = "https://zomato42348.herokuapp.com/quicksearch"
class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
            mealType:''
        }
    }
    render(){
        return(
           
            
            <div>
                    <span id="QuickHeading">
                        Quick Search
                    </span>
                    <span id="QuickSubHeading">
                        Discover Restaurants By Meal
                    </span>
                    <QuickDisplay mealData={this.state.mealType}/>
                </div>
                
               
        
        )
    }

    // api calling 
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch