let accordian = document.querySelectorAll(".accordian h3");


accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});


  
for(let i = 0; i<4 ; i++){
  let b = document.querySelectorAll(".accordian h3")[i].style.backgroundColor = "#c2eced";
}

// let skillH = document.createAttribute('h3')
// let skillP = document.createAttribute('p')
//  skillH.inner = "Skill"
//  skillP.innerText =
//  let h = document.querySelector(".accordian")
//  h.appendChild(skillH)

 let skillH = document.createElement('h3')
 skillH.innerHTML = "Skill";
 skillH.style.backgroundColor = "#c2eced";
 let parentH = document.querySelector("div div:nth-child(4)")
 parentH.appendChild(skillH);

 let skillP = document.createElement('h3')
 skillP.innerHTML = "I posses avery good command over the full Stack Development technologies like MERN which can be seen in my work over the Githud";
 let parentP = document.querySelector("div div:nth-child(4)")
 parentP.appendChild(skillP);