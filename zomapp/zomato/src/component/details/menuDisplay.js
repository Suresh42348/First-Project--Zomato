import React,{Component} from 'react';

class MenuDisplay extends Component {

    orderId= [];

    placeOrder = (id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
        sessionStorage.setItem("addedincart", this.orderId)
    }

    removeOrder = (id) => {
        if(this.orderId.indexOf(id) > -1){
            this.orderId.splice(this.orderId.indexOf(id),1)
        }
        this.props.finalOrder(this.orderId)
    }

    renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item}&nbsp;</b>
                )
            })
        }
    }

    renderMenu = ({menudata}) => {
        console.log(menudata)
        if(menudata[0]){
            console.log(menudata[0])

            return menudata[0].map((item) => {
                return(
                    <>
                    <div className ="random"key={item._id}>
                        <div className="col-md-7">
                            <b>{item.menu_id}</b> &nbsp;
                            <img src={item.menu_image} style={{width:80,height:80}}/>&nbsp;
                            {item.menu_name}- Rs.{item.menu_price}
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-success"
                            onClick={() => {this.placeOrder(item.menu_id)}}>Add
                                {/* <span className="glyphicon glyphicon-plus"/> */}
                            </button> &nbsp;
                            <button className="btn btn-danger"
                            onClick={() => {this.removeOrder(item.menu_id)}}>Remove
                                {/* <span className="glyphicon glyphicon-minus"/> */}
                            </button>
                        </div>
                    </div>
                    <hr/>
                    </>
                )
            })
        }
    }

    render(){
        return(
            <div>
                <div className="col-md-12 bg-info">
                    <h1>Items Added To Cart</h1>
                    Item Number {this.renderCart(this.orderId)} Added
                </div>
                <div className="col-md-12 ">
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }
}

export default MenuDisplay;