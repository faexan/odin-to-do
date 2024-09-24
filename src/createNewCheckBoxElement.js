let counter = 0; // A counter to generate unique IDs for each element

function createNewCheckboxElement(div, title) {
  counter++;
  
  // Create elements dynamically
  const wrapper = document.createElement('div');
  wrapper.classList.add('checkbox-wrapper-52');

  const label = document.createElement('label');
  label.classList.add('item');
  
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = `todo-${counter}`;
  input.classList.add('hidden');

  const cbxLabel = document.createElement('label');
  cbxLabel.setAttribute('for', `todo-${counter}`);
  cbxLabel.classList.add('cbx');
  cbxLabel.innerHTML = `
    <svg width="14px" height="12px" viewBox="0 0 14 12">
      <polyline points="1 7.6 5 11 13 1"></polyline>
    </svg>
  `;

  const textLabel = document.createElement('label');
  textLabel.setAttribute('for', `todo-${counter}`);
  textLabel.classList.add('cbx-lbl');
  textLabel.textContent = title; // Update label text if needed

  // Append everything
  label.appendChild(input);
  label.appendChild(cbxLabel);
  label.appendChild(textLabel);
  wrapper.appendChild(label);

  div.appendChild(wrapper); // Or wherever you want to append the new element
}



export {createNewCheckboxElement};