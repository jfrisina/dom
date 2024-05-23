// GENERAL ------------------------------------------------------------
font-family: "Roboto", sans-serif;

font-weight: 700;




// TODAY ------------------------------------------------------------
 var todayList = document.getElementById("today-list");


document.addEventListener("DOMContentLoaded", function() {
    if (todayList.children.length === 0) {
        let message = "No one is out of the library today."
        let listItem = document.createElement("li")
        let liText = document.createTextNode(message);
        listItem.appendChild(liText);
        todayList.appendChild(listItem);
    }
});



// BUTTONS ------------------------------------------------------------
// standardize button width using javascript
const buttons = document.getElementsByClassName("width");

for (i = 0; i < buttons.length; i++) {
    buttons[i].style.width = "14rem";
    
}

// THIS WEEK ------------------------------------------------------------
const cards = document.getElementsByClassName("card");
const cardTitles = document.getElementsByClassName("card-title");

// set fixed width on card class and bold card titles
 for (i = 0; i < cards.length; i++) {
    cards[i].style.width = "10rem";
    cardTitles[i].style.fontWeight = "600";
    cards[i].style.minHeight = "10rem";
 }


// active indicator for which day is today on This Week
let day = new Date().toString().substring(0,3);

switch(day) {
    case "Mon":
        day = "Monday";
        break;
    case "Tue":
        day = "Tuesday";
        break;
    case "Wed":
        day = "Wednesday";
        break;
    case "Thu":
        day = "Thursday";
        break;
    case "Fri":
        day = "Friday";
        break;
    case "Sat":
        day = "Saturday";
        break;
}



// add background color to card headers


// add mouseover event listener for the day's block to make it change color or get bigger



// FORM ------------------------------------------------------------
// set variables
const submitButton = document.getElementById("btn-submit");

// attach event listener to button
submitButton.addEventListener("click", addPerson);

// add name to Today's list
function addPerson() {
    const staffInfo = document.querySelectorAll("input");
    const staffName = staffInfo[0].value;
    const capitalizedStaffName = staffName.charAt(0).toUpperCase() + staffName.slice(1);
    const startDate = staffInfo[1].value;
    const endDate = staffInfo[2].value;
    const today = new Date().toISOString().substring(0,10);
    if (startDate === today) {
        let personItem = document.createElement("li");
        personItem.textContent = capitalizedStaffName;
        todayList.appendChild(personItem);
        staffInfo.forEach(input => {
            input.value = "";
        })
    }            
};

