const input = document.querySelector('#input');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#list');
const count = document.querySelector('#count');

let itemCount = 0;
addBtn.addEventListener('click', addItem);

function addItem() {

  // Add a "checked" symbol when clicking on a list item
  var list = document.getElementById('list');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
  if (input.value === '') {
    // show alert if we pess add button withount enter item 
    alert('Please enter a task');
  } else {
    const item = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');
    
    span.textContent = input.value;
    deleteBtn.textContent = 'Delete';
    
    item.appendChild(span);
    item.appendChild(deleteBtn);
    list.appendChild(item);

    input.value = '';
      let a=0
    // create delete function with dyanamic  counter 
    deleteBtn.addEventListener('click', function() {
      item.remove();
      itemCount--;
      count.textContent = itemCount;
    });
    // Create add function with dyanamic counter
    item.addEventListener('click', function() {
      item.classList.toggle('completed');
    });
    itemCount++;
    count.textContent = itemCount;
  }
}
