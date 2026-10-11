let menuBtn = document.querySelector("#menuBtn")
let sidebar = document.querySelector("#sidebar")

menuBtn.addEventListener("click", () => {
    // sidebar.classList.toggle("hidden");
   
    sidebar.classList.toggle("invisible");
    sidebar.classList.toggle("opacity-0");


    if (sidebar.classList.contains("invisible")) {
        menuBtn.innerHTML = "&#9776;";
        menuBtn.classList.remove("text-4xl");
        menuBtn.classList.add("text-2xl");
    } else {
        menuBtn.innerHTML = "&times;";
        menuBtn.classList.remove("text-2xl");
        menuBtn.classList.add("text-4xl");
    }
});