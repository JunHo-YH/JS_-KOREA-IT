// document.f1.user_pw1.style.background = '#6a9f82';
// form요소에 name.속성이 들어가있으면 이렇게 사용 가능

// document.f1.onsubmit = function() {
//      submit은 이렇게 이벤트 처리한다.
// }
var f1 = document.f1;

f1.addEventListener('submit', function () {
    f1.user_pw2.value = f1.user_pw1.value;
    f1.user_pw2.disabled;
    return false;
});

// f1.addEventListener('submit', function () {
//     if(f1.user_pw1.value == f1.user_pw2.value) {
//         alert("비밀번호가 일치합니다.");
//     } else {
//         alert("비밀번호가 일치하지 않습니다.");
//     }
// })
