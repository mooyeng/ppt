let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");

document.querySelector(".points").innerHTML = user_points;
document.querySelector(".time_taken").innerHTML = user_time;


// const popupScreen = document.querySelector(".popup-screen");
// const popupBox = document.querySelector(".popup-box");
// const closeBtn = document.querySelector(".close-btn");

// window.addEventListener("load", () => {
//     setTimeout(() => {
//         popupScreen.classList.add("active");
//     }, 2000); //popup the screen in 2 sec
// });

// closeBtn.addEventListener("click", () => {
//     popupScreen.classList.remove("active"); // close the popup box 


    
// });