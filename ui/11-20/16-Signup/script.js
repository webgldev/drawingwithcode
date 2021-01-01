/*

[1] workflow

1. 인풋에 텍스트를 입력 시, input에 filled class가 추가되면서
   라벨 텍스트가 transform: scale(.8) translateY(-80%);이 적용되어 위로 up 됨
   초록라인이 transition: .3s ease-in-out; 가 적용되어 애니메이션이 좌측에서 우측으로 초록 color가 색칠됨
2. 인풋에 텍스트를 지울 시, 라벨 텍스트가 원래 위치로 down 되면서 초록라인 사라짐
3. signup 버튼을 누를 시 인풋 필드가 하나라도 비어있으면 error class가 추가되면서 레드 라인이 생김
4. signup 버튼을 누를 시 인풋 필드가 모두 채워져있으면
   sign-up class에 submit class가 추가되면서
   signup 버튼은 color가 초록색으로 변하면서
   버튼을 클릭 시 popup class에 active class가 추가되면서 0.5초 후에 팝업창이 오픈됨
5. 사용자가 입력한 name input에 작성한 text는 popup에 innertext name에 동일하게 적용되어 출력됨
   (현재는 onkeyup 으로 text 입력시에 바로 dom에 출력되도록 해두었는데
    onchange로 바꿔서 text 입력 완료시에 dom에 출력되는걸로 수정해도됨)
6. 팝업창에서 닫기 버튼이나 다른 영역을 누르면 팝업창이 닫히면서 브라우저가 reload 됨

[2] UX flow

지금 이건 간단한 Signup 프로토타입을 만들기위해서 모달을 만든건데
Signup 버튼을 누를 시 모달이 나오는 과정을 생략하고 
바로 마이페이지로 이동하거나 메인페이지로 이동하는게
회원가입 step을 줄일 수 있어서 UX가 한단계 개선됨

*/

const signUp = document.querySelector(".sign-up");

let inputs = signUp.querySelectorAll("input");
let button = signUp.querySelector("button");

let fillCheck = (input) => {
	if (input.value != "") {
		input.classList.add("filled");
		input.classList.remove("error");
	} else {
		input.classList.remove("filled");
	}
}

inputs.forEach((input) => {
	input.addEventListener("keyup", () => { fillCheck(input) });
	input.addEventListener("blur", () => { fillCheck(input) });
});

button.addEventListener("click", () => {
	let error = 0;
	inputs.forEach((input) => {
		if (input.value === "") {
			input.classList.add("error");
			error++;
		}
	});
	if (error === 0) {
    signUp.classList.add("submit");
    setTimeout(function(){
      document.querySelector(".popup").classList.add("active");
      },500);
	}
})

document.querySelector(".popup").addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("active");
  window.location.reload();
});

function userName()  {
  const name = document.getElementById('signup-user-name').value;
  document.getElementById("name").innerText = name;
}