//footer

const footer = document.createElement("footer")
const body = document.querySelector("body")
body.appendChild(footer)

//date
const today = new Date()
const thisYear = today.getFullYear()

//copyright
const copyright = document.createElement("p")
copyright.innerHTML = `© O. Tereshchenko ${thisYear}`

//copiright to footer
footer.appendChild(copyright)

//skills
const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul")
for (let i=0; i < skills.length; i++) {
    const skill = document.createElement("li")
    skill.innerHTML = skills[i]
    skillsList.appendChild(skill)

}
const lists = document.querySelector("ul")
console.log(lists)

const listsArray = Array.from(lists)
console.log(listsArray)
