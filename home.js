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