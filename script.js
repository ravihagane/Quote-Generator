const type = document.querySelector(".type");
const quoteContent = document.querySelector(".quoteContent");
const author = document.querySelector(".Author");
const generateBtn = document.querySelector(".generate");

generateBtn.addEventListener("click", () => {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quoteContent.textContent = data.content;
      type.textContent = data.tags;
      author.textContent = `--${data.author}`;
    });
});
