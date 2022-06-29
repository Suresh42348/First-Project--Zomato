import React,{Component} from 'react';
import './about.css';
import Header from '../../header';



class Aboutus extends Component {
    render() { 
        
        return (
            <>
            <Header/>
            <div id="main1">
                <div className="text">
                <h1>Who are we</h1>
                <p>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
                </div>

                <div className="img1">
                    <img src="https://i.ibb.co/pPpjVzK/about.jpg" alt="about" ></img>
                </div>
                </div>
            </>
        );

}
}
export default Aboutus;