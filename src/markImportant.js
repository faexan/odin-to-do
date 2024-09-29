import { saveTasksInLocalStorage } from "./localStorage";

const impFilter = function (objArr) {
  const arr = [];

  objArr.forEach((obj) => {
    if (obj.important == true) {
      arr.push(obj);
    }
  });
  return arr;
};

const markImpt = function (objArr) {
  const stars = document.querySelectorAll(".star");

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const starID = star.id;
      const taskID = starID.slice(0, -4);
      objArr.forEach((obj) => {
        if (obj.ID == taskID) {
          if (obj.important == true) {
            obj.important = false;
            star.style.color = "white";
          } else if (obj.important == false) {
            obj.important = true;
            star.style.color = "gold";
          }
        }
      });
      saveTasksInLocalStorage(objArr);
    });
  });
};

export { markImpt, impFilter };
