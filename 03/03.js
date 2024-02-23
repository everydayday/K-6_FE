// DOM tree가 완성된 후 실행
document.addEventListener("DOMContentLoaded", () => { // domcontent가 완성되었다는 이벤트 객체 생성
  console.log("DOMContentLoaded ok")                  // => 완성되면 콜백.. 함수 호출


  // 버튼 생성
  const bt3 = document.createElement("button");
  const bt3Txt = document.createTextNode("버튼3");  

  bt3.setAttribute("id", "bt3")


  // 버튼 추가하기
  document.querySelector("#btArea2").append(bt3);
  bt3.appendChild(bt3Txt) // 텍스트는 버튼의 child 임

  // 버튼 이벤트 달기
  bt3.addEventListener("click", ()=>{
    handleClick(3);

  });


  const bt4 = document.createElement("button");
  const bt4Txt = document.createTextNode("버튼4");
  document.querySelector("#btArea2").append(bt4);
  bt4.appendChild(bt4Txt);
  bt4.addEventListener("click",()=>{
    handleClick(4);
  });
  bt4.setAttribute("id","bt3");

});



// function handleClick(n){
//     // 메시지 영역 가져오기 1
//     //document.getElementById("msgArea").innerHTML = "안녕하세요.";

//     // 메시지 영역 가져오기 2
//     // document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다.</h2>";
//     document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이 눌러졌습니다.</h2>`;
// }



/*
    함수 작성 2 : 화살표 함수 : 콜백 함수
*/

const handleClick = (n) => {  
  let msg;
  if (n == 1) msg = "안녕하세요.";
  else if(n==2) msg="안녕히 가세요.";
  else msg = `버튼 ${n}이 생성되었습니다.`;
  document.querySelector("#msgArea").innerHTML = ` <h2>${msg}</h2>`;
  //  document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이 눌러졌습니다.</h2>`;

} 

