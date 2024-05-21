// TODAY ------------------------------------------------------------


// BUTTONS ------------------------------------------------------------
// standardize button width using javascript
const buttons = document.getElementsByClassName("width");

for (i = 0; i < buttons.length; i++) {
    buttons[i].style.width = "14rem";
    
}



// CARDS ------------------------------------------------------------
const cards = document.getElementsByClassName("card");
const cardTitles = document.getElementsByClassName("card-title");

// set fixed width on card class and bold card titles
 for (i = 0; i < cards.length; i++) {
    cards[i].style.width = "10rem";
    cardTitles[i].style.fontWeight = "600";
 }

// add background color to card headers

// active indicator for which day is today on This Week

