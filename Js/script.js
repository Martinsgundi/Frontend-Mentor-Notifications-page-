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
  
    noOfUnread.style.opacity = "0"; // fade out

    setTimeout(() => {
        noOfUnread.classList.toggle("toggle-display-none");
        noOfUnread.style.opacity = "1"; // fade in
    }, 300); // Delay to match the transition duration(300 = 0.3s)
};
            

const toggleBtn = document.querySelector(".mark-as-read");

const toggleBtnArray = [
  "Mark all as read",
  "Undo",
];

let toggleBtnIndex = 0;

toggleBtn.addEventListener("click", () => {
   
    toggleBtn.style.opacity = "0"; // Fade out

    setTimeout(() => {
        toggleBtnIndex = (toggleBtnIndex + 1) % toggleBtnArray.length; // Iterates through the array
        toggleBtn.textContent = toggleBtnArray[toggleBtnIndex]; // Interhanges the textContents available in the array
        toggleBtn.style.opacity = "1"; // Fade in
    }, 300); // Delay to match the transition duration(300 = 0.3s)

    // Invoking other functions
    toggleUnreadNotifications();
    toggleRedDot();
    toggleNoOfUnread();
});