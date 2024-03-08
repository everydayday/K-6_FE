document.addEventListener("DOMContentLoaded",()=>{
  const btn = document.querySelector("#btn");
  const numbers = document.querySelector("#numbers");

  let nums = [];
  btn.addEventListener("click",()=>{
    // 배열 초기화
    nums = [];
    nums.length = 0; // 이런 방법도 있다.

    // 1~45까지 랜덤수 중복되지 않게 7개 만들기
    while(nums.length < 7){
      let n = Math.floor(Math.random()*45+1);
      if(!nums.includes(n)){    // ! 없을 때
        n = `<span class = "sp${parseInt(n/10)}">${n}</span>`;
        
        nums.push(n);

      }
      

        
      
      
    }

    // 반복해서 돈다면 map을 사용해보자
    //let tags = '';
    // nums.map((v,i)=>{ // i : index
    //   // 숫자에 따라 색깔 다르게 하기

    //   // 백틱 사용하기
    //   tags = tags + `<span class = 'sp${parseInt(v/10)}'>${v}</span>`;
    //   if (i === 5)
    //     tags = tags + `<span> + </span>`;
      
      
    //   console.log(tags);
    // });

    // numbers.innerHTML = tags;

    // et tags = [];
    // tags = nums.map(v => `<span class = "sp${parseInt(v/10)}">${v}</span>`);  // i 없어도 됨
    // tags.splice(6,0,`<span>+</span>`);

    //let s = tags.toString();
    //s = s.replaceAll(',',""); // replaceAll : 반환해줌

    //numbers.innerHTML = tags.toString().replaceAll(",","");

    //numbers.innerHTML = nums.map(v => `<span class = "sp${parseInt(v/10)}">${v}</span>`).toString().replaceAll(",","");
   
    //nums.splice(6,0,`<span>+</span>`);    
    numbers.innerHTML = nums.splice(6,0,`<span>+</span>`).toString().replaceAll(',',""); // 한 줄로 할 수 있다면 한 줄로 해보자
    
    
    // let spans = document.querySelectorAll("span");
    // console.log(spans[0].innerHTML);

    // spans.innerHTML = nums.map((v,i)=>v[i]);
    // for(let i in zip(spans,numbers)){
      
    //   spans[i].innerHTML = numbers[i];
    // }

    
    // console.log(spans);



  });

  



});