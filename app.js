const toggleBtn = document.getElementById("toggleBtn");
const moreContent = document.getElementById("moreContent");

// Page load par ye ensure karo ki content hidden ho aur button pe Show More ho
moreContent.style.display = "none";
toggleBtn.textContent = "Show More";

toggleBtn.addEventListener("click", function () {
  if (moreContent.style.display === "none") {
    moreContent.style.display = "block";
    toggleBtn.textContent = "Show Less";
  } else {
    moreContent.style.display = "none";
    toggleBtn.textContent = "Show More";
  }
});
