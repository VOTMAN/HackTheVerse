let submitBtn = document.querySelector(".submit");
let submitText = document.querySelector(".hide")

submitBtn.addEventListener("click", () => {
    submitText.classList.remove("hide");
})