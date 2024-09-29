const taskDetailDiv = function (tDetailsDiv, ID, taskN, taskDtl, taskd) {
  // Create the outer div elements
  const taskDetailsNameDiv = document.createElement("div");
  taskDetailsNameDiv.classList.add("taskDetailsNameDiv");

  const taskDetailsdetailDiv = document.createElement("div");
  taskDetailsdetailDiv.classList.add("taskDetailsdetailDiv");

  const taskDetailsDueDiv = document.createElement("div");
  taskDetailsDueDiv.classList.add("taskDetailsDueDiv");

  const taskDetailsCancelDiv = document.createElement("div");
  taskDetailsCancelDiv.classList.add("taskDetailsCancelDiv");

  // Create inner elements for taskDetailsNameDiv
  const taskDetailsNameLabel = document.createElement("span");
  taskDetailsNameLabel.classList.add("taskDetailsNameLabel");
  taskDetailsNameLabel.textContent = "Name: ";

  const taskDetailsName = document.createElement("span");
  taskDetailsName.classList.add("taskDetailsName");
  taskDetailsName.textContent = taskN;

  // Append inner elements to taskDetailsNameDiv
  taskDetailsNameDiv.appendChild(taskDetailsNameLabel);
  taskDetailsNameDiv.appendChild(document.createTextNode(" ")); // Add a space between label and content
  taskDetailsNameDiv.appendChild(taskDetailsName);

  // Create inner elements for taskDetailsdetailDiv
  const taskDetailsdetailLabel = document.createElement("span");
  taskDetailsdetailLabel.classList.add("taskDetailsdetailLabel");
  taskDetailsdetailLabel.textContent = "Details:";

  const taskDetailsdetail = document.createElement("span");
  taskDetailsdetail.classList.add("taskDetailsdetail");
  taskDetailsdetail.textContent = taskDtl;

  // Append inner elements to taskDetailsdetailDiv
  taskDetailsdetailDiv.appendChild(taskDetailsdetailLabel);
  taskDetailsdetailDiv.appendChild(document.createTextNode(" ")); // Add a space
  taskDetailsdetailDiv.appendChild(taskDetailsdetail);

  // Create inner elements for taskDetailsDueDiv
  const taskDetailsDueLabel = document.createElement("span");
  taskDetailsDueLabel.classList.add("taskDetailsDueLabel");
  taskDetailsDueLabel.textContent = "Due Date:";

  const taskDetailsDue = document.createElement("span");
  taskDetailsDue.classList.add("taskDetailsDue");
  taskDetailsDue.textContent = taskd;

  // Append inner elements to taskDetailsDueDiv
  taskDetailsDueDiv.appendChild(taskDetailsDueLabel);
  taskDetailsDueDiv.appendChild(document.createTextNode(" ")); // Add a space
  taskDetailsDueDiv.appendChild(taskDetailsDue);

  // Create cancel button for taskDetailsCancelDiv
  const taskDetailsCancelBtn = document.createElement("button");
  taskDetailsCancelBtn.classList.add("taskDetailsCancelBtn");
  taskDetailsCancelBtn.type = "button";
  taskDetailsCancelBtn.textContent = "Cancel";
  taskDetailsCancelBtn.id = `${ID}DetailsCancelBtn`;

  // Append button to taskDetailsCancelDiv
  taskDetailsCancelDiv.appendChild(taskDetailsCancelBtn);

  // Append all the divs to the parent tDetailsDiv
  tDetailsDiv.appendChild(taskDetailsNameDiv);
  tDetailsDiv.appendChild(taskDetailsdetailDiv);
  tDetailsDiv.appendChild(taskDetailsDueDiv);
  tDetailsDiv.appendChild(taskDetailsCancelDiv);
};

export { taskDetailDiv };
