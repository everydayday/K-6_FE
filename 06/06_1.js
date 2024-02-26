document.addEventListener("DOMContentLoaded",()=>{
    console.log("here");
    const bts = document.querySelectorAll("section button");
    
    for(let [idx, bt] of bts.entries()){
    // bt.innerHTML.slice(-1);
        console.log(idx);
        
        bt.addEventListener("click",()=>{
            const num = Math.floor(Math.random() * 6) + 1;
        
            const imgs = document.querySelectorAll("section div img");
            //imgs[0] .setAttribute("src",`../04/img/${num}.png`);
            //imgs[1] .setAttribute("src",`../04/img/${idx+1}.png`);

            const img = document.querySelector("section div img:nth-child(2)");
            img.setAttribute("src",`../04/img/${idx+1}.png`);
            
            let msg;
        

            if(num == idx+1){
             msg = "정답입니다.";
            }else{
                msg = "틀렸습니다.";
            }

            document.querySelector("#msg").innerHTML = ` <h2>${msg}</h2>`;

        });
        


    }
});