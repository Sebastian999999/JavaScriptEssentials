let count = 0;
function increaseCount(){
    count++;
    displayCount();
    checkCount();
}
function displayCount(){
    document.getElementById("countDisplay").innerHTML = count;
}
function checkCount(){
    if (count == 10){
        alert("Your Instagram post gained 10 followers! Congratulations!");
    }
    else if (count == 20){
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}
function resetCount(){
    count = 0;
    document.getElementById("countDisplay").innerHTML = count;
    alert("Your follower countb has been reset.!!!");
}