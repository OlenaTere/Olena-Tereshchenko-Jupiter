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
const messageForm = document.getElementById("messageForm");
console.log("messageForm: ", messageForm);


//Create a variable named messageSection
const messageSection = document.getElementById("messages");
messageSection.hidden = true;

//Create a variable named messageList
const messageList = messageSection.getElementsByTagName("ul");
console.log(messageList);


//callback for submit
//Add an event listener
messageForm.addEventListener("submit", function (event) {
    //prevent the default refreshing behavior
    event.preventDefault();
    const userName = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    // console.log(userName);
    // console.log(email);
    // console.log(usersMessage);

    //Create new message list item
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${userName}</a><span>${usersMessage}</span>`;

    //Create and append the removeButton
    let removeButton = createRemoveButton();
    newMessage.appendChild(removeButton);


    //show the message section if it was hidden
    messageSection.hidden = false;

    //Append the newMessage to the list
    messageList[0].appendChild(newMessage);

    //reset the form
    event.target.reset();

});


//Add remove button
//callback for remove button
//Add an event listener to the removeButton
function createRemoveButton() {
    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
        
        // Hide the message section if there are no messages left
        if (messageList.children.length === 0) {
            messageSection.hidden = true;
        };

    });
    return removeButton;
    
};

//Display Repositories in List
const projectSection = document.getElementById("projects");
console.log("projectSection: ", projectSection);
const projectList = projectSection.querySelector("ul");
console.log("projectList: ", projectList);

//Creating a fetch
fetch("https://api.github.com/users/OlenaTere/repos")
.then((res) => {
    return res.json();
})
//Handle a JSON data
.then((repositories) => {
    console.log("repositories: ", repositories);
    for (i=0; i<repositories.length; i++) {
        //console.log("i: ", i);
        const project = repositories[i].name;
        const li = document.createElement("li");
        //set the inner text of my project to the Array el
        li.innerText = project;
        //append the project element to the projectList element
        projectList.appendChild(li);
    }
})
//Handling errors
.catch((error) => {
    console.log("error: ", error)
})
