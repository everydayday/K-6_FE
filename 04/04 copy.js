document.addEventListener("DOMContentLoaded",()=>{
    // 버튼을 가져오기    
    const bt1 = document.querySelector("#btn");

    // 버튼 이벤트 달기
    bt1.addEventListener("click", ()=>{
        handleClick();
    });
});

// 변수에 함수 할당한 것
// 함수 호출과 같다
const handleClick = ()=>{
   const n = Math.floor(Math.random() * 6) + 1;
   console.log("click", n); 
   const img = document.querySelector("#img");
   img.setAttribute("src",`img/${n}.png`);
   


};