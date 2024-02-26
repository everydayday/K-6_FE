const handleChange = (s1, s2, lb1, lb2, t1, t2) => {
  if(s1.value === "℃") {  //s1.value : 지금 나타내는 값
    s2.value = "Ｆ";
    lb1.innerHTML = "℃";  // or content 
    lb2.innerHTML = "F";
  }
  else {
    s2.value = "℃";
    lb1.innerHTML = "F";
    lb2.innerHTML = "℃";

  }

  t1.value ="";
  t1.focus();
  t2.value ="";
}



document.addEventListener("DOMContentLoaded",()=>{  // dom(html)이 만들어졌을때
  // 필요한 요소 잡아주기
  const sell = document.querySelector("#sel1");
  const sel2 = document.querySelector("#sel2");

  const txt1 = document.querySelector("#txt1");
  const txt2 = document.querySelector("#txt2");

  const labels = document.querySelectorAll("label");


  // 글자 부분 바뀔 시(change) 발생 이벤트
  txt1.addEventListener("input",()=>{ // input 해야 한글자씩 반영됨
    console.log(txt1.value);
    if (sel1.value == "℃"){
      // 섭씨온도를 화씨온도로
      txt2.value = parseFloat(txt1.value) * (9/5)) + 32;
    }
    else{
      // 화씨온도를 섭씨온도로
      txt2.value = ((5/9)* (parseFloat(txt1.value) - 32));

    }
  });


  txt2.addEventListener("input",()=>{
    console.log(txt2.value);
  });




  // 똑같은 코드 : 함수로 만들어
  sel1.addEventListener("change", ()=>{
    txt1.value = "";
    handleChange(sel1,sel2, labels[0], labels[1], txt1, txt2);

  });
  sel2.addEventListener("change", ()=>{
    handleChange(sel1,sel2, labels[0], labels[1], txt1, txt2);

  });

});

