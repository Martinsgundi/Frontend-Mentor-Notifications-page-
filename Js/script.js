
const toggleUnreadNotifications = () => {
    const unreadNotifications = document.querySelectorAll(".unread");

    unreadNotifications.forEach ((unreadNotification) => {
        unreadNotification.classList.toggle("toggle-unread");
    });
};


const toggleRedDot = () => {
    const redDots = document.querySelectorAll(".red-unread-dot");

    redDots.forEach ((redDot) => {

        redDot.style.opacity ="0" // Fade out

        setTimeout (() => {
            redDot.classList.toggle("toggle-display-none");
            redDot.style.opacity ="1" // Fade in
        }, 300); // Delay to match the transition duration(300 = 0.3s)
    });    
};
        

const toggleNoOfUnread = () => {
    const noOfUnread = document.querySelector(".no-of-unread");
  
    noOfUnread.style.opacity = "0"; 

    setTimeout(() => {
        noOfUnread.classList.toggle("toggle-display-none");
        noOfUnread.style.opacity = "1";
    }, 300); 
};
            

const toggleBtn = document.querySelector(".mark-as-read");

const toggleBtnArray = [
  "Mark all as read",
  "Undo",
];

let toggleBtnIndex = 0;

toggleBtn.addEventListener("click", () => {
   
    toggleBtn.style.opacity = "0"; 

    setTimeout(() => {
        toggleBtnIndex = (toggleBtnIndex + 1) % toggleBtnArray.length; // Iterates through the array
        toggleBtn.textContent = toggleBtnArray[toggleBtnIndex]; // Interhanges the textContents available in the array
        toggleBtn.style.opacity = "1"; 
    }, 200);

    // Invoking other functions
    toggleUnreadNotifications();
    toggleRedDot();
    toggleNoOfUnread();
});



// Handling of Dark/Light mode 

const darkModeBtn = document.getElementById('dark-mode');
const lightModeBtn = document.getElementById('light-mode');

// Declared variable for all elements that needs to be styled
const body = document.body; 
const priHeading = document.querySelector(".pri-heading");
const profileNames = document.querySelectorAll(".profile-name");
const markAsRead = document.querySelector(".mark-as-read");
const postEvents = document.querySelectorAll(".post-event");
const unreadNotifications = document.querySelectorAll(".unread");
const main = document.getElementById("main");


// Dark mode 
const enableDarkMode = () => {
    darkModeBtn.style.display = "none";
    lightModeBtn.style.display = "inline";

    body.classList.add("body-and-unread-dark-mode");
    priHeading.classList.add("pri-heading-and-profile-name-dark-mode");

    profileNames.forEach((profileName) => {
        profileName.classList.add("pri-heading-and-profile-name-dark-mode");
    });

    markAsRead.classList.add("mark-as-read-and-post-event-dark-mode");
    postEvents.forEach((postEvent) => {
        postEvent.classList.add("mark-as-read-and-post-event-dark-mode")
    });

    unreadNotifications.forEach((unreadNotification) => {
        unreadNotification.classList.add("body-and-unread-dark-mode");
    });
    
    if (window.innerWidth >= 641) {
        main.classList.add("main-dark-mode");
    };
};


// Light Mode
const enableLightMode = () => {
    darkModeBtn.style.display = "inline";
    lightModeBtn.style.display = "none";

    body.classList.remove("body-and-unread-dark-mode");
    priHeading.classList.remove("pri-heading-and-profile-name-dark-mode");

    profileNames.forEach((profileName) => {
        profileName.classList.remove("pri-heading-and-profile-name-dark-mode");
    });

    markAsRead.classList.remove("mark-as-read-and-post-event-dark-mode");
    postEvents.forEach((postEvent) => {
        postEvent.classList.remove("mark-as-read-and-post-event-dark-mode")
    });

    unreadNotifications.forEach((unreadNotification) => {
        unreadNotification.classList.remove("body-and-unread-dark-mode");
    });

    if (window.innerWidth >= 641) {
        main.classList.remove("main-dark-mode");
    };
};


darkModeBtn.addEventListener("click", enableDarkMode);
lightModeBtn.addEventListener('click',enableLightMode);