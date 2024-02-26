document.addEventListener("DOMContentLoaded",()=>{
    const bt1 = document.querySelector("#btn");
    


    bt1.addEventListener("click",()=>{
        
        const num1 = Math.floor(Math.random() * 6 )+1;           // Math.floor 소수점 버림
        const num2 = Math.floor(Math.random() * 6 )+1;           
        const num3 = Math.floor(Math.random() * 6 )+1;   
           
        const img1 = document.querySelector("#img1").setAttribute("src",`img/${num1}.png`);
        const img2 = document.querySelector("#img2").setAttribute("src",`img/${num2}.png`);
        const img3 = document.querySelector("#img3").setAttribute("src",`img/${num3}.png`);
    
    });
    
});


