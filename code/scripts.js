import { podcasts } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const modalsContainer = document.getElementById("modals");

  function renderPodcastModals(list) {
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
      modalsContainer.appendChild(modal);
    });
  }

  renderPodcastModals(podcasts);
});