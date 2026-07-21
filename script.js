const loaderScreen = document.getElementById("loader-screen");

window.addEventListener("load", function () {

  setTimeout(function () {
    loaderScreen.classList.add("loader-hidden");
  }, 2000);

});

const tributeBtn = document.getElementById("tribute-btn");

const tributeModal = document.getElementById("tribute-modal");

const closeTributeModal = document.getElementById(
  "close-tribute-modal"
);


/* Opens tribute popup */

tributeBtn.addEventListener("click", function () {

  tributeModal.classList.add("tribute-modal-open");

});


/* Closes tribute popup */

closeTributeModal.addEventListener("click", function () {

  tributeModal.classList.remove("tribute-modal-open");

});


/* Closes popup when background is clicked */

tributeModal.addEventListener("click", function (event) {

  if (event.target === tributeModal) {

    tributeModal.classList.remove("tribute-modal-open");

  }

});


/* Closes popup when Escape key is pressed */

document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {

    tributeModal.classList.remove("tribute-modal-open");

  }

});

/* 
===================================================================================
|                                                                                 |
| This is a rough idea of what i think a CMS would be all from memory,            |
| I will adapt this into the website later on as right now this is just a small   |
| project meant to be meaningful.                                                 |
|                                                                                 |
===================================================================================








const trContainer = document.getElementById("tb-cards-container");

const tributes = [
  {
    id: 1,
    title: "Forever Remembered",
    paragraph: "You will always be in our hearts.",
    signature: "The Gibbons Family",
    isApproved: false
  },

  {
    id: 2,
    title: "A Life of Faith",
    paragraph: "Your faith and love will remain with us forever.",
    signature: "Your Family",
    isApproved: false
  }
];



button.addEventListener("click", approveTribute);

function approveTribute() {
    isApproved = True

    trContainer.innerHTML = ""

    tributes.forEach(tribute => {
        if (isApproved === True) {
        
            trContainer.innerHTML += `
                    <div class="tb-cards-container">    
            <a href="#" class="tribute-card">
                <h3 id="card-heading "class="card-heading">${tribute.title}</h3>
                <p id="tribute-text" class="tribute-text">${tribute.paragraph}</p>
                <p id="tributer" class="tributer">${tribute.signature}</p>
            </a>
          
        </div>`
    }
    });
    
   
}

*/
