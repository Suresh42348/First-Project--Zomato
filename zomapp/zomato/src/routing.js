import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header'
import Footer from './footer';
import Home from './component/Home/Home';
import Listing from './component/listing/Listing';
import Details from './component/details/RestDetails';
import Services from './component/services/Services';
import PlaceOrder from './component/Booking/PlaceOrder';
import ViewOrder from './component/Booking/ViewOrder';
import Login from './component/login/loginComponent';
import Register from './component/login/registerComponent';
import Aboutus from './component/Home/aboutus';


const Routing = () => {
    return(
        <BrowserRouter>
           
                <Route exact path="/" component={Home}/>
                <Route path="/Services" component={Services}/>
                <Route path="/listing/:id" component={Listing}/>
                <Route exact path="/details" component={Details}/>
                <Route path="/details/:restId" component={Details}/>
                <Route path="/placeOrder/:restName" component={PlaceOrder}/>
                <Route exact path="/placeOrder" component={PlaceOrder}/>
                <Route path="/viewBooking" component={ViewOrder}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/aboutus" component={Aboutus}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing