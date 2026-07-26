const loaderScreen = document.getElementById("loader-screen");

const tributeBtn = document.getElementById("tribute-btn");
const tributeModal = document.getElementById("tribute-modal");
const closeTributeModal = document.getElementById(
  "close-tribute-modal",
);

const galleryGrid = document.getElementById("gallery-grid");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxVideo = document.getElementById("lightbox-video");
const lightboxDownload = document.getElementById(
  "lightbox-download",
);
const lightboxClose = document.getElementById("lightbox-close");

/* Gallery items */

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "assets/images/gallery/grinch.png",
    alt: "A treasured photograph of Edley with the Grinch",
  },

  {
    id: 2,
    type: "image",
    src: "assets/images/gallery/younger photo.png",
    alt: "Edley as a young man",
  },

  {
    id: 3,
    type: "image",
    src: "assets/images/gallery/dadandgrandad.png",
    alt: "Edley with his son Michael Gibbons",
  },

  {
    id: 4,
    type: "image",
    src: "assets/images/gallery/thumbs up.png",
    alt: "Edley giving a thumbs up",
  },

  {
    id: 5,
    type: "video",
    src: "assets/images/videos/laytorest.mp4",
    thumbnail: "assets/images/videos/laytorest.png",
    alt: "A family video remembering Edley",
  },
    {
    id: 6,
    type: "video",
    src: "assets/images/videos/walkout.mp4",
    thumbnail: "assets/images/videos/walkout.png",
    alt: "A family video remembering Edley",
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

  galleryItems.forEach(function (item) {
    if (item.type === "video") {
      galleryGrid.innerHTML += `
        <button
          class="gallery-photo gallery-video"
          type="button"
          data-id="${item.id}"
          aria-label="Open ${item.alt}"
        >
          <video
            src="${item.src}"
            muted
            playsinline
            preload="metadata"
          ></video>

          <span class="video-play-icon" aria-hidden="true">
            ▶
          </span>
        </button>
      `;

      return;
    }

    galleryGrid.innerHTML += `
      <button
        class="gallery-photo"
        type="button"
        data-id="${item.id}"
        aria-label="Open ${item.alt}"
      >
        <img
          src="${item.src}"
          alt="${item.alt}"
          loading="lazy"
        />
      </button>
    `;
  });
}

renderGallery();

/* Open lightbox */

function openLightbox(item) {
  lightboxImage.style.display = "none";
  lightboxVideo.style.display = "none";

  lightboxImage.src = "";
  lightboxImage.alt = "";

  lightboxVideo.pause();
  lightboxVideo.removeAttribute("src");
  lightboxVideo.load();

  if (item.type === "video") {
    lightboxVideo.src = item.src;
    lightboxVideo.style.display = "block";

    lightboxDownload.textContent = "Download Video";
  } else {
    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt;
    lightboxImage.style.display = "block";

    lightboxDownload.textContent = "Download Photo";
  }

  const fileName = item.src.split("/").pop();

  lightboxDownload.href = item.src;
  lightboxDownload.download = fileName;

  lightbox.classList.add("lightbox-open");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.classList.add("no-scroll");

  lightboxClose.focus();
}

/* Close lightbox */

function closeLightbox() {
  lightbox.classList.remove("lightbox-open");
  lightbox.setAttribute("aria-hidden", "true");

  lightboxVideo.pause();
  lightboxVideo.removeAttribute("src");
  lightboxVideo.load();

  lightboxImage.src = "";
  lightboxImage.alt = "";

  lightboxDownload.href = "";
  lightboxDownload.removeAttribute("download");
  lightboxDownload.textContent = "Download";

  document.body.classList.remove("no-scroll");
}

/* Gallery clicks */

galleryGrid.addEventListener("click", function (event) {
  const clickedItem = event.target.closest(".gallery-photo");

  if (!clickedItem) {
    return;
  }

  const selectedId = Number(clickedItem.dataset.id);

  const selectedItem = galleryItems.find(function (item) {
    return item.id === selectedId;
  });

  if (!selectedItem) {
    return;
  }

  openLightbox(selectedItem);
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
]; .
*/