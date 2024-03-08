document.addEventListener("DOMContentLoaded",()=>{
  // DOM 생성 후에 img, input, button 가져오기
  const upDownImg = document.querySelector("img");
  const numInput = document.getElementById("num1");
  const bt = document.querySelector("button");
  const msg = document.querySelector("#msg");

  // input focus
  numInput.focus();

  // 랜덤수 생성 변수
  let n ; // undefined 변수 있음 in javascript
  let flag = false; // flag 장치 이용

  // 버튼의 클릭이벤트 달기
  bt.addEventListener("click",()=>{
    if(!flag){   
      n = Math.floor(Math.random()*100+1);
      console.log("n=",n);
      flag = true;

      // 입력 초기화
      numInput.style.display = "inline";
      numInput.value = "";
      numInput.focus();
      bt.innerHTML = "확인";
      upDownImg.setAttribute("src","img/what.png")
    }

    // input 박스 내용가져오기
    if (numInput.value == ''){
      // alert("숫자를 입력하세요.");
      document.querySelector("#msg").innerHTML = "<span>숫자를 입력하세요.</span>";
      numInput.focus();
      return;
    }

    // 숫자비교
    if(n === parseInt(numInput.value)){
      msg.innerHTML = "<span>정답입니다.</span>";
      upDownImg.setAttribute("src","img/good.png");
      numInput.style.display = "none";
      bt.innerHTML = "재시작";
      flag = false; // 초기값으로 세팅
      bt.addEventListener

    }
    else if(n > numInput.value){
      msg.innerHTML = "<span>UP</span>";
      upDownImg.setAttribute("src","img/up.png");
    }
    else{
      msg.innerHTML = "<span>DOWN</span>";
      upDownImg.setAttribute("src","img/down.png");
    }    
  });

});