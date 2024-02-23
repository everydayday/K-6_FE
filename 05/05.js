const handleClick = () =>{
    
    const bts = document.querySelectorAll("img");
    console.log("here");

    bts.forEach((item) =>{
        const n = Math.floor(Math.random() * 6) + 1;
        item.setAttribute("src",`../04/img/${n}.png`);
    
    });    
    
    
 
 
 };