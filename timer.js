document.addEventListener("DOMContentLoaded", function(){
    //timer function
    function showTime(){
        let currentDate = new Date();
        //minutes and hour - 0
        let minutes = currentDate.getMinutes();
        if(minutes<10)
            minutes = '0'+minutes;
        let hour = currentDate.getHours();
        if(hour<10)
            hour = '0'+hour;
        //greeting
        welcome = document.getElementsByClassName("welcome")[0];
        if(hour>=6 && hour<12)
            welcome.innerHTML = "Good morning";
        if(hour>=12 && hour<18)
            welcome.innerHTML = "Good afternoon";
        if(hour>=18 && hour<24)
            welcome.innerHTML = "Good evening";
        if(hour>=0 && hour<6)
            welcome.innerHTML = "Good night";
        //send to DOM element
        document.getElementById("timer").innerHTML = hour+":"+minutes;
        setTimeout(showTime,1000);
    }
    //set user name
    function getUser(){
        if(localStorage.getItem("username") === null){
            //show add-container
            document.getElementById("adduser-container").style.visibility = "visible";
            //input listener 
            let adduserInput = document.getElementById("adduserInput");
            adduserInput.addEventListener("change",function(){
                //set local storage
                localStorage.setItem("username",adduserInput.value);
                //hide add-container
                document.getElementById("adduser-container").style.visibility = "hidden";
                //show name
                document.getElementsByClassName("name")[0].innerHTML = localStorage.getItem("username");
            });
        }else{
            //show name
            document.getElementsByClassName("name")[0].innerHTML = localStorage.getItem("username");
        }
    }
    //random background image
    function randomImage(){
        let randomImage = Math.floor(Math.random() * 19)+1;
        console.log(randomImage);
        document.getElementsByClassName("header_image")[0].style.backgroundImage = "url(img/background"+randomImage+".jpg)";
    }
    //triggering
    showTime();
    getUser();
    randomImage();
});