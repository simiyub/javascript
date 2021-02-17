let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/firefox.png'){
        myImage.setAttribute('src','images/chrome.png')
    }
    else{
        myImage.setAttribute('src', 'images/firefox.png')
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUser(){
    let myName = prompt('Please enter your name')
    if (!myName){
        setUser();
    }
    else{
        localStorage.setItem('name',myName)
        myHeading.textContent = `Love this website ${myName}`
    }
    }

 //   localStorage.setItem('name', myName)
   // myHeading.textContent = "Love this website " + myName


if (localStorage.getItem('name')){
    setUser()
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Love this website " + storedName
}

myButton.onclick = function(){
    setUser()
}