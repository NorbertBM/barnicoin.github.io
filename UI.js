document.querySelectorAll(".block").forEach(
  // Make selected block active
  (block) =>
    (block.onclick = () => {
      document.querySelectorAll(".block").forEach((block) => {
        block.classList.remove("active");
      });
      block.classList.add("active");
    })
);

const closeBtn = document
  .querySelectorAll("button.btn-close")
  .forEach(
    (closeBtn) =>
      (closeBtn.onclick = (e) =>
        e.target.parentElement.parentElement.classList.remove("show"))
  );
