const handleClick = () =>{
    
    const bts = document.querySelectorAll("section > div > img");
    console.log("here");
    const btsNum = [1, 1, 1];

    //for of  쌍으로 받아들임 idx 사용 가능 : 추천
    // 객체 index도 뽑을 수 있어
    for(let [idx, bt] of bts.entries()){
        const n = Math.floor(Math.random() * 6) + 1;
        bt.setAttribute("src",`../04/img/${n}.png`);
        btsNum[idx] = n;
        console.log(btsNum);
    }

    // 방법 1. 기본 for
    // for(let i = 0; i < bts.length; i++){
    //     const n = Math.floor(Math.random() * 6) + 1;
    //     bts[i].setAttribute("src",`../04/img/${n}.png`);
    // }

    //방법 2. for in 거의 안 씀. 다른 정보도 나옴
    // for(let i in bts){
    //     const n = Math.floor(Math.random() * 6) + 1;
    //     bts[i].setAttribute("src",`../04/img/${n}.png`);
    //     console.log("for in i=", bts[i]);
    // }

    // 방법 3. for of => 파이썬의 for in
    
    // for(let bt of bts){
    //     const n = Math.floor(Math.random() * 6) + 1;
    //     bt.setAttribute("src",`../04/img/${n}.png`);
    //     console.log("for of")
    // }



    // 방법 4. forEach
    // bts.forEach((item) =>{
    //     const n = Math.floor(Math.random() * 6) + 1;
    //     item.setAttribute("src",`../04/img/${n}.png`);
    
    // });    
    
    
 
 
 };