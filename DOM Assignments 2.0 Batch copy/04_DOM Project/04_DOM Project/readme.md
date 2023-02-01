## Task1
![This is an image](Output/DOM%20P1%20SS.png)
 ### project solution :
 
 ``` java script 
    let nowapFlex = document.querySelector(".slide-container")
        nowapFlex.style.flexWrap ='nowrap'; 
        let n = 1;
           while (n <= 5) {
               let bgc = document.querySelector(`div:nth-child(${n}) div:nth-child(5)`);
               if(n === 1){
                   bgc.style.backgroundColor ='#f5bc42';   
               }
              else if(n === 2){
                   bgc.style.backgroundColor ='#FF6666';   
               }
               else if(n === 3){
                   bgc.style.backgroundColor ='#f5a742';   
               }
               else if(n === 4){
                   bgc.style.backgroundColor ='#02fa23';  
               }
               else if(n === 5){
                   bgc.style.backgroundColor ='#02f2fa';   
               }
              n++;
             }
```