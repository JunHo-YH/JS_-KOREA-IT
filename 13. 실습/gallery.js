var bigImg = document.getElementById('photo');
var photoWrap = document.getElementById('photoWrap');
var photoList = document.getElementById('photoList');
var list = photoList.getElementsByTagName('li');
var beforeBtn = document.querySelector('.before_btn')
var nextBtn = document.querySelector('.next_btn')
// 1. 좌우 버튼을 클릭시 100씩 좌우로 움직이기 마지막 3개 리스트에서는 더이상 움직이지 않도록
photoList.style.marginLeft = "0px";
nextBtn.onclick = function() {
  if ( photoList.style.marginLeft == "-500px" ) { return false; }
  else {
    photoList.style.marginLeft = (parseInt(photoList.style.marginLeft)  - 100) + "px";
  }
}
beforeBtn.onclick = function() {
  if ( photoList.style.marginLeft == "0px" ) { return false; }
  else {
    photoList.style.marginLeft = (parseInt(photoList.style.marginLeft) + 100) + "px";
  }
}
// 2. #photoList li를 클릭하면 li의 자식요소의 href 속성값으로 큰이미지가 바뀌도록
for( var i=0; i<list.length; i++) {
  list[i].onclick = function() {
    photo.src = this.childNodes[0].href;
    visual();
    event.preventDefault();
  }
}
var num = 0;
function visual() {
    num += 0.005;
    bigImg.style.opacity = num;
    var moving = setTimeout(visual, 1)
    if ( num > 1) {
      clearTimeout(moving);
      num = 0;
    }
}
