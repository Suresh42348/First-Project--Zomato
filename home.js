function changeMode(){
    var mybody = document.body;
    mybody.classList.toggle('mydark');
    var elements = document.getElementsByClassName('a');
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.color="white";
    // changing logo color properties
    document.getElementById('logo').style.backgroundColor="black";
    document.getElementById('logo').style.color="white";
    document.getElementById('logo').style.border="2px solid red";
    document.getElementById('btn').style.value="Light Mode";

}
}
function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
}

//dynamic dropdown
const cityUrl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId=";
const getCity = async() => {
    let response = await fetch(cityUrl)
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option')
        let text = document.createTextNode(item.state)
        element.appendChild(text)
        element.value = item.state_id;
        document.getElementById('city').appendChild(element)
    })
}

const getRest = () => {
    const cityId = document.getElementById('city').value;
    const rest =  document.getElementById('restaurant');

    while(rest.length > 0){
        rest.remove(0)
    }

    fetch(`${restUrl}${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            let element = document.createElement('option') // <option></option>
            let text = document.createTextNode(`${item.restaurant_name}|${item.address}`) // delhi
            element.appendChild(text) //<option>delhi</option>
            rest.appendChild(element)
        })
    })
}