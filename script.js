document.getElementById('add-btn').addEventListener('click', newTask);

function newTask(){
  const inputTask = document.getElementById('input-task').value;

  var li = document.createElement('li');
  var t = document.createTextNode(inputTask); //remove quotes here
  li.appendChild(t);
  document.getElementById('task-table').appendChild(li);
} 

