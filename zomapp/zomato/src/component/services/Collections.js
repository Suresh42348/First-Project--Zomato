import React,{Component} from 'react';
import './Search.css';

class Collections extends Component {

    render(){
        return (
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
                    <div className="text-block"><h2>Newly opened</h2></div>
                </div>
                <div className="card">
                    <a href="" ><img src="https://i.ibb.co/pQYxZS2/trending.webp" className="collectionimages" alt="new"/></a>
                    <div className="text-block"><h2>Trending This Week</h2></div>
                </div>
                <div class="card">
                    <a href="" ><img src="https://i.ibb.co/8NT73gW/best-of-delhi-ncr.webp" className="collectionimages" alt="new"/></a>
                    <div className="text-block"><h2>Best of Delhi NCR</h2></div>
                </div>
                <div className="card">
                    <a href="" ><img src="https://i.ibb.co/HHThV3z/great-cafes.webp" className="collectionimages" alt="new"/></a>
                    <div className="text-block"><h2>Great Cafes</h2></div>
                </div>
            </div>

        </div>
            
        )
    }
    
}

export default Collections;
