/*
- 화살표를 누르면 이미지 변경
- 슬라이드를 체크하면 3초마다 자동으로 이미지 변경
- 사진 하단의 원을 누르면 해당 이미지로 변경
- script.js 파일만 수정 가능
*/

const carouselContainer = document.querySelector('.carousel-container');
const carouselImg = carouselContainer.querySelector('.carousel-img');
const previous = carouselContainer.querySelector('.previous');
const next = carouselContainer.querySelector('.next');
const indicatorList = carouselContainer.querySelector('.indicator-list');
const slide = carouselContainer.querySelector('#slide');
const imagePath = ['img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img9.jpg'];
const imageCnt = imagePath.length;

let idx = 0;
let interval = setInterval(autoSlide, 3000);

// 좌우 이동
previous.onclick = function(event) {
    event.stopPropagation();
    
    idx--;
    changeImg();
    resetInterval();
};
next.onclick = function(event) {
    event.stopPropagation();

    idx++;
    changeImg();
    resetInterval();
};

// 클릭 이동
indicatorList.onclick = function(event) {
    event.stopPropagation();

    if (event.target.nodeName == 'LI') {
        idx = event.target.value;
        changeImg();
        resetInterval();
    }
};

// 자동 슬라이드
function autoSlide() {
    if (slide.checked) {
        idx++;
        changeImg();
    }
}

function changeImg() {
    if (idx >= imageCnt) {
        idx -= imageCnt;
    } else if (idx < 0) {
        idx += imageCnt;
    }

    carouselImg.src = `https://kei9641.github.io/test/assets/images/${imagePath[idx]}`;
};

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(autoSlide, 3000);
}