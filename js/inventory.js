var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var d3 = document.getElementById("d3");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");

//Show more after first button
function showMore() {
  button1.style.display = "none";
  button2.style.display = "none";
  b1.style.display = "none";
  b2.style.display = "none";
  d3.style.display = "block";
  d4.style.display = "none";
}

//Show more after second button
function showMore2() {
  button1.style.display = "none";
  button2.style.display = "none";
  b1.style.display = "none";
  b2.style.display = "none";
  d3.style.display = "none";
  d4.style.display = "block";
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByName("newListLI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul#newListUL');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  li.setAttribute("id", "newListLI");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("newListUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} 