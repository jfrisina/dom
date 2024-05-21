// TODAY ------------------------------------------------------------







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

// add background color to card headers



// active indicator for which day is today on This Week

// FORM ------------------------------------------------------------
// set variables
const submitButton = document.getElementById("btn-submit");
const todayList = document.getElementById("today-list");
const staffInfo = document.querySelectorAll("input");
const staffName = staffInfo[0].value;
const startDate = staffInfo[1].value;
const endDate = staffInfo[2].value;
const today = new Date().toISOString().substring(0,10);


// attach event listener to button
submitButton.addEventListener("click", addPerson);

// add name to Today's list
function addPerson() {
    if (startDate === today) {
        let personItem = document.createElement("li");
        personItem.textContent = staffName;
        todayList.appendChild(personItem);
        staffInfo.forEach(input => {
            input.value = "";
        })
    }            
};


