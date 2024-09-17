


const menuDisplay = function() {



    const  menuIcon = document.querySelector(".menuIcon");
    const menuDiv = document.querySelector(".menuDiv"); 
    const mainScreenDiv = document.querySelector(".mainScreenDiv");

    let m = false;
    menuIcon.addEventListener("click", ()=> {
        if (m == false) {
            menuDiv.style.display ="none";
            mainScreenDiv.style.width = "100vw";
            m = true;
        } else {
            menuDiv.style.display = "flex";
            mainScreenDiv.style.width = "80vw";
            m = false;
        }
        



    })






    console.log("hello from menuDisplay Module")
}



export {menuDisplay};

