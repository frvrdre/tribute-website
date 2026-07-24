const loaderScreen = document.getElementById("loader-screen");

const tributeBtn = document.getElementById("tribute-btn");
const tributeModal = document.getElementById("tribute-modal");
const closeTributeModal = document.getElementById(
  "close-tribute-modal",
);

const galleryGrid = document.getElementById("gallery-grid");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxDownload = document.getElementById(
  "lightbox-download",
);
const lightboxClose = document.getElementById("lightbox-close");

/* Gallery images */

const galleryImages = [
  {
    id: 1,
    src: "assets/images/edley-gallery-1.jpg",
    alt: "A treasured photograph of Edley",
  },

  {
    id: 2,
    src: "assets/images/edley-gallery-2.jpg",
    alt: "Edley spending time with his family",
  },

  {
    id: 3,
    src: "assets/images/edley-gallery-3.jpg",
    alt: "A happy memory of Edley",
  },

  {
    id: 4,
    src: "assets/images/edley-gallery-4.jpg",
    alt: "Edley at a special family occasion",
  },

  {
    id: 5,
    src: "assets/images/edley-gallery-5.jpg",
    alt: "Edley surrounded by loved ones",
  },

  {
    id: 6,
    src: "assets/images/edley-gallery-6.jpg",
    alt: "A photograph remembering Edley",
  },
];

/* Loader */

window.addEventListener("load", function () {
  setTimeout(function () {
    loaderScreen.classList.add("loader-hidden");
  }, 2000);
});

/* Tribute popup */

function openTributeModal() {
  tributeModal.classList.add("tribute-modal-open");
  tributeModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("no-scroll");
}

function closeTributeForm() {
  tributeModal.classList.remove("tribute-modal-open");
  tributeModal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("no-scroll");
}

tributeBtn.addEventListener("click", openTributeModal);

closeTributeModal.addEventListener("click", closeTributeForm);

tributeModal.addEventListener("click", function (event) {
  if (event.target === tributeModal) {
    closeTributeForm();
  }
});

/* Render gallery */

function renderGallery() {
  galleryGrid.innerHTML = "";

  galleryImages.forEach(function (image) {
    galleryGrid.innerHTML += `
      <button
        class="gallery-photo"
        type="button"
        data-image="${image.src}"
        aria-label="Open ${image.alt}"
      >
        <img
          src="${image.src}"
          alt="${image.alt}"
          loading="lazy"
        />
      </button>
    `;
  });
}

renderGallery();

/* Open lightbox */

function openLightbox(photo) {
  const selectedImage = photo.querySelector("img");
  const imagePath = photo.dataset.image;
  const imageName = imagePath.split("/").pop();

  lightboxImage.src = imagePath;
  lightboxImage.alt = selectedImage.alt;

  lightboxDownload.href = imagePath;
  lightboxDownload.download = imageName;

  lightbox.classList.add("lightbox-open");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.classList.add("no-scroll");

  lightboxClose.focus();
}

/* Close lightbox */

function closeLightbox() {
  lightbox.classList.remove("lightbox-open");
  lightbox.setAttribute("aria-hidden", "true");

  lightboxImage.src = "";
  lightboxImage.alt = "";

  lightboxDownload.href = "";
  lightboxDownload.removeAttribute("download");

  document.body.classList.remove("no-scroll");
}

/* Gallery click */

galleryGrid.addEventListener("click", function (event) {
  const clickedPhoto = event.target.closest(".gallery-photo");

  if (!clickedPhoto) {
    return;
  }

  openLightbox(clickedPhoto);
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

/* Keyboard controls */

document.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    lightbox.classList.contains("lightbox-open")
  ) {
    closeLightbox();
    return;
  }

  if (
    event.key === "Escape" &&
    tributeModal.classList.contains("tribute-modal-open")
  ) {
    closeTributeForm();
  }
});

/* Rough CMS concept preserved for later implementation */

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
*/