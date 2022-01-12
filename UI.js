const blocks = document.querySelectorAll(".block");
blocks.forEach(
  // Make selected block active

  (block) =>
    (block.onclick = () => {
      document.querySelectorAll(".block").forEach((block) => {
        block.classList.remove("active");
      });
      block.classList.add("active");
    })
);

setTimeout(() => {
  const numberOfBlocks = (document.querySelector("#nrBlocks").innerText =
    blocks.length);
}, 1000);
