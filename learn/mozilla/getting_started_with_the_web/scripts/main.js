let myImage;
myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png'){
        myImage.setAttribute('src','images/chrome.png');
    }
    else{
        myImage.setAttribute('src', 'images/firefox.png');
    }
}