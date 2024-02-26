// document.addEventListener("DOMContentLoaded",()=>{
//     const bts = document.querySelectorAll("section button");
    
//     for(let [idx, bt] of bts.entries()){
//         const n1 = Math.floor(Math.random() * 6) + 1;
//         const n2 = Math.floor(Math.random() * 6) + 1;

//         const img1 = document.querySelector("#img1").setAttribute("src",`img/${n1}.png`);
//         const img2 = document.querySelector("#img2").setAttribute("src",`img/${n2}.png`);

//         if(n1 == n2){

//         }



//     }
    



//     bts.addEventListener("click",()=>{
        
//         const num1 = Math.floor(Math.random() * 6 )+1;           // Math.floor 소수점 버림
//         const num2 = Math.floor(Math.random() * 6 )+1;           
//         const num3 = Math.floor(Math.random() * 6 )+1;   
           
//         const img1 = document.querySelector("#img1").setAttribute("src",`img/${num1}.png`);
//         const img2 = document.querySelector("#img2").setAttribute("src",`img/${num2}.png`);
//         const img3 = document.querySelector("#img3").setAttribute("src",`img/${num3}.png`);
    
//     });
    
// });


const handleClick = (n) => { 
    const img1 = document.querySelector("#img1") ;
    const img2 = document.querySelector("#img2") ;

    const nc = Math.floor(Math.random() * 6) + 1;

    img1.setAttribute("src", `./img/${nc}.png`);
    img2.setAttribute("src", `./img/${n}.png`);
  
    if (n == nc) {
      document.querySelector("#msg").innerHTML = "맞음" ;
    }
    else {
      document.querySelector("#msg").innerHTML = "틀림" ;
    }

}
