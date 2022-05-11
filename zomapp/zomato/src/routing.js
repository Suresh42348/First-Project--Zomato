import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header'
import Footer from './footer';
import Home from './component/Home/Home';
import Listing from './component/listing/Listing';
import Details from './component/details/RestDetails';
import Services from './component/services/Services';


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/Services" component={Services}/>
                <Route path="/listing/:id" component={Listing}/>
                <Route path="/details" component={Details}/>
                
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing