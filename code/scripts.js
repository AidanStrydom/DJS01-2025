    const itemList = document.getElementById("itemList");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeModal = document.getElementById("closeModal");

    // ======== Populate the list dynamically ========
    dataList.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("item");
      div.textContent = item.title;

      // When clicked, open modal with that item’s info
      div.addEventListener("click", () => {
        modalTitle.textContent = item.title;
        modalDescription.textContent = item.description;
        modal.style.display = "flex";
      });

      itemList.appendChild(div);
    });

    // ======== Close modal on click ========
    closeModal.addEventListener("click", () => (modal.style.display = "none"));
    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });