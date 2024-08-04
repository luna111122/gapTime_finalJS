var study = document.querySelector(".study-group");
let bttns = true; // 상태 변수 초기화
const color1 = '#d8d5e1'; // 첫 번째 색상
const color2 = '#FFFFFF'; // 두 번째 색상

study.addEventListener("click", function() {
    if (bttns) {
        study.style.backgroundColor = color1; // 배경색 변경
        bttns = false; // 상태 변경
    } else {
        study.style.backgroundColor = color2; // 원래 배경색으로 변경
        bttns = true; // 상태 변경
    }
});

var health = document.querySelector(".health-group");
let bttnss = true; // 상태 변수 초기화
const color3 = '#d8d5e1'; // 첫 번째 색상
const color4 = '#FFFFFF'; // 두 번째 색상

health.addEventListener("click", function() {
    if (bttnss) {
        health.style.backgroundColor = color3; // 배경색 변경
        bttnss = false; // 상태 변경
    } else {
        health.style.backgroundColor = color4; // 원래 배경색으로 변경
        bttnss = true; // 상태 변경
    }
});

var calture = document.querySelector(".calture-group");
let bttnsss = true; // 상태 변수 초기화
const color5 = '#d8d5e1'; // 첫 번째 색상
const color6 = '#FFFFFF'; // 두 번째 색상

calture.addEventListener("click", function() {
    if (bttnsss) {
        calture.style.backgroundColor = color5; // 배경색 변경
        bttnsss = false; // 상태 변경
    } else {
        calture.style.backgroundColor = color6; // 원래 배경색으로 변경
        bttnsss = true; // 상태 변경
    }
});

var dinner = document.querySelector(".dinner-group");
let bttnssss = true; // 상태 변수 초기화
const color7 = '#d8d5e1'; // 첫 번째 색상
const color8 = '#FFFFFF'; // 두 번째 색상

dinner.addEventListener("click", function() {
    if (bttnssss) {
        dinner.style.backgroundColor = color7; // 배경색 변경
        bttnssss = false; // 상태 변경
    } else {
        dinner.style.backgroundColor = color8; // 원래 배경색으로 변경
        bttnssss = true; // 상태 변경
    }
});