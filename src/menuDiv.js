

const menuDisplay = function() {



    const  menuIcon = document.querySelector(".menuIcon");
    const menuDiv = document.querySelector(".menuDiv"); 
    const mainScreenDiv = document.querySelector(".mainScreenDiv");


    menuIcon.addEventListener("click", ()=> {
        menuDiv.classList.toggle("sidebarActive");
        mainScreenDiv.classList.toggle("mainDivActive");
    })
}


const aPMheading = document.querySelector(".APMheading");


aPMheading.addEventListener("click", ()=> {

    


})







export {menuDisplay};

