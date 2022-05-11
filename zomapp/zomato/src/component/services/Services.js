import React,{Component} from 'react';
import './Search.css';

class Services extends Component {

    render(){
        return (
            <div>
         
            <div id="services" >
            <div className="service">
                <div >
                    <img src="https://i.ibb.co/crkrn7M/order1.webp" class="img"/>
                </div>
                <div className="about">
                   <a href="" class="a">Order Food Online</a>
                </div>
            </div>
            <div className="service">
            <div >
                <img src="https://i.ibb.co/82vM2LM/go-out.webp" class="img"/>
            </div>
            <div className="about">
                <a href="" class="a">Go Out For Meal</a>
            </div>
        </div>
            <div className="service">
            <div >
                <img src="https://i.ibb.co/KwZGgk9/pro.webp" class="img"/>
            </div>
            <div className="about">
                <a href="" class="a">Zomato Pro</a>
            </div>
        </div>
            <div className="service">
            <div >
                <img src="https://i.ibb.co/ssScDP4/nightlife.jpg" class="img"/>
            </div>
            <div className="about">
                <a href="" class="a">Nightlife & Clubs</a>
            </div>
        </div>
        </div>
        <div className="collection ">
            <div id="collectionheading">
                <span>Collections</span>
            </div>
            <div id="collectionsubheading">
                <span>Explore curated listingingingingings of top restaurants, cafes, pubs, and bars based on trends near You</span>
            </div>
            <div>
                <div class="card">
                    <a href="" ><img src="https://i.ibb.co/ySBrsch/newly-opened.webp" className="collectionimages" alt="new"/></a>
                    <div className="text-block"><h2 className="txtcolor">Newly opened</h2></div>
                </div>
                <div className="card">
                    <a href="" ><img src="https://i.ibb.co/pQYxZS2/trending.webp" className="collectionimages" alt="new"/></a>
                    <div className="text-block"><h2 className="txtcolor">Trending This Week</h2></div>
                </div>
                <div class="card">
                    <a href="" ><img src="https://i.ibb.co/8NT73gW/best-of-delhi-ncr.webp" className="collectionimages" alt="new"/></a>
                    <div className="text-block"><h2 className="txtcolor">Best of Delhi NCR</h2></div>
                </div>
                <div className="card">
                    <a href="" ><img src="https://i.ibb.co/HHThV3z/great-cafes.webp" className="collectionimages" alt="new"/></a>
                    <div className="text-block"><h2 className="txtcolor">Great Cafes</h2></div>
                </div>
            </div>

        </div>

        </div>



            
        )
    }
    
}

export default Services;