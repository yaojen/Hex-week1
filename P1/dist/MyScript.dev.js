"use strict";

var todoData = [];
document.getElementById('addTodo').addEventListener('click', function () {
  var str = '';

  if (document.getElementById('newTodo').value.trim() !== '') {
    todoData.push({
      id: Math.floor(Date.now()),
      title: document.getElementById('newTodo').value,
      completed: false
    });
    todoData.forEach(function (item) {
      str += "<li class=\"list-group-item\">\n<div class=\"d-flex\">\n<div class=\"form-check\">\n<input type=\"checkbox\" class=\"form-check-input\" ".concat(item.completed ? 'checked' : '', " data-action=\"complete\" data-id=\"").concat(item.id, "\">\n<label class=\"form-check-label ").concat(item.completed ? 'completed' : '', "\" data-action=\"complete\" data-id=\"").concat(item.id, "\"> ").concat(item.title, "</label>\n</div>\n<button type=\"button\" class=\"close ml-auto\" aria-label=\"Close\">\n<span aria-hidden=\"true\" data-action=\"remove\" data-id=\"").concat(item.id, "\">&times;</span>\n</button>\n</div>\n</li>");
    });
    document.getElementById('todoList').innerHTML = str;
    document.getElementById('taskCount').textContent = todoData.length;
    document.getElementById('newTodo').value = '';
  }
});
document.getElementById('clearTask').addEventListener('click', function (e) {
  e.preventDefault();
  todoData = [];
  document.getElementById('todoList').innerHTML = '';
  document.getElementById('taskCount').textContent = todoData.length;
});
document.getElementById('todoList').addEventListener('click', function (e) {
  var newIndex = 0;

  if (e.target.dataset.action == 'remove') {
    todoData.forEach(function (item, key) {
      if (e.target.dataset.id == item.id) {
        newIndex = key;
      }
    });
    todoData.splice(newIndex, 1);
    var str = '';
    todoData.forEach(function (item) {
      str += "<li class=\"list-group-item\">\n<div class=\"d-flex\">\n<div class=\"form-check\">\n<input type=\"checkbox\" class=\"form-check-input\" ".concat(item.completed ? 'checked' : '', " data-action=\"complete\" data-id=\"").concat(item.id, "\">\n<label class=\"form-check-label ").concat(item.completed ? 'completed' : '', "\" data-action=\"complete\" data-id=\"").concat(item.id, "\"> ").concat(item.title, "</label>\n</div>\n<button type=\"button\" class=\"close ml-auto\" aria-label=\"Close\">\n<span aria-hidden=\"true\" data-action=\"remove\" data-id=\"").concat(item.id, "\">&times;</span>\n</button>\n</div>\n</li>");
    });
    document.getElementById('todoList').innerHTML = str;
    document.getElementById('taskCount').textContent = todoData.length;
  }
});
document.getElementById('todoList').addEventListener('click', function (e) {
  if (e.target.dataset.action == 'complete') {
    todoData.forEach(function (item) {
      if (e.target.dataset.id == item.id) {
        if (item.completed) {
          item.completed = false;
        } else {
          item.completed = true;
        }
      }
    });
    var str = '';
    todoData.forEach(function (item) {
      str += "<li class=\"list-group-item\">\n<div class=\"d-flex\">\n<div class=\"form-check\">\n<input type=\"checkbox\" class=\"form-check-input\" ".concat(item.completed ? 'checked' : '', " data-action=\"complete\" data-id=\"").concat(item.id, "\">\n<label class=\"form-check-label ").concat(item.completed ? 'completed' : '', "\" data-action=\"complete\" data-id=\"").concat(item.id, "\"> ").concat(item.title, "</label>\n</div>\n<button type=\"button\" class=\"close ml-auto\" aria-label=\"Close\">\n<span aria-hidden=\"true\" data-action=\"remove\" data-id=\"").concat(item.id, "\">&times;</span>\n</button>\n</div>\n</li>");
    });
    document.getElementById('todoList').innerHTML = str;
    document.getElementById('taskCount').textContent = todoData.length;
  }
});