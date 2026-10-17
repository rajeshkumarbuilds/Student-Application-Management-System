let menuBtn = document.querySelector("#menuBtn")
let sidebar = document.querySelector("#sidebar")
let overlay = document.querySelector("#overlay")

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("invisible");
    sidebar.classList.toggle("opacity-0");
    // overlay.classList.toggle("hidden")
    // document.body.classList.toggle("fixed")


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

// Personal form .js

const personalForm = document.querySelector("#personalForm")
if (personalForm) {
    let personalFormSubmitted = false;
    personalForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const formData = new FormData(personalForm);
        const dataObject = Object.fromEntries(formData.entries());
        console.log(dataObject);
        localStorage.setItem("personalForm", JSON.stringify(dataObject))

        console.log("form data saved:", dataObject)
        personalFormSubmitted = true;
        if (personalFormSubmitted) {
            window.location.href = "education.html"
        }

    })
}