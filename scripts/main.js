//ロゴイメージスイッチャ

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Firefox_logo_2019.png') {
        myImage.setAttribute ('src','images/Firefox_logo_2013.png');
    } else {
        myImage.setAttribute('src','images/Firefox_logo_2019');
    }
}

//パーソナライズされたウェルカムメッセージ

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        myHeading.innerHTML = 'Mozilla はすばらしいよ、' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla はすばらしいよ、' + storedName;
}

//ボタンクリックイベント

myButton.onclick = function() {
    setUserName();
}

