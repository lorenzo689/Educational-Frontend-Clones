let settingsmenu = document.querySelector(".settings-menu");
let darkBtn = document.getElementById("dark-btn"); 


function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}


if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode(); 
} else {
    disableDarkMode(); 
}


function enableDarkMode() {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
    localStorage.setItem("darkMode", "enabled"); 
}


function disableDarkMode() {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
    localStorage.setItem("darkMode", "disabled");
}


darkBtn.onclick = function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
};
