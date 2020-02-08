const nav = document.querySelector("nav");
const logo = document.querySelector("#logo");
const dark = document.querySelector(".dark");
const navLink = document.querySelector("nav a");

const logoOptions = {
    rootMargin: "-170px 0px 0px 0px"
}

// const darkOptions = {
//     rootMargin: "-510px 0px 0px 0px"
// }

const logoObserver = new IntersectionObserver(function(entries, logoObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.style.display = "block";
        } else{
            nav.style.display = "none";
        }
    });
}, logoOptions);

logoObserver.observe(logo);

// const darkObserver = new IntersectionObserver(function(entries, darkObserver){
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             nav.style.backgroundColor = "#fff";
//             navLink.style.color = "#333";
//         } else{
//             nav.style.backgroundColor = "rgba(51, 51, 51, .8)";
//             navLink.style.color = "fff";
//         }
//     });
// }, darkOptions);

// darkObserver.observe(dark);
