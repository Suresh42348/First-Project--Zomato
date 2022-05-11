List of City
https://zomato42348.herokuapp.com/location http://localhost:9700/location

List of Restaurants
https://zomato42348.herokuapp.com/restaurants http://localhost:9700/restaurants

List of Restaurants wrt to City
https://zomato42348.herokuapp.com/restaurants?stateId=1 http://localhost:9700/restaurants?state_id=4

List of MealType
https://zomato42348.herokuapp.com/quicksearch http://localhost:9700/mealType

//Page2

List of restaurants on basis of meal
https://zomato42348.herokuapp.com/restaurants?mealtype_id= http://localhost:9700/restaurants?meal_id=4

Filter on basis of cuisine
https://zomato42348.herokuapp.com/filter/4?cuisine=1

Filter on basis of cost
https://zomato42348.herokuapp.com/filter/1?hcost=1000&lcost=500

Sort (low to High)
//page3

Details of restaurants
http://zomato42348.herokuapp.com/details/1 http://localhost:9700/details/618776b162a1816f885956bf

Menu on the basis of restaurants

http://localhost:9700/menu?restId=8

//page4

Menu details of item selected (POST)> localhost:9700/menuItem (body)> [1,4,6]

Place Order (post) > localhost:9700/placeOrder (body) > { "name":"Aakash", "email":"aakash@gmail.com", "address":"Hno 23,Sector 1", "phone":97876733, "cost":431, "menuItem":[34,26,17], "status":"Pending" }

//page5

See all order place

localhost:9700/viewOrder Get Order on basis of emailId

localhost:9700/viewOrder?email=aakash@gmail.com

//update order (put) localhost:9700/updateOrder/62514d42f5aec503b2e0f2a9 (body) { "status":"In Transit", "bankName":"Axis Bank" }