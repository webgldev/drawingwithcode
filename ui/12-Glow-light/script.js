const count = 200;     // 작은 불빛 갯수 200
const blurCount = 150; // 큰 불빛 갯수 150

const stage = document.querySelector(".stage");

/*
- 반복문으로 count 숫자보다 작을 시 makeLight 함수 실행
- setTimeout 으로 함수가 한번 실행 후 종료
- 10 * i (count 보다 작은 수)만큼 밀리초(ms)가 지나야 함수가 실행됨
*/
for (let i = 0; i < count; i++) {
  setTimeout(() => {
    makeLight(i);
  }, 10 * i);
}

/*
- makeLight가 한번 종료되면 다시 실행이 안되어서
  반복해서 실행시키려 timer 함수를 생성하여 setInterval 적용
- 함수가 실행 시 설정해준 시간 '초' 뒤에
  count 보다 미만인 갯수에 makeLight 함수가 한번 실행되고
  setInterval로 반복해서 실행
*/
const timer = setInterval(() => {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      /*
      makeLight 함수 반복 실행 시
      span tag를 삭제해줘야 span tag가 반복적으로 계속 생성되지 않음
      삭제해주지 않으면 무한 span tag가 생성됨
      */
      const removespan = document.querySelector("span");
      removespan.parentNode.removeChild(removespan);
      // 삭제와 동시에 함수가 실행되면서 span tag 생성됨
      makeLight(i);
    }, 10 * i);
  }
}, 4000);

// makeLlight 함수로 큰 별, 작은 별 만들기
function makeLight(i) {

  // [1] 불빛을 먼저 생성
  // 함수 실행 시 span tag 생성
  let span = document.createElement("span");
  // 조건문으로 blurCount에 넣어준 숫자보다 i가 작으면
  // span tag에 blur class 추가
  if (i < blurCount) {
    span.classList.add("blur");
  }
  // stage 클래스 하위에 span 태그 연결
  stage.appendChild(span);

  // [2] 불빛 애니메이션 설정
  // 불빛에 애니메이션 주기 전에 기본 셋팅 설정
  gsap.set(span, {
    left: gsap.utils.random(0, stage.offsetWidth),  // 가로 위치 랜덤
    top: gsap.utils.random(0, stage.offsetHeight),  // 세로 위치 랜덤
    scale: gsap.utils.random(0.2, 1.2, 0.1),        // 크기 스케일 값으로 랜덤
    opacity: 0                                      // 투명값을 0으로 안보이게 먼저 설정
  });

  // [3] 애니메이션 효과 움직이고, 사라지게 만듬
  let tl = gsap.timeline({
    paused: true,       // 자기 자신을 가리킴
    onComplate: () => {
      span.remove();    // span tag 삭제
      makeLight(i);     // makeLight 함수 실행
    }
  })

  if (i < blurCount) {
    // [3-1] 큰 불빛 생성
    tl.to(span, {
      opacity: gsap.utils.random(0.1, 0),   // 큰 불빛 투명도
      duration: .8                          // 지속 시간 (초)
    })
    // [3-2] 불빛 움직임
    tl.to(span, {
      y: gsap.utils.random(-80, 80),        // 큰 불빛 y축 움직임
      x: gsap.utils.random(-80, 80),        // 큰 불빛 x축 움직임
      duration: gsap.utils.random(4, 2, 2), // 불빛 유지 지속시간
      ease: Power0.easeNone                 // 애니메이션 스타일
    }, -0.3)                                // 사라지는 시간 (초)
    // [3-3] 불빛 사라짐
    tl.to(span, {
      opacity: 0,   // 투명값 0으로 설정
      duration: .3  // (초) 동안 자연스럽게 나타남
    }, ">-0.8")     // (초) 동안 자연스럽게 사라짐
                    // Relative to the end of the most recently-added animation
                    // insert 0.3 seconds before the END of the most recently added animation (negative number)
                    // https://greensock.com/docs/v3/GSAP/Timeline/to()
    // [3-4] 불빛 실행
    tl.play();
  } else {
    // [3-1-1] 작은 불빛 생성
    tl.to(span, {
      opacity: gsap.utils.random(1, 1),     // 작은 불빛 투명도
      duration: .3                          // 지속 시간 (초)
    })
    // [3-2-1] 불빛 움직임
    tl.to(span, {
      x: gsap.utils.random(-40, 40),        // 작은 불빛 x축 움직임
      y: gsap.utils.random(-40, 40),        // 작은 불빛 y축 움직임
      duration: gsap.utils.random(5, 7, 2),
      ease: Power0.easeNone
    }, -0.3)
    // [3-3-1] 불빛 사라짐
    tl.to(span, {
      opacity: 0,
      duration: .3
    }, ">-0.3")
    // [3-4-1] 불빛 실행
    tl.play();
  }
}

