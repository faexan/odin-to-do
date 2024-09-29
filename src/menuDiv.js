const menuDisplay = function () {
  const menuIcon = document.querySelector(".menuIcon");
  const menuDiv = document.querySelector(".menuDiv");
  const mainScreenDiv = document.querySelector(".mainScreenDiv");

  menuIcon.addEventListener("click", () => {
    menuDiv.classList.toggle("sidebarActive");
    mainScreenDiv.classList.toggle("mainDivActive");
  });
};

const aPMheading = document.querySelector(".APMheading");
const addProjectForm = document.querySelector(".addProjectForm");
const addProjectCancel = document.querySelector(".APFbtn2");

aPMheading.addEventListener("click", () => {
  addProjectForm.classList.toggle("formExpanded");
});
addProjectCancel.addEventListener("click", () => {
  addProjectForm.classList.toggle("formExpanded");
});

export { menuDisplay };
