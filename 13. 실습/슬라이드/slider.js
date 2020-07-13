// 요소들 변수지정
const slider = document.getElementById('slider');
const sliderWrap = document.getElementById('sliderWrap')
const sliderList = document.getElementById('sliderList')
const list = document.getElementById('sliderList').getElementsByTagName('li');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const btnList = document.getElementById('btnNum').getElementsByTagName('span');
const active = document.querySelector('.active');
// 이동시 계산에 사용될 변수
const sliderLen = list.length; // slider length
const sliderWidth = list[0].clientWidth ; // slider width
const sliderSpeed = 500; // 복제된 요소로 돌아가는 시간차
const startNum = 0;
// 첫번째와 마지막 리스트 복제
let firstChild = sliderList.firstElementChild;
let lastChild = sliderList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true) ;
let clonedLast = lastChild.cloneNode(true);
console.log(clonedFirst, clonedLast)
// sliderList.insertBefore(clonedLast, firstChild)
sliderList.prepend(clonedLast)
sliderList.appendChild(clonedFirst)
// 전체 UL의 길이지정
sliderList.style.width = sliderWidth * (sliderLen+2) + "px";
// 현재 슬라이더 위치지정
sliderList.style.transform = "translate(-"+ sliderWidth +"px)";
// 좌우버튼 클릭시 이동
let curIndex = startNum;
let curSlider = list[curIndex];

next.onclick = function() {
  // -400 -800 -1200 -1600
  clearInterval(timer)
  if (  curIndex <= sliderLen -1 ) {
    sliderList.style.transition = "0.5s";
    sliderList.style.transform = "translate(-"+ (sliderWidth * (curIndex + 2))+"px)";
  }
  if ( curIndex === sliderLen-1 ) {
    setTimeout(function() {
      sliderList.style.transition = "0s";
      sliderList.style.transform = "translate(-"+ sliderWidth +"px)"
    }, 500)
    curIndex = -1;
  }
  ++curIndex;
  for ( let i=0; i<btnList.length; i++ ) {
    btnList[i].setAttribute('class', '')
  }
  btnList[curIndex].setAttribute('class', 'active')
}
prev.onclick = function() {
  clearInterval(timer)
  // -1600 -1200 -800 -400 0
  sliderList.style.transition = "0.5s";
  sliderList.style.transform = "translate(-"+ (sliderWidth * curIndex)+"px)";
  if ( curIndex === 0 ) {
    setTimeout(function() {
      sliderList.style.transition = "0s";
      sliderList.style.transform = "translate(-"+ (sliderWidth * sliderLen) +"px)"
    }, 500)
    curIndex = sliderLen;
  }
  --curIndex;
  for ( let i=0; i<btnList.length; i++ ) {
    btnList[i].setAttribute('class', '')
  }
  btnList[curIndex].setAttribute('class', 'active')
}
for ( let i=0; i<btnList.length; i++ ) {
  btnList[i].onclick = function () {
    clearInterval(timer)
    for ( let i=0; i<btnList.length; i++) {
        btnList[i].setAttribute('class', '')
    }
    this.setAttribute("class", "active");
    sliderList.style.transition = "0.5s";
    sliderList.style.transform = "translate(-"+ (sliderWidth*(i+1)) +"px)";
    curIndex = i;
  }
}
function autoSlider() {
  if ( curIndex === 0 ) {
    setTimeout(function() {
      sliderList.style.transition = "0s";
      sliderList.style.transform = "translate(-"+ (sliderWidth * sliderLen) +"px)"
    }, 500)
    curIndex = sliderLen;
  }
  --curIndex;
  for ( let i=0; i<btnList.length; i++ ) {
    btnList[i].setAttribute('class', '')
  }
  btnList[curIndex].setAttribute('class', 'active')
}
for ( let i=0; i<btnList.length; i++ ) {
  btnList[i].onclick = function () {
    clearInterval(timer)
    for ( let i=0; i<btnList.length; i++) {
        btnList[i].setAttribute('class', '')
    }
    this.setAttribute("class", "active");
}
let timer = setInterval(function() {
  next.onclick()
}, 2000)
