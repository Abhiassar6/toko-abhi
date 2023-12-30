const toggleButton = document.getElementById('toggleButton');
const toggleMenu = document.getElementById('toggleMenu');

toggleButton.addEventListener("click", () => {
    if(toggleMenu.style.display === "none"){
        toggleMenu.style.display = "flex";
    } else {
        toggleMenu.style.display = "none";
    }
})