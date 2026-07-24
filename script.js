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

// Gallery lightbox

const galleryButtons = document.querySelectorAll(".gallery-image-btn");
const galleryLightbox = document.querySelector("#gallery-lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxClose = document.querySelector("#lightbox-close");

function openGalleryImage(button) {
  const imageSource = button.dataset.image;
  const imageCaption = button.dataset.caption;

  lightboxImage.src = imageSource;
  lightboxImage.alt = imageCaption;
  lightboxCaption.textContent = imageCaption;

  galleryLightbox.classList.add("is-open");
  galleryLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");

  lightboxClose.focus();
}

function closeGalleryImage() {
  galleryLightbox.classList.remove("is-open");
  galleryLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");

  lightboxImage.src = "";
}

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openGalleryImage(button);
  });
});

lightboxClose.addEventListener("click", closeGalleryImage);

galleryLightbox.addEventListener("click", (event) => {
  if (event.target === galleryLightbox) {
    closeGalleryImage();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    galleryLightbox.classList.contains("is-open")
  ) {
    closeGalleryImage();
  }
});

/* Rough CMS concept preserved for later implementation. */

/*
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
