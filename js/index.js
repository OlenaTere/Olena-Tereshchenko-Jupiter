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
const lists = document.querySelector("ul");
console.log(lists);

const listsArray = Array.from(lists);
console.log(listsArray);


//Asynchronous Programming And Promises Lesson

//Handle Message Form Submit
const messageForms = document.getElementsByName("leave_message")
console.log(messageForms);
const messageForm = messageForms[0];

//Create a variable named messageSection
const messageSection = document.getElementById("messages");
messageSection.hidden = true;

//Create a variable named messageList
const messageList = messageSection.getElementsByTagName("ul");
console.log(messageList);


//callback for submit
//Add an event listener
messageForm.addEventListener(`submit`, (event) => {
    //prevent the default refreshing behavior
    event.preventDefault();
    const data = new FormData(event.target);
console.log(data);

//create three new variables (one for each of the three form fields) and retrieve the value from the event
const userName = data.get("usersName");
const email = data.get("usersEmail");
const usersMessage = data.get("usersMessage");
console.log(userName);
console.log(usersEmail);
console.log(usersMessage);

//Create a variable named newMessage
const newMessage = document.createElement("li");

//set the inner HTML
newString = `<a href="mailto:${email}">${userName}</a><span>${usersMessage}</span>`;
console.log(newString);
newMessage.innerHTML = newString;

//Append the removeButton to the newMessage element
newMessage.appendChild(removeButton);

//Append the newMessage to the messageList element
messageList[0].appendChild(newMessage);

//reset
event.target(reset);

});


//Add remove button
//Create a variable named removeButton
const removeButton = document.createElement("button");

//Set the inner text to "remove"
removeButton.innerText = "Remove";

//Set the type attribute to "button"
removeButton.setAttribute("type", "button");

//callback for remove button
//Add an event listener to the removeButton
removeButton.setAttribute("id", "removeButtonId");
function onRemoveButton(event) {
    console.log(Remove);
    const entry = event.target.parentNode;
    entry.remove();
};







