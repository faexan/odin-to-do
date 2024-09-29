const editAndDetailsExpand = function () {
  const editTriggers = document.querySelectorAll(".editTaskIcon");
  const editTriggers2 = document.querySelectorAll(".editTaskCancel");

  const detailsTriggers = document.querySelectorAll(".taskDetailsBtn");
  const detailsTriggers2 = document.querySelectorAll(".taskDetailsCancelBtn"); // Fixed typo

  // For expanding edit task div
  editTriggers.forEach((t) => {
    t.addEventListener("click", () => {
      const tId = t.id;
      const eDivID = `${tId.slice(0, -8)}EditDiv`;
      const eD = document.getElementById(eDivID);
      eD.classList.toggle("editTaskDivExpanded");

      const dDivID = `${tId.slice(0, -8)}DetailsDiv`;
      const dD = document.getElementById(dDivID);

      if (dD.classList.contains("taskDetailsDivExpanded")) {
        dD.classList.remove("taskDetailsDivExpanded");
      }
    });
  });

  // For canceling edit task div expansion
  editTriggers2.forEach((t) => {
    t.addEventListener("click", () => {
      const tId = t.id;
      const eDivID = `${tId.slice(0, -13)}EditDiv`;
      const eD = document.getElementById(eDivID);

      eD.classList.toggle("editTaskDivExpanded");
    });
  });

  // For expanding task details div
  detailsTriggers.forEach((t) => {
    t.addEventListener("click", () => {
      const tId = t.id;
      const dDivID = `${tId.slice(0, -10)}DetailsDiv`;
      const dD = document.getElementById(dDivID);
      dD.classList.toggle("taskDetailsDivExpanded");

      const edDivId = `${tId.slice(0, -10)}EditDiv`;
      const eDiv = document.getElementById(edDivId);

      if (eDiv.classList.contains("editTaskDivExpanded")) {
        eDiv.classList.remove("editTaskDivExpanded");
      }
    });
  });

  // For canceling task details div expansion
  detailsTriggers2.forEach((t) => {
    t.addEventListener("click", () => {
      // Move event listener inside forEach
      const tId = t.id;
      const dDivID = `${tId.slice(0, -16)}DetailsDiv`;
      const dDiv = document.getElementById(dDivID);

      dDiv.classList.toggle("taskDetailsDivExpanded");
    });
  });
};

export { editAndDetailsExpand };
