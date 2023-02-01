## Task1
![This is an image](firstAssignmentImage/task1Output.png)
 ### project solution :
 
 ``` java script 
    let hireMe = document.createElement('li')
    hireMe.innerHTML = "<a>Hire Me</a>"
    let parent = document.querySelector("header nav ul")
    parent.appendChild(hireMe)
```
    

    ## Task 2
![This is an image](firstAssignmentImage/task2Output.png)
 ### project solution :
 
 ``` java script 
    document.getElementsByTagName("input")[0].placeholder = "Search My Project"
```
    ## Task 3
![This is an image](firstAssignmentImage/task3Output.png)
 ### project solution :
 
 ``` java script 
   
     document.getElementsByTagName("span")[2].innerText = "an Employee"
 
     document.getElementsByTagName("span")[3].innerText = "iNeuron Intelligence Pvt Ltd."
```
      ## Task 4
![This is an image](firstAssignmentImage/task4Output.png)
 ### project solution :
 
 ``` java script 
 document.getElementsByTagName("img")[0].src = "./hitesh_sir.png"
```
       ## Task 5
![This is an image](firstAssignmentImage/task5Output.png)
 ### project solution :
 
 ``` java script 
      let buttonSupportMe = document.createElement("button")
      buttonSupportMe.innerText = "Support Me"
      let supportMe = document.querySelector("body section div div")
      supportMe.appendChild(buttonSupportMe)
```
   
  ##  secondAssignmentImage

## Task 1
![This is an image](secondAssignmentImage/task1Output.png)
 ### project solution :
 
 ``` java script 
    for(let i = 0; i<4 ; i++){
  let b = document.querySelectorAll(".accordian h3")[i].style.backgroundColor = "#c2eced";
}
```
## Task 2
![This is an image](secondAssignmentImage/task2Output.png)
 ### project solution :
 
 ``` java script 
    let skillH = document.createElement('h3')
 skillH.innerHTML = "Skill";
 skillH.style.backgroundColor = "#c2eced";
 let parentH = document.querySelector("div div:nth-child(4)")
 parentH.appendChild(skillH);

 let skillP = document.createElement('h3')
 skillP.innerHTML = "I posses avery good command over the full Stack Development technologies like MERN which can be seen in my work over the Githud";
 let parentP = document.querySelector("div div:nth-child(4)")
 parentP.appendChild(skillP);
 ```

 ##  thirdAssignmentImage

 ## Task 1
![This is an image](thirdAssignmentImage/task1Output.png)
 ### project solution :
 
 ``` java script 
   // User Output Board
     document.getElementsByClassName("enterName")[0].placeholder="FSJS 2.O"
    document.getElementsByClassName("enterMail")[0].placeholder="FSJS@iNeuron.ai"
    document.getElementsByClassName("enterMessage")[0].placeholder="Hello World"

// User Input Board
    document.getElementsByClassName("userName")[0].placeholder="FSJS 2.O"
    document.getElementsByClassName("userEmail")[0].placeholder="FSJS@iNeuron.ai"
    document.getElementsByClassName("userMessage")[0].placeholder="Hello World"
 ```