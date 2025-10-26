import { podcasts } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  renderPodcastModals(podcasts);
});

//Render podcast modals
function renderPodcastModals(list) {
  const modalsContainer = document.getElementById("modals");
  modalsContainer.innerHTML = "";
  list.forEach(podcast => {
    const modal = document.createElement("div");
    modal.classList.add("modal-card");
    modal.innerHTML = `
      <img src="${podcast.image}" alt="${podcast.title}">
      <div class="modal-info">
        <h2>${podcast.title}</h2>
        <p>${podcast.description}</p>
        <div class="modal-meta">
          <strong>Seasons:</strong> ${podcast.seasons} <br>
          <strong>Last Updated:</strong> ${new Date(podcast.updated).toLocaleDateString()}
        </div>
      </div>
    `;
  
    modal.addEventListener("click", () => openPodcastModal(podcast));
    modalsContainer.appendChild(modal);
  });
}
//Overlay modal

// Modal elements
const podcastModal = document.getElementById("podcast-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const modalGenres = document.getElementById("modal-genres");
const modalSeasons = document.getElementById("modal-seasons");
const modalEpisodes = document.getElementById("modal-episodes");
const closeBtn = document.querySelector(".close-btn");

// Function to open modal
function openPodcastModal(podcast) {
  modalTitle.textContent = podcast.title;
  modalImage.src = podcast.image;
  modalDescription.textContent = podcast.description;
  modalGenres.textContent = `Genres: ${podcast.genres.join(", ")}`;
  modalSeasons.textContent = `Seasons: ${podcast.seasons}`;

  // Clear previous episodes
  modalEpisodes.innerHTML = "";
  if (podcast.episodes) {
    podcast.episodes.forEach(ep => {
      const epItem = document.createElement("p");
      epItem.textContent = `S${ep.season}E${ep.episode}: ${ep.title}`;
      modalEpisodes.appendChild(epItem);
    });
  }

  podcastModal.classList.remove("hidden");
}

// Close modal on X
closeBtn.addEventListener("click", () => {
  podcastModal.classList.add("hidden");
});

// Optional: close modal if clicking outside content
podcastModal.addEventListener("click", (e) => {
  if (e.target === podcastModal) {
    podcastModal.classList.add("hidden");
  }
});