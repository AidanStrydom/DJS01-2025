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

        const todoTasks = initialTasks.filter(t => t.status === "todo");

    // Generate tasks from array
    todoTasks.forEach(element => {
      const div = document.createElement("div");
      div.className = "task";
      div.textContent = element.title;
      div.onclick = () => displayModal(element.id);
      document.querySelector(".tasks-todo").appendChild(div);
    });

    const doingTasks = initialTasks.filter(t => t.status === "doing");

    // Generate tasks from array
    doingTasks.forEach(element => {
      const div = document.createElement("div");
      div.className = "task";
      div.textContent = element.title;
      div.onclick = () => displayModal(element.id);
      document.querySelector(".tasks-doing").appendChild(div);
    });

    const doneTasks = initialTasks.filter(t => t.status === "done");

    // Generate tasks from array
    doneTasks.forEach(element => {
      const div = document.createElement("div");
      div.className = "task";
      div.textContent = element.title;
      div.onclick = () => displayModal(element.id);
      document.querySelector(".tasks-done").appendChild(div);
    });

    // Close dialog when clicking the close icon

    document.addEventListener("DOMContentLoaded", () => {
      const closeIcon = document.getElementById("closeDialog");
      const dialog = document.getElementById("taskDialog");
      if (closeIcon && dialog) {
      closeIcon.onclick = () => dialog.close();
      }
    });

   


    function displayModal(id) {
      const task = initialTasks.find(t => t.id === id);
    
      // populate the dialog with task details

      const dialog = document.getElementById("taskDialog");
      let titleInput = dialog.querySelector('input[name="taskTitle"]');
      titleInput.value = task.title;
      let descInput = dialog.querySelector('textarea[name="taskDescription"]');
      descInput.value = task.description;
      let statusSelect = dialog.querySelector('select[name="taskStatus"]');
      statusSelect.value = task.status;
      dialog.showModal();
    }